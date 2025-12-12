import React, { useState, useEffect } from "react";
import { fetchLatestPrice } from "../utilis/api";

const STORAGE_KEY = "fsc_portfolio_v1";

const StockSearch = () => {
  const [symbol, setSymbol] = useState("");
  const [selected, setSelected] = useState(null);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load portfolio from localStorage 
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setPortfolio(JSON.parse(stored));
  }, []);

  // Save portfolio to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolio));
  }, [portfolio]);

  const handleSearch = async () => {
    if (!symbol) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchLatestPrice(symbol);
      if (!data || data.length === 0) {
        setError("No data found for this stock.");
        setSelected(null);
      } else {
        setSelected(data); 
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch stock price.");
      setSelected(null);
    } finally {
      setLoading(false);
    }
  };

  const saveToPortfolio = () => {
    if (!selected) return;
    const exists = portfolio.find((item) => item.s === selected.s);
    if (exists) return;
    const updated = [...portfolio, selected];
    setPortfolio(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // Save immediately
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4 space-y-6">
      <h2 className="text-3xl">Stock Search:</h2>

      {/* Input + Search */}
      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g., AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Search
        </button>
      </div>

      {/* Loading / Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Selected Stock */}
      {selected && (
        <div className="bg-lime p-4 rounded space-y-2 w-full max-w-md text-center">
          <p><strong>Symbol:</strong> {selected.s}</p>
          <p><strong>Price:</strong> ${selected.c}</p>
          <p><strong>High:</strong> ${selected.h} | <strong>Low:</strong> ${selected.l}</p>
          <p><strong>Change:</strong> {selected.ch} ({selected.cp})</p>
          <p><strong>Exchange:</strong> {selected.exch}</p>
          <button
            onClick={saveToPortfolio}
            className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700 mt-2"
          >
            Save to Portfolio
          </button>
        </div>
      )}

      {/* Portfolio */}
      {portfolio.length > 0 && (
        <div className="bg-lime p-4 rounded space-y-2 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold">My Portfolio</h3>
          {portfolio.map((item, idx) => (
            <div key={idx} className="flex justify-between bg-green-600 p-2 rounded shadow">
              <span>{item.s}</span>
              <span>${item.c}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StockSearch;
