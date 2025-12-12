import React from "react";
import StockSearch from "../components/StockSearch";
import Calculator from "../components/Calculator";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-black text-4xl mb-4">Welcome to Enchepata App</h1>
  
    {/*Stock Search*/}
          <StockSearch />
       {/*Inv Calculator*/}
          <Calculator />

      </div>
  );
}

export default Home