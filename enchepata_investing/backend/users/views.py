from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# ------------------------------
# Register View
# ------------------------------
class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    # Optional GET for testing in browser
    def get(self, request):
        return Response({"message": "Send a POST request to register a new user"}, status=200)

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ------------------------------
# Login View (JWT)
# ------------------------------
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    permission_classes = [permissions.AllowAny]

    # Optional GET for browser testing
    def get(self, request, *args, **kwargs):
        return Response({"message": "Send a POST request with username and password to login"}, status=200)

# ------------------------------
# Profile View (Protected)
# ------------------------------
class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    # GET returns profile info
    def get(self, request):
        user = request.user
        return Response({
            "username": user.username,
            "email": user.email
        })
