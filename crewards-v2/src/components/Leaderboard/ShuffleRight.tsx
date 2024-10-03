import { motion } from "framer-motion"; // Importar motion

function ShuffleRight() {
  return (
    <motion.div
      className="absolute right-0 top-0 w-1/2 lg:h-full h-[160vh] bg-cover z-5 overflow-hidden"
      style={{
        backgroundImage: "url(/purpleglow4.png)", // Fundo do componente
        backgroundSize: "200% auto", // Estica a imagem
        backgroundPosition: "left", // Muda a posição da imagem para a esquerda
        backgroundRepeat: "no-repeat", // Garante que a imagem não repita
      }}
      initial={{ x: 100, opacity: 0 }} // Posição inicial
      animate={{ x: 0, opacity: 1 }} // Posição final
      transition={{ duration: 0.5, ease: "easeInOut" }} // Duração da animação
    >
      {/* Mini imagens lado direito */}
      {/* <img
        src="/bb.png"
        alt="Mini Right 1"
        className="absolute top-1/3 right-10 w-20"
      /> */}
      <img
        src="/rainbow.png"
        alt="Mini Right 2"
        className="absolute 2xl:top-0 lg:top-0 right-0 2xl:w-[27rem] lg:w-[20rem] h-[100vh] top-1/5 z-5 lg:opacity-100 opacity-40"
      />
    </motion.div>
  );
}

export default ShuffleRight;
