from django.urls import path

from backend.api.views.communication import ContactUsAPIView

urlpatterns = [
    path('contact-us/', ContactUsAPIView.as_view(), name='contact-us'),
]