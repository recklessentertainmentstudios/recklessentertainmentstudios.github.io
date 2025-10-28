import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Intro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 2800); // intro duration (2.8s)
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          {/* Static flicker layer */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[length:3px_3px] opacity-20"
            animate={{ opacity: [0.1, 0.3, 0.2, 0.4, 0.1] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Logo flicker */}
          <motion.img
            src={logo}
            alt="Reckless Entertainment Studios"
            className="h-24 w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [0, 1, 0.8, 1],
              scale: [0.9, 1, 1.05, 1],
              filter: ["brightness(0.5)", "brightness(1.5)", "brightness(1)"],
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Glitching studio name */}
          <motion.h1
            className="mt-4 text-cyan-400 text-2xl font-bold glitch-hover"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.7, 1],
              textShadow: [
                "0px 0px 0px #0ff",
                "1px 0px 2px #0ff",
                "-1px 0px 3px #f0f",
                "0px 0px 5px #0ff",
              ],
            }}
            transition={{ duration: 1.6 }}
          >
            Reckless Entertainment Studios
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

