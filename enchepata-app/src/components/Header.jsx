import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="pb-20">Enchepata.</h1>
      <nav>
        <Link className="mx-2 text-xl" to="/">Home</Link>
        <Link className="mx-2 text-xl" to="/portfolio">Portfolio</Link>
         </nav>
    </header>
  );
}
