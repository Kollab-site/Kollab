from rest_framework import serializers

from backend.db.models.communication import ContactUs

class ContactUsSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    message = serializers.CharField()

    def create(self, validated_data):
        """
        Create and return a new ContactUs message instance.

        Args:
            validated_data (dict): Validated data containing contact form fields.

        Returns:
            ContactUs: The created ContactUs instance.
        """
        return ContactUs.objects.create(**validated_data)