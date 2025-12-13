from django.db import models
from django.contrib.auth.models import User

class Investment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    symbol = models.CharField(max_length=10)
    amount_invested = models.FloatField()
    purchase_price = models.FloatField()
    date_purchased = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.symbol} ({self.user.username})"

class Transaction(models.Model):
    investment = models.ForeignKey(Investment, on_delete=models.CASCADE)
    quantity = models.FloatField()
    price = models.FloatField()
    date = models.DateField(auto_now_add=True)
