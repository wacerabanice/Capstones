from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def calculate_returns(request):
    amount = float(request.data.get('amount'))
    growth = float(request.data.get('growth'))  # % per year
    years = int(request.data.get('years'))

    future_value = amount * ((1 + growth/100) ** years)
    profit = future_value - amount

    return Response({
        "future_value": round(future_value, 2),
        "profit": round(profit, 2)
    })
