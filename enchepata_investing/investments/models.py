from django.db import models
from django.contrib.auth.models import User

class Investment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='investments')
    symbol = models.CharField(max_length=10)
    amount_invested = models.FloatField()
    purchase_price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['user', 'symbol']

class Transaction(models.Model):
    investment = models.ForeignKey(Investment, on_delete=models.CASCADE, related_name='transactions')
    type = models.CharField(max_length=10, choices=[('buy', 'Buy'), ('sell', 'Sell')])
    quantity = models.FloatField()
    price = models.FloatField()
    date = models.DateTimeField(auto_now_add=True)
