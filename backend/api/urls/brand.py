from django.urls import path

from backend.api.views.brand import BrandViewSet

urlpatterns = [
    path(
        "brands/me/",
        BrandViewSet.as_view({"get": "retrieve", "post": "create", "patch": "update"}),
        name="brand-me",
    ),
] 