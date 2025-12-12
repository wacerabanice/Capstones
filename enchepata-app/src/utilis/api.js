import axios from "axios";

// Replace with your real FCS API key
const API_KEY = "pL5RDDfzXI4vm0h6a3wNmrhLgdnTpwLQv";
const BASE_URL = "https://fcsapi.com/api-v3/stock/latest";

/**
 * Fetch the latest stock price for a given symbol.
 * @param {string} symbol - The stock symbol, e.g., "AAPL"
 * @returns {object|null} - Returns the first stock object or null if not found
 */
export const fetchLatestPrice = async (symbol) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        symbol: symbol,
        access_key: API_KEY,
      },
    });

    if (res.data.status && res.data.response && res.data.response.length > 0) {
      return res.data.response[0]; // Return first match
    } else {
      return null; // No data found
    }
  } catch (err) {
    console.error("FCS API error:", err);
    throw new Error("Failed to fetch stock price");
  }
};
