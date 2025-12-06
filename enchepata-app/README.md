This is my Capstone project for my FrontEnd submission:
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
