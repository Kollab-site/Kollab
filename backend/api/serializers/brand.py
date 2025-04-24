from rest_framework import serializers

from backend.db.models.brand import Brand
from .base import BaseSerializer


class BrandSerializer(BaseSerializer):
    class Meta:
        model = Brand
        fields = [
            'id',
            'company_name',
            'industry',
            'company_size',
            'min_campaign_budget',
            'max_campaign_budget',
        ]
        read_only_fields = ['id']

    def validate(self, data):
        if data['min_campaign_budget'] > data['max_campaign_budget']:
            raise serializers.ValidationError("Minimum budget cannot be greater than maximum budget")
        return data 