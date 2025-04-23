# Module imports
from rest_framework import serializers, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist

from backend.api.serializers.users import (
    UserMeSerializer, 
    UserSerializer, 
    ChangePasswordSerializer,
    ResetPasswordSerializer,
    BrandSignupSerializer,
    InfluencerSignupSerializer,
    BrandSerializer,
    InfluencerSerializer
)
from backend.db.models import User

from .base import BaseAPIView, BaseViewSet


class UserEndpoint(BaseViewSet):
    serializer_class = UserSerializer
    model = User
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'brand_signup':
            return BrandSignupSerializer
        elif self.action == 'influencer_signup':
            return InfluencerSignupSerializer
        return super().get_serializer_class()

    def get_object(self):
        return self.request.user

    def retrieve(self, request):
        serialized_data = UserMeSerializer(request.user).data
        return Response(
            serialized_data,
            status=status.HTTP_200_OK,
        )

    def partial_update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=True)

        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(UserMeSerializer(user).data, status=status.HTTP_200_OK)
        except serializers.ValidationError as e:
            return Response(
                {
                    "message": e.detail,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {
                    "message": "Something went wrong",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

    def deactivate(self, request):
        pass

    # Authentication methods
    def get_permissions(self):
        if self.action in ['login', 'register', 'brand_signup', 'influencer_signup', 'reset_password', 'verify_email']:
            return [AllowAny()]
        return super().get_permissions()
        
    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response(
                {"message": "Email and password are required"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        user = authenticate(email=email, password=password)
        
        if not user:
            return Response(
                {"message": "Invalid credentials"},
                status=status.HTTP_401_UNAUTHORIZED
            )
            
        if not user.is_active:
            return Response(
                {"message": "User account is deactivated"},
                status=status.HTTP_403_FORBIDDEN
            )
            
        refresh = RefreshToken.for_user(user)
        
        return Response({
            "user": UserMeSerializer(user).data,
            "tokens": {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            }
        }, status=status.HTTP_200_OK)
        
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            
            # Set password if provided
            if 'password' in request.data:
                user.set_password(request.data['password'])
                user.save()
                
            refresh = RefreshToken.for_user(user)
            
            return Response({
                "user": UserMeSerializer(user).data,
                "tokens": {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                }
            }, status=status.HTTP_201_CREATED)
        except serializers.ValidationError as e:
            return Response(
                {"message": e.detail},
                status=status.HTTP_400_BAD_REQUEST
            )
            
    def logout(self, request):
        try:
            refresh_token = request.data.get('refresh')
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
                
            return Response({"message": "Successfully logged out"}, status=status.HTTP_200_OK)
        except Exception:
            return Response({"message": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)
            
    def verify_email(self, request):
        token = request.data.get('token')
        
        if not token:
            return Response(
                {"message": "Token is required"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        try:
            # Implement email verification logic here
            # This is a placeholder - you'll need to implement the actual verification
            return Response(
                {"message": "Email verified successfully"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"message": "Invalid or expired token"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
    def reset_password(self, request):
        email = request.data.get('email')
        
        if not email:
            return Response(
                {"message": "Email is required"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        try:
            user = User.objects.get(email=email)
            # Implement password reset logic here
            # This is a placeholder - you'll need to implement the actual reset process
            
            return Response(
                {"message": "Password reset instructions sent to your email"},
                status=status.HTTP_200_OK
            )
        except ObjectDoesNotExist:
            return Response(
                {"message": "User with this email does not exist"},
                status=status.HTTP_404_NOT_FOUND
            )
            
    def change_password(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        
        if serializer.is_valid():
            user = request.user
            
            # Check old password
            if not user.check_password(serializer.validated_data['old_password']):
                return Response(
                    {"message": "Current password is incorrect"},
                    status=status.HTTP_400_BAD_REQUEST
                )
                
            # Set new password
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            
            return Response(
                {"message": "Password changed successfully"},
                status=status.HTTP_200_OK
            )
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def brand_signup(self, request):
        serializer = self.get_serializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            
            if 'password' in request.data:
                user.set_password(request.data['password'])
                user.save()
                
            # Create brand profile
            brand_data = {
                'user': user.id,
                # Add other brand-specific fields from request.data
            }
            brand_serializer = BrandSerializer(data=brand_data)
            if brand_serializer.is_valid():
                brand_serializer.save()
            else:
                user.delete()  # Rollback user creation if brand profile creation fails
                return Response(brand_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
            refresh = RefreshToken.for_user(user)
            
            return Response({
                "user": UserMeSerializer(user).data,
                "tokens": {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                }
            }, status=status.HTTP_201_CREATED)
        except serializers.ValidationError as e:
            return Response(
                {"message": e.detail},
                status=status.HTTP_400_BAD_REQUEST
            )

    def influencer_signup(self, request):
        serializer = self.get_serializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            
            if 'password' in request.data:
                user.set_password(request.data['password'])
                user.save()
                
            # Create influencer profile
            influencer_data = {
                'user': user.id,
                # Add other influencer-specific fields from request.data
            }
            influencer_serializer = InfluencerSerializer(data=influencer_data)
            if influencer_serializer.is_valid():
                influencer_serializer.save()
            else:
                user.delete()  # Rollback user creation if influencer profile creation fails
                return Response(influencer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
            refresh = RefreshToken.for_user(user)
            
            return Response({
                "user": UserMeSerializer(user).data,
                "tokens": {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                }
            }, status=status.HTTP_201_CREATED)
        except serializers.ValidationError as e:
            return Response(
                {"message": e.detail},
                status=status.HTTP_400_BAD_REQUEST
            )


class UpdateUserOnBoardedEndpoint(BaseAPIView):
    def patch(self, request):
        user = User.objects.get(pk=request.user.id, is_active=True)
        user.is_onboarded = request.data.get("is_onboarded", False)
        user.save()
        return Response({"message": "Updated successfully"}, status=status.HTTP_200_OK)