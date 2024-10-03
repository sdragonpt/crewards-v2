import { motion } from "framer-motion"; // Importar motion

function EmpireLeft() {
  return (
    <motion.div
      className="absolute left-0 top-0 w-1/2 lg:h-full h-[160vh] bg-cover z-5 overflow-hidden"
      style={{
        backgroundImage: "url(/yellowglow3.png)", // Fundo do componente
        backgroundSize: "200% auto", // Estica a imagem
        backgroundPosition: "right", // Muda a posição da imagem para a esquerda
        backgroundRepeat: "no-repeat", // Garante que a imagem não repita
      }}
      initial={{ x: -100, opacity: 0 }} // Posição inicial
      animate={{ x: 0, opacity: 1 }} // Posição final
      transition={{ duration: 0.5, ease: "easeInOut" }} // Duração da animação
    >
      {/* Mini imagens lado esquerdo */}
      <img
        src="/left.png"
        alt="Mini Left 1"
        className="absolute 2xl:top-12 lg:top-14 left-0 2xl:w-[27rem] lg:w-[20rem] h-[100vh] top-1/3 w-auto z-5 lg:opacity-100 opacity-40" // Assegura que esta imagem fique acima do fundo
      />
      {/* <img
        src="/awp.png"
        alt="Mini Left 2"
        className="absolute top-2/3 left-10 w-60 z-20" // Assegura que esta imagem fique acima do fundo
      /> */}
    </motion.div>
  );
}

export default EmpireLeft;
