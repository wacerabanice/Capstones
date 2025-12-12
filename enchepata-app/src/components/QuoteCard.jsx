import React from 'react'

export default function QuoteCard({ item, quote, historical }) {
  const last = quote && (quote.last || quote)
  const price = last ? (last.price ?? last.close ?? last.last) : 'N/A'
  const dayHigh = last?.high ?? 'N/A'
  const dayLow = last?.low ?? 'N/A'
  const change = last?.change ?? (price !== 'N/A' && last?.prevClose ? price - last.prevClose : 'N/A')

  return (
    <div className="mt-4 border p-4 rounded">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{item.symbol} — {item.name}</h3>
          <p className="text-sm text-green-500">{item.type.toUpperCase()}</p>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold">{price}</div>
          <div className="text-sm text-slate-600">Change: {change}</div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
        <div className="bg-slate-50 p-2 rounded">
          <div className="text-slate-500">High</div>
          <div className="font-medium">{dayHigh}</div>
        </div>
        <div className="bg-slate-50 p-2 rounded">
          <div className="text-slate-500">Low</div>
          <div className="font-medium">{dayLow}</div>
        </div>
        <div className="bg-slate-50 p-2 rounded">
          <div className="text-slate-500">Latest</div>
          <div className="font-medium">{price}</div>
        </div>
      </div>

      {historical && Array.isArray(historical) && historical.length > 0 && (
        <div className="mt-3 text-sm text-slate-600">
          <div className="font-medium mb-1">Historical (sample)</div>
          <div className="max-h-40 overflow-auto text-xs">
            {historical.slice(-10).map((h,i) => (
              <div key={i} className="flex justify-between border-b py-1">
                <span>{h.date || h.timestamp || h.time}</span>
                <span>{h.close ?? h.price ?? h.y}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
