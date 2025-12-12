import React, { useEffect, useState } from 'react';
import { fetchMarketNews } from '../utilis/api';

export default function MarketInsights() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // start as true
  const [error, setError] = useState("");

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchMarketNews();
        setNews(data);
      } catch (err) {
        setError("Failed to load market news");
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Market News</h2>
      {news.map((item, idx) => (
        <div key={idx} className="p-3 bg-gray-100 rounded shadow">
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
