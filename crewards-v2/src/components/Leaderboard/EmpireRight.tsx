import { motion } from "framer-motion"; // Importar motion

function EmpireRight() {
  return (
    <motion.div
      className="absolute right-0 top-0 w-1/2 h-full bg-cover z-5 overflow-hidden" // Ajustado para ocupar metade da largura
      style={{
        backgroundImage: "url(/yellowglow2.png)", // Fundo do componente
        backgroundSize: "200% auto", // Estica a imagem
        backgroundPosition: "left", // Muda a posição da imagem para a direita
        backgroundRepeat: "no-repeat", // Garante que a imagem não repita
      }}
      initial={{ x: 100, opacity: 0 }} // Posição inicial
      animate={{ x: 0, opacity: 1 }} // Posição final
      transition={{ duration: 0.5, ease: "easeInOut" }} // Duração da animação
    >
      {/* Mini imagens lado direito */}
      <img
        src="/right.png"
        alt="Mini Right 1"
        className="absolute 2xl:top-0 top-0 right-0 2xl:w-[27rem] lg:w-[20rem] z-5" // Assegura que esta imagem fique acima do fundo
      />
      {/* <img
        src="/knife.png"
        alt="Mini Right 2"  
        className="absolute top-2/3 right-10 w-56 z-20" // Assegura que esta imagem fique acima do fundo
      /> */}
    </motion.div>
  );
}

export default EmpireRight;
