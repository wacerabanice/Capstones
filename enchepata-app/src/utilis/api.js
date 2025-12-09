import axios from 'axios'

const API_KEY = import.meta.env.VITE_FINAGE_API_KEY
const BASE = 'https://api.finage.co.uk'

export const fetchQuote = async (symbol) => {
  const url = `${BASE}/last/stock/${encodeURIComponent(symbol)}?apikey=${API_KEY}`
  const res = await axios.get(url)
  return res.data
}

export const fetchHistorical = async (symbol, from='2024-01-01', to=new Date().toISOString().slice(0,10)) => {
  const url = `${BASE}/stock/${encodeURIComponent(symbol)}/${from}/${to}?apikey=${API_KEY}`
  const res = await axios.get(url)
  return res.data
}

export const fetchMarketNews = async () => {
  const url = `${BASE}/marketnews?apikey=${API_KEY}`
  const res = await axios.get(url)
  return res.data
}
