import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import zaganImg from "../assets/zagan.png";
import moonwreckImg from "../assets/moonwreck.png";
import binaryImg from "../assets/binary.png";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, filter: "brightness(60%)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "brightness(100%)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 1.02, filter: "brightness(80%)" },
};

export default function Music() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax motion
  const glowY = useTransform(scrollY, [0, 1100], [0, 350]);
  const starsY = useTransform(scrollY, [0, 1200], [0, -200]);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center text-center bg-black text-cyan-400 min-h-screen px-6 py-12 font-orbitron overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* === BACKGROUND LAYERS === */}
      {/* Cyan glow parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_80%)]"
      />

      {/* Stars — slowly drifting upward */}
      <motion.div
        style={{ y: starsY }}
        className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat bg-[length:600px_400px] opacity-80 animate-starDrift"
      ></motion.div>

      {/* Nebula — moving color gradient */}
      <div className="absolute inset-0 animate-nebulaMotion opacity-70 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,255,0.15),_transparent_70%),_radial-gradient(ellipse_at_40%_60%,_rgba(255,0,255,0.1),_transparent_80%),_radial-gradient(ellipse_at_70%_30%,_rgba(0,128,255,0.2),_transparent_80%)] mix-blend-screen blur-2xl"></div>

      {/* ✨ Subtle Glitter Layer */}
      <div className="absolute inset-0 pointer-events-none glitter-field mix-blend-screen" />

      {/* Gradient depth overlay */}
      {/* FIXED TYPO HERE: from-black/20 instead of from-black/2 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />

      {/* === FOREGROUND CONTENT === */}
      <div className="relative z-10 w-full">
        {/* Header */}
        <section className="mt-12">
          <h1 className="text-5xl font-bold drop-shadow-[0_0_10px_#00ffff]">
            Reckless Artists
          </h1>
          <p className="mt-4 text-xl text-cyan-300">
            Meet the sounds of Reckless Entertainment.
          </p>
        </section>

        {/* Artist Cards */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl mx-auto">
          {[
            {
              name: "Zagan Black",
              img: zaganImg,
              alt: "Zagan Black - Composer and Producer",
              desc: "Composer and producer crafting evocative experiences for games and experimental projects. Creating electronic and hybrid music to tell stories beyond words.",
              links: [
                { name: "Bandcamp", url: "https://zaganblack.bandcamp.com" },
                { name: "Bluesky", url: "https://bsky.app/profile/zaganblack.bsky.social" },
                { name: "Spotify", url: "https://open.spotify.com/artist/53vPnTU63Qe0CRJmOm5E8U?si=Hq_XsesUR1qedSlDFJbz6A" },
                { name: "Instagram", url: "https://instagram.com/zaganblack.ogg" },
                { name: "Merch", url: "https://zaganblack.bandcamp.com/merch" },
                { name: "Website", url: "https://zaganblack.com" },
              ],
            },
            {
              name: "MOONWRECK",
              img: moonwreckImg,
              alt: "MOONWRECK - Indie Alternative Artist",
              desc: "An upcoming indie artist from South Texas that probably makes music. Blending sounds from many of his inspirations but always keeping an edge to it.",
              links: [
                { name: "Twitter", url: "https://twitter.com/moonwreck_wav" },
                { name: "Instagram", url: "https://instagram.com/moonwreck.wav" },
              ],
            },
            {
              name: "B1N4RY",
              img: binaryImg,
              alt: "B1N4RY - Synthwave Pop Duo",
              desc: "An upcoming synthwave pop duo pulsing with retro-futurist energy. B1N4RY fuses nostalgia and modern production for a sound that feels like starlight.",
              links: [
                { name: "Instagram", url: "https://instagram.com/b1n4rysoundsystem" },
              ],
            },
          ].map((artist) => {
            const randomDelay = Math.random() * 2;
            const randomDepth = 0.95 + Math.random() * 0.1;

            return (
              <motion.div
                key={artist.name}
                style={{ scale: randomDepth }}
                animate={{
                  y: [0, -10, 10, -5, 0],
                  x: [0, 5, -5, 8, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 10 + Math.random() * 6,
                  delay: randomDelay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition-all flex flex-col text-center"
              >
                {/* Image */}
                <div className="w-full h-auto bg-black overflow-hidden">
                  <img
                    src={artist.img}
                    alt={artist.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col items-center justify-center flex-grow">
                  <h2 className="text-3xl font-semibold text-cyan-300">
                    {artist.name}
                  </h2>
                  <p className="mt-2 text-gray-400 text-sm max-w-xs">
                    {artist.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {artist.links.map((link) => (
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
          })}
        </section>

        {/* Outro */}
        <section className="mt-20 text-cyan-400 text-lg italic tracking-wide">
          <p>Make sure to follow them to keep up with their antics...</p>
        </section>

        {/* Latest Releases */}
        <section className="mt-24 w-full max-w-6xl text-center mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 drop-shadow-[0_0_10px_#00ffff]">
            Latest Releases
          </h2>

          <p className="text-cyan-300 mb-10">
            Explore Zagan Black’s latest soundtracks and collections.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <iframe
              style={{
                border: 0,
                width: "100%",
                maxWidth: "350px",
                height: "470px",
              }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2213809186/size=large/bgcol=000000/linkcol=00ffff/tracklist=false/transparent=true/"
              seamless
              title="Eukarya (Original Game Soundtrack) by Zagan Black"
            />
            <iframe
              style={{
                border: 0,
                width: "100%",
                maxWidth: "350px",
                height: "470px",
              }}
              src="https://bandcamp.com/EmbeddedPlayer/album=826359623/size=large/bgcol=000000/linkcol=00ffff/tracklist=false/transparent=true/"
              seamless
              title="Zagan's Universe by Zagan Black"
            />
            <iframe
              style={{
                border: 0,
                width: "100%",
                maxWidth: "350px",
                height: "470px",
              }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2622350051/size=large/bgcol=000000/linkcol=00ffff/tracklist=false/transparent=true/"
              seamless
              title="Zagan Black Collection Vol. 3 by Zagan Black"
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
