from rest_framework import serializers

from backend.db.models import Influencer, Brand
from .base import BaseSerializer


class InfluencerSerializer(BaseSerializer):
    class Meta:
        model = Influencer
        fields = "__all__"
        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
            "is_verified",
        ]

    def validate(self, data):
        # Validate that min_campaign_budget is less than max_campaign_budget
        if data.get("min_campaign_budget") and data.get("max_campaign_budget"):
            if data["min_campaign_budget"] > data["max_campaign_budget"]:
                raise serializers.ValidationError(
                    "Minimum campaign budget cannot be greater than maximum campaign budget"
                )
        return data


class BrandSerializer(BaseSerializer):
    class Meta:
        model = Brand
        fields = "__all__"
        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
            "is_verified",
        ]

    def validate(self, data):
        # Validate that min_campaign_budget is less than max_campaign_budget
        if data.get("min_campaign_budget") and data.get("max_campaign_budget"):
            if data["min_campaign_budget"] > data["max_campaign_budget"]:
                raise serializers.ValidationError(
                    "Minimum campaign budget cannot be greater than maximum campaign budget"
                )
        return data 