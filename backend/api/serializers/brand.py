from rest_framework import serializers

from backend.db.models.brand import Brand
from .base import BaseSerializer


class BrandSerializer(BaseSerializer):
    class Meta:
        model = Brand
        fields = [
            'id',
            'user',
            'company_name',
            'company_website',
            'industry',
            'company_size',
            'min_campaign_budget',
            'max_campaign_budget',
        ]
        read_only_fields = ['id']
