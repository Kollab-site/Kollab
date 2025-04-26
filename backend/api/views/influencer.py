from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from backend.db.models.influencer import Influencer
from backend.api.serializers.influencer import InfluencerSerializer
from .base import BaseViewSet


class InfluencerViewSet(BaseViewSet):
    serializer_class = InfluencerSerializer
    model = Influencer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        try:
            return self.model.objects.get(user=self.request.user)
        except self.model.DoesNotExist:
            return None

    def create(self, request):
        # Check if user already has an influencer profile
        if self.get_object():
            return Response(
                {"message": "You already have an influencer profile"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if not instance:
            return Response(
                {"message": "Influencer profile not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 