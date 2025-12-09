import React, { useEffect, useState } from 'react'
import { fetchMarketNews } from '../utilis/api'

export default function MarketInsights() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const n = await fetchMarketNews()
        setNews(n && n.items ? n.items : n || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="bg-lime p-4 rounded shadow">
      <h2 className="text-black font-semibold mb-2">Market Insights</h2>
      {loading && <div className="text-md text-black">Loading news…</div>}
      {!loading && news.length === 0 && <div className="text-md text-black">No news available.</div>}
      <div className="space-y-2 max-h-60 overflow-auto">
        {news.slice(0,8).map((n, idx) => (
          <a key={idx} href={n.url ?? '#'} target="_blank" rel="noreferrer" className="block border-b pb-2">
            <div className="font-medium text-sm">{n.title ?? n.headline ?? 'Untitled'}</div>
            <div className="text-xs text-slate-500">{n.source ?? n.provider ?? ''}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
