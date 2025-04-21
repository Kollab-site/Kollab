from django.urls import path

from backend.api.views.influencer import InfluencerViewSet

urlpatterns = [
    path(
        "influencers/me/",
        InfluencerViewSet.as_view({"get": "retrieve", "post": "create", "patch": "update"}),
        name="influencer-me",
    ),
] 