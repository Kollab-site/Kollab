from django.db import models

from .base import BaseModel
from .users import User


class Brand(BaseModel):
    class INDUSTRY_CHOICES:
        CHOICES = (
            ("fashion", "Fashion"),
            ("beauty", "Beauty"),
            ("technology", "Technology"),
            ("food", "Food & Beverage"),
            ("health", "Health & Wellness"),
            ("travel", "Travel & Hospitality"),
            ("automotive", "Automotive"),
            ("finance", "Finance"),
            ("education", "Education"),
            ("other", "Other"),
        )

    class COMPANY_SIZE_CHOICES:
        CHOICES = (
            ("small", "1-50 employees"),
            ("medium", "51-500 employees"),
            ("large", "501-1000 employees"),
            ("enterprise", "1000+ employees"),
        )

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="brand_profile"
    )
    
    # Company Information
    company_name = models.CharField(max_length=255)
    industry = models.CharField(
        max_length=50,
        choices=INDUSTRY_CHOICES.CHOICES,
        default="other"
    )
    company_size = models.CharField(
        max_length=50,
        choices=COMPANY_SIZE_CHOICES.CHOICES,
        default="small"
    )
    
    # Campaign Preferences
    min_campaign_budget = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
        help_text="Minimum budget for campaigns"
    )
    max_campaign_budget = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
        help_text="Maximum budget for campaigns"
    )
    
    # Target Audience
    target_audience_age = models.CharField(
        max_length=255,
        blank=True,
        help_text="Target age range (e.g., 18-24, 25-34)"
    )
    target_audience_gender = models.CharField(
        max_length=255,
        blank=True,
        help_text="Target gender"
    )
    target_audience_location = models.CharField(
        max_length=255,
        blank=True,
        help_text="Target locations"
    )
    
    # Campaign Preferences
    preferred_content_types = models.CharField(
        max_length=255,
        blank=True,
        help_text="Preferred types of content (e.g., photos, videos, stories)"
    )
    preferred_platforms = models.CharField(
        max_length=255,
        blank=True,
        help_text="Preferred social media platforms"
    )
    
    # Additional Information
    website = models.URLField(blank=True)
    company_description = models.TextField(blank=True)
    is_verified = models.BooleanField(default=False)

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Brand"
        verbose_name_plural = "Brands"
        db_table = "brands"
        ordering = ("-created_at",)

    def __str__(self):
        return f"Brand: {self.company_name}" 