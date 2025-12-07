from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class CalculateView(APIView):
    def post(self, request):
        amount = float(request.data.get('amount'))
        price = float(request.data.get('price'))
        duration = int(request.data.get('duration'))
        growth_rate = float(request.data.get('growth_rate'))

        # Simple future value formula
        future_value = amount * ((1 + growth_rate/100) ** duration)
        return Response({'future_value': future_value})
