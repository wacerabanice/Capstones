📊 Enchepata Investing – Backend Capstone

A Django REST Framework backend for an investment tracking and market-data platform, secured with JWT authentication, and demonstrated using a simple HTML frontend.

This project focuses on backend architecture, authentication, API design, and third-party API integration, with a lightweight HTML file used only for demonstration of app.

🚀 Features:
1. Authentication
-JWT-based authentication (login, protected routes)
-Token-secured endpoints
-Permission-based access using IsAuthenticated

📈 Market Data
-Fetches live stock market quotes via FCS API
-Backend proxy protects API keys from frontend exposure


🧮 Investment Calculator
Calculates future investment value based on:
-Initial amount
-Growth rate
-Time period

💼 Investments Management
-Create and list user investments


🧪 Demo Frontend
-Simple HTML + Vanilla JavaScript

Demonstrates:
-Login / logout
-Auth-protected API access
-Market quote fetching
-Not a production frontend

🏗️ Tech Stack
Backend
-Python 3.12
-Django
-Django REST Framework
-SimpleJWT


Frontend (Demo Only)
-HTML
-Vanilla JavaScript
-Fetch API

📁 Project Structure
backend/
├── market/
│   └── views.py
├── investments/
│   └── views.py
├── users/
│   └── views.py
├── settings.py
└── urls.py

demo/
└── demo.html

🔑 Authentication Flow

-User logs in via /api/users/login/
-Backend returns a JWT access token
-Token is sent with requests:
-Authorization: Bearer <access_token>


Protected endpoints require authentication

📡 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/users/login/	Login (JWT)
Market
Method	Endpoint	Description
GET	/api/market/quote/<symbol>/	Fetch stock quote
Calculator
Method	Endpoint	Description
POST	/api/calculate/	Investment calculation
Investments
Method	Endpoint	Description
GET	/api/investments/	List investments
POST	/api/investments/	Add investment

All endpoints except login require authentication.

