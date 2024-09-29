import { motion } from "framer-motion"; // Importar motion

function SideImagesLeft() {
  return (
    <motion.div
      className="absolute left-0 top-1/2 w-1/5 bg-cover"
      style={{ backgroundImage: "url(/side-image-left.png)" }}
      initial={{ x: -100, opacity: 0 }} // Posição inicial
      animate={{ x: 0, opacity: 1 }} // Posição final
      transition={{ duration: 0.5 }} // Duração da animação
    >
      {/* Mini imagens lado esquerdo */}
      <img
        src="/bb.png"
        alt="Mini Left 1"
        className="absolute top-20 left-10 w-16 h-16"
      />
      <img
        src="/rainbow.png"
        alt="Mini Left 2"
        className="absolute top-40 left-5 w-12 h-12"
      />
    </motion.div>
  );
}

export default SideImagesLeft;
