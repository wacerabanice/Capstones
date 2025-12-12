import '../index.css'


export default function Footer() {
  return (
    <footer className="text-center p-4">
      &copy; {new Date().getFullYear()} Enchepata. All rights reserved.
    </footer>
  );
}
