This is a Repository for my Capstone projects-Front End and Back End.
FrontEnd submission:
Enchepata App – Investing Guide

Enchepata App is a web-based investment guide that allows users to learn about stocks, ETFs, and cryptocurrencies, track live prices, calculate potential returns, and view market insights using real-time data from the Finage API. This project demonstrates practical React skills, state management, API integration, and responsive design.

Features

Stock/ETF/Crypto Search – Search investments by symbol and view key metrics (price, high/low, daily change).

Investment Calculator – Calculate potential returns based on investment amount, growth rate, and duration.

Portfolio Tracker (Optional) – Track and save investments over time (localStorage).

Market Insights – Display live market trends and news via the Finage API.

Responsive Design – Fully mobile-friendly and desktop-ready UI.

TECH STACK:
Frontend: React, React Router DOM
Styling: TailwindCSS
API: Finage API
 (Real-time stock/crypto/ETF data)
HTTP Client: Axios


PROJECT STRUCTURE:
src/
 ├─ components/
 │   ├─ Header.jsx          # Navigation bar
 │   ├─ Footer.jsx          # App footer
 │   ├─ StockSearch.jsx     # Search input & real-time quote
 │   ├─ InvestmentCalculator.jsx
 │   └─ MarketInsights.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ InvestmentDetails.jsx
 │   └─ Portfolio.jsx
 ├─ App.jsx
 └─ main.jsx


Backend Submission:

A **Django REST API backend** for managing investments, portfolios, and real-time market data. This backend supports a frontend application where users can:

- Search and view real-time stock, ETF, and crypto data
- Save and manage a portfolio of investments
- Calculate potential returns
- Track historical prices and trends

---

## **Features**

### 1. User Authentication
- Register, login, and manage user profiles
- Token-based authentication with DRF

### 2. Investment Management (CRUD)
- Create, read, update, and delete investments
- Track investment transactions
- Portfolio linked to authenticated user

### 3. Real-Time Market Data
- Fetch live stock, ETF, and crypto prices using [Finage API](https://finage.co.uk/)
- Historical data endpoint
- Market news and insights

### 4. Investment Calculator
- Calculate potential returns based on amount, purchase price, duration, and expected growth rate

### 5. Portfolio Summary (Planned)
- Totals, gains/losses, and historical trends (aggregated per user)

---

## **Django Apps & Endpoints**

### **Users**
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/register/` | POST | Register a new user |
| `/api/login/` | POST | Login user (token auth) |
| `/api/profile/` | GET | Retrieve user profile |

### **Investments**
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/investments/` | GET | List user investments |
| `/api/investments/` | POST | Add a new investment |
| `/api/investments/<id>/` | GET | Retrieve investment details |
| `/api/investments/<id>/` | PUT | Update investment |
| `/api/investments/<id>/` | DELETE | Delete investment |

### **Market**
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/market/quote/<symbol>/` | GET | Fetch real-time quote |
| `/api/market/historical/<symbol>/` | GET | Fetch historical data |
| `/api/market/news/` | GET | Fetch market news |

### **Calculator**
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/calculate/` | POST | Calculate potential investment returns |

---

## **Database Schema**

- **User**: Django default user model  
- **Investment**: Linked to User, tracks symbol, amount invested, purchase price  
- **Transaction**: Linked to Investment, tracks buy/sell transactions

**Relationships:**
- 1 User → Many Investments
- 1 Investment → Many Transactions

**Constraints:**
- `symbol` unique per user  
- `amount_invested > 0`  
- `purchase_price > 0`



