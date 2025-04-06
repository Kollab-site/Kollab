from django.urls import path

from backend.api.views.users import (
    UserEndpoint,
    UpdateUserOnBoardedEndpoint,
)

urlpatterns = [
    # User profile endpoints
    path("users/me/", UserEndpoint.as_view({"get": "retrieve", "patch": "partial_update"}), name="user-me"),
    path("users/me/onboard/", UpdateUserOnBoardedEndpoint.as_view(), name="user-onboard"),
    
    # Authentication endpoints
    path("auth/login/", UserEndpoint.as_view({"post": "login"}), name="auth-login"),
    path("auth/register/", UserEndpoint.as_view({"post": "register"}), name="auth-register"),
    path("auth/logout/", UserEndpoint.as_view({"post": "logout"}), name="auth-logout"),
    path("auth/verify-email/", UserEndpoint.as_view({"post": "verify_email"}), name="auth-verify-email"),
    path("auth/reset-password/", UserEndpoint.as_view({"post": "reset_password"}), name="auth-reset-password"),
    path("auth/change-password/", UserEndpoint.as_view({"post": "change_password"}), name="auth-change-password"),
]
