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
    <div className="mt-10 p-4 rounded shadow">
      <h2 className="text-2xl mb-4 text-center">Investment Calculator:</h2>
      <form onSubmit={calculate} className="space-y-4">
        <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount invested" className="w-full p-2 border rounded"/>
        <input value={rate} onChange={e=>setRate(e.target.value)} placeholder="Expected annual growth (%)" className="w-full p-2 border rounded"/>
        <input value={years} onChange={e=>setYears(e.target.value)} placeholder="Years" className="w-full p-2  border rounded"/>
        <div className="flex justify-center">
  <button
    type="submit"
    className="bg-green-900 text-white px-6 py-2 rounded hover:bg-lime"
  >
    Calculate
  </button>
</div>
      </form>

      {result !== null && (
        <div className="mt-6 p-3 rounded">
          <div className="text-3xl text-center text-green-900">Future value:</div>
          <div className="text-3xl text-center text-green-900">{result.toFixed(2)}</div>
        </div>
      )}
    </div>
  )
}
