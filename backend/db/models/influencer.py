from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from .base import BaseModel
from .users import User


class Influencer(BaseModel):
    class NICHE_CHOICES:
        CHOICES = (
            ("fashion", "Fashion"),
            ("beauty", "Beauty"),
            ("lifestyle", "Lifestyle"),
            ("fitness", "Fitness"),
            ("food", "Food"),
            ("travel", "Travel"),
            ("tech", "Technology"),
            ("gaming", "Gaming"),
            ("parenting", "Parenting"),
            ("business", "Business"),
            ("education", "Education"),
            ("other", "Other"),
        )

    class PLATFORM_CHOICES:
        CHOICES = (
            ("instagram", "Instagram"),
            ("youtube", "YouTube"),
            ("tiktok", "TikTok"),
            ("twitter", "Twitter"),
            ("facebook", "Facebook"),
            ("linkedin", "LinkedIn"),
        )

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="influencer_profile"
    )
    
    # Basic Information
    niche = models.CharField(
        max_length=50,
        choices=NICHE_CHOICES.CHOICES,
        default="other"
    )
    
    # Platform Information
    preferred_platforms = models.CharField(
        max_length=255,
        choices=PLATFORM_CHOICES.CHOICES,
        help_text="Primary platform for content creation"
    )
    
    # Social Media Links
    instagram_url = models.URLField(max_length=255, blank=True, null=True)
    youtube_url = models.URLField(max_length=255, blank=True, null=True)
    tiktok_url = models.URLField(max_length=255, blank=True, null=True)
    twitter_url = models.URLField(max_length=255, blank=True, null=True)
    facebook_url = models.URLField(max_length=255, blank=True, null=True)
    linkedin_url = models.URLField(max_length=255, blank=True, null=True)
    website_url = models.URLField(max_length=255, blank=True, null=True)
    
    # Budget Information
    min_campaign_budget = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
        validators=[MinValueValidator(0)]
    )
    max_campaign_budget = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
        validators=[MinValueValidator(0)]
    )

    class Meta:
        verbose_name = "Influencer"
        verbose_name_plural = "Influencers"
        db_table = "influencers"
        ordering = ("-created_at",)

    def __str__(self):
        return f"Influencer: {self.user.username}"