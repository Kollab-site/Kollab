from django.urls import path, include

from .users import urlpatterns as user_urls
from .influencer import urlpatterns as influencer_urls
from .brand import urlpatterns as brand_urls

urlpatterns = [
    path("", include(user_urls)),
    path("", include(influencer_urls)),
    path("", include(brand_urls)),
] 