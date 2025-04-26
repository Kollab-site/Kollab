from django.urls import path, include
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it
router = DefaultRouter(trailing_slash=False)

# The API URLs are now determined automatically by the router
urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/brands/', include('api.brand.urls')),
    path('v1/influencers/', include('api.influencer.urls')),
] 