import os
import requests
from dotenv import load_dotenv
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

load_dotenv("enchepatainv.env")
FCS_KEY = os.getenv("FCS_API_KEY")


@api_view(['GET']) 
@permission_classes([IsAuthenticated]) 
def quote(request, symbol): 
    url = f"https://fcsapi.com/api-v3/stock/latest?symbol={symbol}&access_key={FCS_KEY}" 
    try: 
        resp = requests.get(url) 
        resp.raise_for_status() 
        data = resp.json() 
        return Response(data) 
    except requests.RequestException as e: 
        return Response({"error": str(e)}, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def historical(request, symbol):
    start = request.GET.get('start')  
    end = request.GET.get('end')      
    url = f"https://fcsapi.com/api-v3/stock/historical?symbol={symbol}&from={start}&to={end}&access_key={FCS_KEY}"
    try:
        resp = requests.get(url)
        resp.raise_for_status()
        data = resp.json()
        return Response(data)
    except requests.RequestException as e:
        return Response({"error": str(e)}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def news(request):
    url = f"https://fcsapi.com/api-v3/stock/news?access_key={FCS_KEY}"
    try:
        resp = requests.get(url)
        resp.raise_for_status()
        data = resp.json()
        return Response(data)
    except requests.RequestException as e:
        return Response({"error": str(e)}, status=400)
