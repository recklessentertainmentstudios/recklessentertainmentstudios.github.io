import { motion } from "framer-motion";
import { useMemo } from "react";
import eukaryaImg from "../assets/eukarya.png";
import zagansUniverseImg from "../assets/zagan.png";
import contributedImg from "../assets/zagan.png";
import sixMinutesImg from "../assets/zagan.png";
import lunarEchoesImg from "../assets/zagan.png";



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

export default function Games() {
  const inHouseGames = [
    {
      title: "Eukarya",
      img: eukaryaImg,
      desc: "A microscopic survival game where you evolve, divide, and battle your own offspring in a dynamic ecosystem of rivals.",
      links: [
        { name: "Soundtrack", url: "https://zaganblack.bandcamp.com/album/eukarya-original-game-soundtrack" },
        { name: "Download on Itch.io", url: "https://zaganblack.itch.io/eukarya" },
      ],
    },
    {
      title: "Zagan’s Universe",
      img: zagansUniverseImg,
      desc: "A cosmic experience exploring the sound, motion, and mythology of Zagan’s creative worlds. A journey across sound and story.",
      links: [
        { name: "Play on desktop", url: "https://zagansuniverse.com" },
        { name: "Soundtrack", url: "https://zaganblack.bandcamp.com/album/zagans-universe" },
      ],
    },
  ];

  const contributedGames = [
  {
    title: "Contributed Project Name",
    img: contributedImg,
    desc: "A title Reckless Entertainment contributed to through music, sound design, or creative direction.",
    links: [{ name: "Visit Project", url: "#" }],
  },
  {
    title: "Lunar Echoes",
    img: lunarEchoesImg,
    desc: "A haunting atmospheric puzzle adventure. Reckless Entertainment provided the ambient score and spatial sound design to immerse players in the moon’s silence.",
    links: [
      { name: "Play on Itch.io", url: "https://example.itch.io/lunarechoes" },
      { name: "Soundtrack", url: "https://zaganblack.bandcamp.com/album/lunar-echoes" },
    ],
  },
];


  // Helper component for animated game card
  const GameCard = ({ game }) => {
    // useMemo ensures random values are generated only once per card
    const { delay, duration, depth } = useMemo(() => {
      return {
        delay: Math.random() * 3,
        duration: 10 + Math.random() * 6,
        depth: 0.96 + Math.random() * 0.08,
      };
    }, []);

    return (
      <motion.div
        key={game.title}
        style={{ scale: depth }}
        animate={{
          y: [0, -10, 10, -5, 0],
          x: [0, 5, -5, 8, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition-all flex flex-col text-center"
      >
        <div className="w-full h-auto bg-black overflow-hidden">
          <img src={game.img} alt={game.title} className="w-full h-auto object-cover" />
        </div>
        <div className="p-6 flex flex-col items-center justify-center flex-grow">
          <h2 className="text-3xl font-semibold text-cyan-300">{game.title}</h2>
          <p className="mt-3 text-gray-400 text-sm max-w-xs">{game.desc}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {game.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-cyan-500 px-3 py-1 rounded-md hover:bg-cyan-500 hover:text-black transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center bg-black text-cyan-400 min-h-screen px-6 py-12 font-orbitron overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header */}
      <h1 className="text-5xl font-bold glitch-hover mb-4">
        Games by Reckless Entertainment
      </h1>
      <p className="text-lg text-gray-400 mb-16 glitch-hover">
        Exploring the edges of sound, story, and play.
      </p>

      {/* In-House Games */}
      <section className="mb-24 w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 drop-shadow-[0_0_10px_#00ffff]">
          In-House Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-30 w-full">
          {inHouseGames.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </section>

      {/* Games We Contributed To */}
      <section className="mb-24 w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 drop-shadow-[0_0_10px_#00ffff]">
          Games We Contributed To
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-30 w-full">
          {contributedGames.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </section>

      {/* Upcoming Section */}
<section className="text-center w-full max-w-4xl">
  <h2 className="text-4xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_10px_#00ffff]">
    Upcoming
  </h2>
  <motion.div
    animate={{
      y: [0, -8, 8, -4, 0],
      x: [0, 4, -4, 6, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="bg-gray-900/80 backdrop-blur-sm border border-cyan-700 rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto"
  >
    {/* Image */}
    <div className="w-full h-auto bg-black overflow-hidden">
      <img
        src={sixMinutesImg}
        alt="Six Minutes Till Midnight"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Text */}
    <div className="p-8 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-semibold text-cyan-300">
        Six Minutes Till Midnight
      </h3>
      <p className="mt-3 text-gray-400 text-sm italic">
        More info coming soon...
      </p>
    </div>
  </motion.div>
</section>


      {/* Outro */}
      <section className="mt-20 text-cyan-400 text-lg italic tracking-wide max-w-2xl">
        <p>
          If you’re interested in collaborating, or have ideas that need music
          or life, we’re always happy to discuss and explore new worlds together.
        </p>
      </section>
    </motion.div>
  );
}
