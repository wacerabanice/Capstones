from rest_framework import serializers
from .models import Investment, Transaction

class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'
