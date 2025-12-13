import os
import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

FINAGE_KEY = os.getenv("FINAGE_API_KEY")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def quote(request, symbol):
    url = f"https://api.finage.co.uk/last/stock/{symbol}?apikey={FINAGE_KEY}"
    data = requests.get(url).json()
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def historical(request, symbol):
    start = request.GET.get('start')
    end = request.GET.get('end')
    url = f"https://api.finage.co.uk/stock/{symbol}/{start}/{end}?apikey={FINAGE_KEY}"
    data = requests.get(url).json()
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def news(request):
    url = f"https://api.finage.co.uk/marketnews?apikey={FINAGE_KEY}"
    return Response(requests.get(url).json())
