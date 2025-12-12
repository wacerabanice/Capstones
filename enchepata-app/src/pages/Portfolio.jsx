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

  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id))

  return (
    <div className="flex justify-center min-h-screen bg-green p-4">
      <div>
      <h2 className="text-3xl mb-4 font-bold text-center">Portfolio Tracker</h2>

      {/* Form */}
      <form onSubmit={add} className="space-y-10">
        <input
          value={symbol}
          onChange={e => setSymbol(e.target.value)}
          placeholder="Symbol (e.g. AAPL)"
          className="w-full p-3 rounded-md border border-green-500 bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Notes (optional)"
          className="w-full p-3 rounded-md border border-green-500 bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <button
          type="submit"
          className="w-full bg-green-900 hover:bg-green-800 transition-colors font-semibold p-3 rounded-md"
        >
          Save to Portfolio
        </button>
      </form>

      {/* Portfolio List */}
      <div>
        {items.length === 0 ? (
          <p className="text-center text-green-900 text-lg">No saved investments yet.</p>
        ) : (
          <ul className="space-y-5">
            {items.map(it => (
              <li
                key={it.id}
                className="flex mt-5 justify-between items-center p-4 bg-green-600 rounded-lg shadow hover:bg-green-800 transition-colors"
              >
                <div>
                  <div className="font-bold text-lg">{it.symbol}</div>
                  <div className="text-sm text-green-200">{it.notes}</div>
                </div>
                <button
                  onClick={() => remove(it.id)}
                  className="text-white-400 hover:text-red-500 font-medium"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  )
}
