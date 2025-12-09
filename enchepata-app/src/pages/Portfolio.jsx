import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'investing_portfolio_v1'

export default function Portfolio() {
  const [items, setItems] = useState([])
  const [symbol, setSymbol] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setItems(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const add = (e) => {
    e.preventDefault()
    if (!symbol) return
    setItems(prev => [...prev, { id: Date.now(), symbol: symbol.toUpperCase(), notes }])
    setSymbol('')
    setNotes('')
  }

  const remove = (id) => setItems(prev => prev.filter(i=>i.id !== id))

  return (
    <div className="bg-green-700 p-4 rounded shadow">
      <h2 className="font-semibold text-black mb-2">Portfolio Tracker</h2>

      <form onSubmit={add} className="space-y-2">
        <input value={symbol} onChange={e=>setSymbol(e.target.value)} placeholder="Symbol (e.g. AAPL)" className="w-full bg-green-600 text-black p-2 border rounded"/>
        <input value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Notes (optional)" className="w-full p-2 border rounded bg-green-600 text-black"/>
        <button className="w-full bg-green-900 text-white p-2 rounded">Save to Portfolio</button>
      </form>

      <div className="mt-3">
        {items.length === 0 ? (
          <div className="text-sm text-slate-500">No saved investments yet.</div>
        ) : (
          <ul className="space-y-2">
            {items.map(it => (
              <li key={it.id} className="flex justify-between items-center border p-2 rounded">
                <div>
                  <div className="font-medium">{it.symbol}</div>
                  <div className="text-xs text-slate-500">{it.notes}</div>
                </div>
                <button onClick={()=>remove(it.id)} className="text-red-600 text-sm">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
