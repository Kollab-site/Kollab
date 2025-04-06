# Module import
from rest_framework import serializers

from backend.db.models.users import User

from .base import BaseSerializer


class UserSerializer(BaseSerializer):
    username = serializers.CharField(max_length=150, min_length=3, required=False)

    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
            "is_superuser",
            "is_staff",
            "is_onboarded",
            "is_password_autoset",
            "is_email_verified",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "username": {"validators": []},  # Remove default validators
            "user_timezone": {"default": "UTC"},  # Set default timezone
        }

    def validate_username(self, value):
        # Check if username is unique
        if value:
            query = User.objects.filter(username=value)
            if self.instance:  # If updating
                query = query.exclude(pk=self.instance.pk)
            if query.exists():
                raise serializers.ValidationError(
                    "A user with this username already exists."
                )
        return value

    def create(self, validated_data):
        # Ensure user_timezone is set
        if 'user_timezone' not in validated_data:
            validated_data['user_timezone'] = 'UTC'
        return super().create(validated_data)

    def update(self, instance, validated_data):
        # Remove username from validated data if it's not changed
        if (
            "username" in validated_data
            and validated_data["username"] == instance.username
        ):
            validated_data.pop("username")

        return super().update(instance, validated_data)


class UserMeSerializer(BaseSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "avatar",
            "created_at",
            "email",
            "first_name",
            "last_name",
            "is_active",
            "is_email_verified",
            "is_onboarded",
            "mobile_number",
            "user_timezone",
            "username",
            "is_password_autoset",
            "gender",
            "bio",
            "about",
            "website",
            "linkedin",
            "github",
            "twitter",
            "instagram",
            "cover_image",
            "country",
            "organization",
            "mastodon",
        ]
        read_only_fields = fields


class ChangePasswordSerializer(serializers.Serializer):
    model = User

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, min_length=8)
    confirm_password = serializers.CharField(required=True, min_length=8)

    def validate(self, data):
        if data.get("old_password") == data.get("new_password"):
            raise serializers.ValidationError(
                {"message": "New password cannot be same as old password."}
            )

        if data.get("new_password") != data.get("confirm_password"):
            raise serializers.ValidationError(
                {"message": "Confirm password should be same as the new password."}
            )

        return data


class ResetPasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """

    new_password = serializers.CharField(required=True, min_length=8)


class UserLiteSerializer(BaseSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "avatar",
            "username",
            "bio",
            "about",
            "email",
            "cover_image",
            "website",
            "linkedin",
            "github",
            "twitter",
            "instagram",
            "mastodon",
            "country",
            "organization",
        ]
        read_only_fields = [
            "id",
            "username",
            "email",
        ]


class UserAdminLiteSerializer(BaseSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "avatar",
            "username",
            "email",
        ]
        read_only_fields = [
            "id",
        ]