import { useEffect, useState } from 'react'
import symbolsData from '../data/symbols.json'
import { fetchQuote, fetchHistorical } from '../utilis/api'
import QuoteCard from './QuoteCard'

export default function StockSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [historical, setHistorical] = useState(null)

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }
   
    const r = symbolsData
      .filter(s => 
        s.symbol.toLowerCase().includes(query.toLowerCase()) || 
        s.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 10)
    setResults(r)
  }, [query])

  const onSelect = async (item) => {
    setSelected(null)
    setLoading(true)
    try {
      const q = await fetchQuote(item.symbol)
      setSelected({ metaItem: item, quote: q })
      const hist = await fetchHistorical(item.symbol)
      setHistorical(hist)
    } catch (err) {
      console.error(err)
      alert('Failed to fetch market data — check your network.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-green p-4 rounded-lg shadow">
      <h2 className="text-black font-semibold mb-2">Search Stocks / ETFs / Crypto</h2>

      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="Search by name or symbol (e.g., AAPL, Bitcoin)"
          className="bg-green-600 text-black flex-1 p-2 border rounded"
        />
      </div>

      {results.length > 0 && (
        <ul className="mt-3 bg-green-600 text-black max-h-48 overflow-auto">
          {results.map(r => (
            <li key={r.symbol} className="flex justify-between items-center p-2 border-b text-black hover:bg-slate-50">
              <div>
                <div className="font-medium text-black">{r.symbol} — {r.name}</div>
                <div className="text-xs text-black">{r.type.toUpperCase()}</div>
              </div>
              <button onClick={() => onSelect(r)} className="px-3 py-1 bg-slate-800 text-white rounded">View</button>
            </li>
          ))}
        </ul>
      )}

      {loading && <div className="mt-3 text-sm">Loading market data…</div>}

      {selected && <QuoteCard item={selected.metaItem} quote={selected.quote} historical={historical} />}
    </div>
  )
}
