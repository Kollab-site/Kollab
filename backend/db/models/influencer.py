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
            ("pinterest", "Pinterest"),
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
    content_type = models.CharField(
        max_length=255,
        help_text="Type of content you create (e.g., photos, videos, blogs)"
    )
    
    # Social Media Stats
    instagram_followers = models.PositiveIntegerField(default=0)
    youtube_subscribers = models.PositiveIntegerField(default=0)
    tiktok_followers = models.PositiveIntegerField(default=0)
    twitter_followers = models.PositiveIntegerField(default=0)
    facebook_followers = models.PositiveIntegerField(default=0)
    
    # Engagement Metrics
    average_engagement_rate = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        help_text="Average engagement rate across platforms"
    )
    
    # Platform Preferences
    preferred_platforms = models.CharField(
        max_length=255,
        choices=PLATFORM_CHOICES.CHOICES,
        help_text="Platforms you prefer to work with"
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
    
    # Additional Information
    languages = models.CharField(
        max_length=255,
        blank=True,
        help_text="Languages you can create content in"
    )
    location = models.CharField(
        max_length=255,
        blank=True,
        help_text="Primary location for content creation"
    )
    is_verified = models.BooleanField(default=False)
    
    class Meta:
        verbose_name = "Influencer"
        verbose_name_plural = "Influencers"
        db_table = "influencers"
        ordering = ("-created_at",)

    def __str__(self):
        return f"Influencer: {self.user.username}" 