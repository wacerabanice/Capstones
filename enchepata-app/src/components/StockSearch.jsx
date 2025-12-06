import { useState } from "react";
import axios from "axios";

export default function StockSearch() {
  const [symbol, setSymbol] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    if (!symbol) return;
    try {
      const res = await axios.get(
        `https://api.finage.co.uk/last/stock/${symbol}?apikey=API_KEY31KVVTNBWFMF5XV4SX7SWJ4JGGU4CZ2T`
      );
      setData(res.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching stock data");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter stock/ETF/crypto symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-success-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Search
      </button>

      {data && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="font-bold text-lg">{data.ticker}</h2>
          <p>Price: ${data.last}</p>
          <p>High: ${data.high}</p>
          <p>Low: ${data.low}</p>
          <p>Change: {data.change}</p>
        </div>
      )}
    </div>
  );
}
