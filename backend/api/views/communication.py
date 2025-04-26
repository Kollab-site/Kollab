from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from backend.api.serializers.communication import (
    ContactUsSerializer,
)
from backend.api.views.base import BaseAPIView


class ContactUsAPIView(BaseAPIView):
    permission_classes = [
        AllowAny,
    ]
    serializer_class = ContactUsSerializer

    def post(self, request):
        """
        Submit a contact message to the DjangoIndia team.

        This endpoint allows users to send inquiries, feedback, or general messages to the team.
        It validates and stores the incoming data.

        Args:
            request (Request): The HTTP request object containing message data.

        Returns:
            Response:
                - 201 CREATED: If the message was successfully submitted.
                - 500 INTERNAL SERVER ERROR: If an unexpected error occurs.
        """
        try:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(
                {
                    "message": "Message received! We'll be in touch before you can say 'supercalifragilisticexpialidocious.' 😜"
                },
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )