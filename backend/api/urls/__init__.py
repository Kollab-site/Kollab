from django.urls import path, include

urlpatterns = [
    path("", include("backend.api.urls.users")),
] 