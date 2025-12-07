from django.urls import path
from .views import QuoteView, HistoricalView, NewsView

urlpatterns = [
    path('quote/<str:symbol>/', QuoteView.as_view(), name='quote'),
    path('historical/<str:symbol>/', HistoricalView.as_view(), name='historical'),
    path('news/', NewsView.as_view(), name='news'),
]
