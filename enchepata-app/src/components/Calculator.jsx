import React, { useState } from 'react'

export default function Calculator() {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [result, setResult] = useState(null)

  const calculate = (e) => {
    e.preventDefault()
    const a = parseFloat(amount)
    const r = parseFloat(rate) / 100
    const n = parseFloat(years)
    if (isNaN(a) || isNaN(r) || isNaN(n)) return alert('Please enter valid numbers')
    const fv = a * Math.pow(1 + r, n)
    setResult(fv)
  }

  return (
    <div className="bg-green-700 p-4 rounded shadow">
      <h2 className="text-black font-bold mb-2">Investment Calculator:</h2>
      <form onSubmit={calculate} className="space-y-2">
        <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount invested" className="w-full bg-green-600 text-black p-2 border rounded"/>
        <input value={rate} onChange={e=>setRate(e.target.value)} placeholder="Expected annual growth (%)" className="w-full text-black bg-green-600 p-2 border rounded"/>
        <input value={years} onChange={e=>setYears(e.target.value)} placeholder="Years" className="w-full p-2  bg-green-600 text-black border rounded"/>
        <button className="w-full bg-green-900 text-black font-bold p-2 rounded">Calculate</button>
      </form>

      {result !== null && (
        <div className="mt-3 bg-green-700 p-3 rounded">
          <div className="text-lg font-semibold text-black">Future value:</div>
          <div className="text-black bg-green font-semibold">{result.toFixed(2)}</div>
        </div>
      )}
    </div>
  )
}
