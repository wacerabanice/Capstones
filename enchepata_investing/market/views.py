from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings

API_KEY = 'YOUR_FINAGE_API_KEY'

class QuoteView(APIView):
    def get(self, request, symbol):
        url = f'https://api.finage.co.uk/last/stock/{symbol}?apikey={API_KEY}'
        data = requests.get(url).json()
        return Response(data)

class HistoricalView(APIView):
    def get(self, request, symbol):
        url = f'https://api.finage.co.uk/stock/{symbol}/2025-01-01/2025-11-24?apikey={API_KEY}'
        data = requests.get(url).json()
        return Response(data)

class NewsView(APIView):
    def get(self, request):
        url = f'https://api.finage.co.uk/marketnews?apikey={API_KEY}'
        data = requests.get(url).json()
        return Response(data)
