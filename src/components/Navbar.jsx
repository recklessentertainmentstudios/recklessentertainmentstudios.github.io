import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-black border-b border-cyan-500 text-cyan-400 font-orbitron font-semibold text-2xl px-24 py-4 backdrop-blur-md bg-opacity-95">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-20 cursor-pointer select-none"
          />
        </Link>
      </div>

      {/* Right: Nav Links */}
      <div className="flex items-center space-x-16">
        <Link to="/" className="neon-heading hover:text-cyan-300 transition-all">HOME</Link>
        <Link to="/games" className="neon-heading hover:text-cyan-300 transition-all">GAMES</Link>
        <Link to="/music" className="neon-heading hover:text-cyan-300 transition-all">MUSIC</Link>
        <Link to="/services" className="neon-heading hover:text-cyan-300 transition-all">SERVICES</Link>
        <Link to="/news" className="neon-heading hover:text-cyan-300 transition-all">NEWS</Link>
        <Link to="/contact" className="neon-heading hover:text-cyan-300 transition-all">CONTACT</Link>
      </div>
    </nav>
  );
}
