import StockSearch from "../components/StockSearch";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-black font-bold mb-4">Welcome to Enchepata App</h1>
      <p className="mb-4 text-black">Search stocks, ETFs, or crypto and track live prices.</p>
      <StockSearch />
    </div>
  );
}

export default Home