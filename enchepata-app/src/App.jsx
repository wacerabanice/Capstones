import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import InvestmentDetails from "./pages/InvestmentDetails";
import StockSearch from "./components/StockSearch"
import MarketInsights from "./components/MarketInsights"
import Calculator from "./components/Calculator"
import './App.css'

function App() {
   return (
    <>
      <Router>
       <Header className="max-w-5xl mx-auto mb-6">
      </Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/investmentdetails" element={<InvestmentDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

      <main className="min-h-screen">

        <section className="md:col-span-2 space-y-4">
          <StockSearch />
          <MarketInsights />
        </section>

        

        <aside className="space-y-4">
          <Calculator />
          <Portfolio />
        </aside>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
