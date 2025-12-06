import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

// Simple Investment Calculator Component
function InvestmentCalculator({ price }) {
  const [amount, setAmount] = useState("");
  const [growth, setGrowth] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateReturn = () => {
    if (!amount || !growth || !years) return;
    const fv = amount * Math.pow(1 + growth / 100, years);
    setFutureValue(fv.toFixed(2));
  };

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-bold mb-2">Investment Calculator</h2>
      <input
        type="number"
        placeholder="Investment Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Expected Growth %"
        value={growth}
        onChange={(e) => setGrowth(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Duration (years)"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={calculateReturn}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>
      {futureValue && (
        <p className="mt-2 text-green-700 font-bold">
          Potential Return: ${futureValue}
        </p>
      )}
    </div>
  );
}

// Main Page Component
export default function InvestmentDetails() {
  const [searchParams] = useSearchParams();
  const symbol = searchParams.get("symbol") || "AAPL"; // default if none
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const res = await axios.get(
          `https://api.finage.co.uk/last/stock/${symbol}?apikey=YOUR_API_KEY`
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
        alert("Error fetching investment data");
      } finally {
        setLoading(false);
      }
    };
    fetchStock();
  }, [symbol]);

  if (loading) return <p className="p-4">Loading...</p>;

  if (!data) return <p className="p-4">No data found for {symbol}</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{data.ticker} Details</h1>
      <p className="mb-2">Price: ${data.last}</p>
      <p className="mb-2">High: ${data.high}</p>
      <p className="mb-2">Low: ${data.low}</p>
      <p className="mb-2">Change: {data.change}</p>

      {/* Investment Calculator */}
      <InvestmentCalculator price={data.last} />
    </div>
  );
}
