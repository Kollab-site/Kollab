from django.urls import path
from .views import InfluencerViewSet

urlpatterns = [
    path('me/', InfluencerViewSet.as_view({
        'get': 'retrieve',
        'post': 'create',
        'patch': 'update'
    }), name='influencer-me'),
] 