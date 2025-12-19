📈 Enchepata App – Investment Learning & Simulation Platform

ALX Frontend Capstone Project

📌 Project Overview

Enchepata App is a responsive, web-based investment learning platform that enables users to explore stock market data, simulate investment returns, and understand basic investment behavior using real-time financial information.

The project was developed as a Frontend Capstone Project for the ALX Software Engineering Program, with a focus on:

-React fundamentals
-API integration
-Responsive UI design
-Clean code structure and documentation

🎯 Project Objectives

The main objectives of this project are to:

1. Demonstrate practical use of React and modern frontend tools
2. Integrate a third-party financial API
3. Apply state management and component-based architecture
4. Build a responsive and user-friendly interface
5. Showcase problem-solving skills using a real-world financial use case

✨ Features Implemented
🔍 Stock Search (API Integration)

Search stocks using their symbols

Display real-time data including:
-Current price
-Daily high and low
-Percentage change
-Handles loading and error states gracefully

📈 Investment Calculator
Calculates potential investment returns based on:

- Initial investment amount
-Expected growth rate
-Time frame

Uses controlled React forms and state updates

💼 Portfolio Tracker (Optional Enhancement)

-Save selected stocks locally using localStorage
-Allows users to track investments across sessions

📱 Responsive User Interface

-Fully responsive layout built with Tailwind CSS
-Optimized for mobile, tablet, and desktop views

🧠 Learning Outcomes

Through this project, the following skills were applied and strengthened:

1. React functional components and hooks (useState, useEffect)
2. API consumption using Axios
3. Conditional rendering and error handling
4. Component reusability and separation of concerns
5. Styling with Tailwind CSS
6. Working with browser storage (localStorage)
7. Project structuring and documentation best practices

🛠 Technologies Used
1. Frontend - Framework	React
2. Routing	- React Router DOM
3. Styling	- Tailwind CSS
4. API	-FCS API
5. HTTP Client	-Axios
6. State Management	-React Hooks
7. Build Tool	-Vite
8. Storage	-localStorage

📁 Project Structure
src/
├─ components/
│  ├─ Header.jsx               # Navigation component
│  ├─ Footer.jsx               # Footer component
│  ├─ StockSearch.jsx          # API-powered stock search
│  ├─ InvestmentCalculator.jsx # Investment return calculator
│
├─ pages/
│  ├─ Home.jsx                 # Main landing page
│  └─ Portfolio.jsx            # Saved investments page
│
├─ App.jsx                     # Application routing and layout
└─ main.jsx                    # Application entry point



🚀 Future Improvements
1. Add historical price charts
2. Implement dark mode
3. Add authentication and cloud-based portfolio storage
4. Improve error messaging and UX feedback
5. Add unit tests for calculation logic
