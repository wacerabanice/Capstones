from django.urls import path
from .views import calculate_returns

urlpatterns = [
    path('', calculate_returns),
]
