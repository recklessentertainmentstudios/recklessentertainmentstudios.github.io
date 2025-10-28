import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import eukaryaImg from "../assets/eukarya.png";
import zeroForceImg from "../assets/zero.jpg";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, filter: "brightness(50%)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "brightness(100%)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 1.02, filter: "brightness(70%)" },
};

// --- Reusable Neon Flicker Component ---
function NeonText({ children, className = "" }) {
  const controls = useAnimation();

  useEffect(() => {
    const flicker = async () => {
      while (true) {
        await new Promise((r) => setTimeout(r, 500 + Math.random() * 4000));

        await controls.start({
          opacity: 0.4 + Math.random() * 0.2,
          textShadow:
            "0 0 3px rgba(0, 255, 255, 0.6), 0 0 8px rgba(0, 255, 255, 0.4)",
          transition: { duration: 0.05 },
        });

        await controls.start({
          opacity: 1,
          textShadow:
            "0 0 8px rgba(0, 255, 255, 0.7), 0 0 16px rgba(0, 255, 255, 0.5)",
          transition: { duration: 0.2 + Math.random() * 0.3 },
        });
      }
    };
    flicker();
  }, [controls]);

  return (
    <motion.h1
      animate={controls}
      initial={{
        opacity: 1,
        textShadow:
          "0 0 8px rgba(0, 255, 255, 0.7), 0 0 16px rgba(0, 255, 255, 0.5)",
      }}
      className={`text-cyan-400 font-bold ${className}`}
    >
      {children}
    </motion.h1>
  );
}

export default function Home() {
  // Random motion for project cards
  const randomDepth = 0.9 + Math.random() * 0.2;
  const randomDelay1 = Math.random() * 2;
  const randomDelay2 = Math.random() * 2;

  return (
    <motion.div
      className="flex flex-col items-center text-center bg-black text-cyan-400 min-h-screen px-6 py-12 body-font"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="mt-12">
        <NeonText className="text-5xl neon-heading">
          WELCOME TO RECKLESS ENTERTAINMENT
        </NeonText>
        <p className="mt-4 text-2xl text-cyan-300">
          Where music, games, and art collide.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="max-w-3xl mt-12 text-gray-300 text-2xl leading-relaxed">
        <p>
          Reckless Entertainment is a creative studio built to support
          independent projects and Zagan’s own artistic work. From original
          music and sound design to immersive games and storytelling, Reckless
          is driven by curiosity, experimentation, and the noise of the cosmos.
        </p>
        <p className="mt-4">
          Reckless embraces expression above all else. Every project is a signal sent into the void... searching for resonance, connection, and creation without restraint.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mt-16 w-full max-w-6xl">
        <NeonText className="text-4xl mb-8 border-b border-cyan-500 inline-block pb-2">
          FEATURED PROJECTS
        </NeonText>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 mt-8">
          {/* Project 1 — Eukarya */}
          <a
            href="https://zaganblack.itch.io/eukarya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              key="eukarya"
              style={{ scale: randomDepth }}
              animate={{
                y: [0, -10, 10, -5, 0],
                x: [0, 5, -5, 8, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                delay: randomDelay1,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition-all flex flex-col text-center cursor-pointer"
            >
              <div className="w-full h-auto bg-black overflow-hidden">
                <img
                  src={eukaryaImg}
                  alt="Cover image for Eukarya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col items-center justify-center flex-grow no-glow">
                <h3 className="text-3xl body-text text-cyan-300">Eukarya</h3>
                <p className="mt-2 text-gray-400 text-xl max-w-xs">
                  A game made in collaboration with ltrlynick, where you play as
                  a eukaryote, eat, and survive...
                </p>
              </div>
            </motion.div>
          </a>

          {/* Project 2 — Zero Force */}
          <a
            href="https://zaganblack.bandcamp.com/album/zero-force-20-update-original-game-soundtrack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              key="zero-force"
              style={{ scale: randomDepth }}
              animate={{
                y: [0, -10, 10, -5, 0],
                x: [0, -5, 5, -8, 0],
                rotate: [0, -1, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                delay: randomDelay2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition-all flex flex-col text-center cursor-pointer"
            >
              <div className="w-full h-auto bg-black overflow-hidden">
                <img
                  src={zeroForceImg}
                  alt="Promotional art for Zero Force"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col items-center justify-center flex-grow no-glow">
                <h3 className="text-3xl body-text text-cyan-300">
                  Zero Force (original game soundtrack)
                </h3>
                <p className="mt-2 text-gray-400 text-xl max-w-xs">
                  8-bit inspired music from the game, Zero Force
                </p>
              </div>
            </motion.div>
          </a>
        </div>
      </section>

      {/* Outro */}
      <section className="mt-16 text-cyan-400 text-2xl italic tracking-wide">
        <p>Stay tuned... more worlds will come...</p>
      </section>
    </motion.div>
  );
}
