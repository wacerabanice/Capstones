from django.urls import path
from .views import quote, historical, news

urlpatterns = [
    path('quote/<str:symbol>/', quote, name='quote'),
    path('historical/<str:symbol>/', historical, name='historical'),
    path('news/', news, name='news'),
]
