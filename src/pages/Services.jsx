
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh]"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="text-5xl font-bold glitch-hover">This is what I offer etc</h1>
      <p className="mt-4 text-lg text-gray-400 glitch-hover">I offer you nothing muahahah</p>
    </motion.div>
  );
}
