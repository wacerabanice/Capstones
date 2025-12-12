import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import './App.css'

function App() {
   return (
    <>
      <Router>
       <Header className="max-w-5xl mx-auto mb-6">
      </Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

      <Footer />
    </Router>
    </>
  )
}

export default App