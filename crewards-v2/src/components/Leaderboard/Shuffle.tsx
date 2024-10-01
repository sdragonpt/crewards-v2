import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Time from "./Time";
import ShuffleLeft from "./ShuffleLeft";
import ShuffleRight from "./ShuffleRight";

function Shuffle() {
  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Primeira View - Leaderboard Cards */}
      <div
        className="relative flex items-center justify-center min-h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(/background.png)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <i className="absolute 2xl:top-40 text-6xl 2xl:text-8xl font-bold font-thunder z-10 text-white">
          <i className="shadow-lg glow-effect-text-2">Leader</i>board
        </i>

        {/* Leaderboard Cards (Primeira View - Detalhes Simples) */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="relative z-10 flex justify-center space-x-8 2xl:mt-28"
        >
          {/* Cards do Shuffle */}
          {/* (Implementar de acordo com os dados específicos do Shuffle) */}
        </motion.div>

        {/* Time Component */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <Time targetDate="2024-12-31T23:59:59" />
        </div>

        {/* Componentes laterais */}
        <ShuffleLeft />
        <ShuffleRight />
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        {/* (Implementar de acordo com os detalhes dos jogadores do Shuffle) */}
      </div>
    </div>
  );
}

export default Shuffle;
