from rest_framework import serializers
from .models import Investment, Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class InvestmentSerializer(serializers.ModelSerializer):
    transactions = TransactionSerializer(many=True, read_only=True)

    class Meta:
        model = Investment
        fields = '__all__'

    def validate(self, data):
        if data['amount_invested'] <= 0 or data['purchase_price'] <= 0:
            raise serializers.ValidationError("Investment values must be greater than zero.")
        return data
