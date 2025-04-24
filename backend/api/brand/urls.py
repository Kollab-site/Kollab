from django.urls import path
from .views import BrandViewSet

urlpatterns = [
    path('me/', BrandViewSet.as_view({
        'get': 'retrieve',
        'post': 'create',
        'patch': 'update'
    }), name='brand-me'),
] 