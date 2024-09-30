import { motion } from "framer-motion"; // Importar motion

function ShuffleRight() {
  return (
    <motion.div
      className="absolute right-0 top-1/2 w-1/5 bg-cover"
      style={{ backgroundImage: "url(/side-image-right.png)" }}
      initial={{ x: 100, opacity: 0 }} // Posição inicial
      animate={{ x: 0, opacity: 1 }} // Posição final
      transition={{ duration: 0.5 }} // Duração da animação
    >
      {/* Mini imagens lado direito */}
      <img
        src="/awp.png"
        alt="Mini Right 1"
        className="absolute top-20 right-4 w-60"
      />
      <img
        src="/knife.png"
        alt="Mini Right 2"
        className="absolute top-40 right-4 w-56"
      />
    </motion.div>
  );
}

export default ShuffleRight;
