import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import News from "./pages/News";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <Router>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className="min-h-screen flex flex-col bg-black text-cyan-400 font-orbitron">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

