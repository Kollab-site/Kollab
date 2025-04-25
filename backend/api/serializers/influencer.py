from rest_framework import serializers

from backend.db.models.influencer import Influencer
from .base import BaseSerializer


class InfluencerSerializer(BaseSerializer):
    class Meta:
        model = Influencer
        fields = [
            'id',
            'user',
            'niche',
            'preferred_platforms',
            'instagram_url',
            'youtube_url',
            'tiktok_url',
            'twitter_url',
            'facebook_url',
            'linkedin_url',
            'website_url',
            'min_campaign_budget',
            'max_campaign_budget',
            'content_type',
            'target_demographic',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate(self, data):
        if data['min_campaign_budget'] > data['max_campaign_budget']:
            raise serializers.ValidationError("Minimum budget cannot be greater than maximum budget")
        return data

