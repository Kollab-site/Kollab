from django.urls import path

from backend.api.views.greet import Greet

urlpatterns = [
    path("greet/", Greet.as_view(), name="greet"),
]