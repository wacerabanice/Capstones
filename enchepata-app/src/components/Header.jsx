import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" text-black p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Enchepata.</h1>
      <nav>
        <Link className="mx-2 font-bold hover:underline" to="/">Home</Link>
        <Link className="mx-2 font-bold hover:underline" to="/portfolio">Investment Details</Link>
        <Link className="mx-2 font-bold hover:underline" to="/about">Portfolio</Link>
      </nav>
    </header>
  );
}
