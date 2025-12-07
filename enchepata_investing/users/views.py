from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        token = Token.objects.create(user=self.object)
        response.data['token'] = token.key
        return response

class ProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

