from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

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
        verbose_name = "Brand"
        verbose_name_plural = "Brands"
        db_table = "brands"
        ordering = ("-created_at",)

    def __str__(self):
        return f"Brand: {self.company_name}" 