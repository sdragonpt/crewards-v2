import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Time from "../components/Leaderboard/Time";
import EmpireLeft from "../components/Leaderboard/EmpireLeft";
import EmpireRight from "../components/Leaderboard/EmpireRight";
import ShuffleLeft from "../components/Leaderboard/ShuffleLeft";
import ShuffleRight from "../components/Leaderboard/ShuffleRight";

function Leaderboard() {
  const [activeImage, setActiveImage] = useState(1); // Definir a imagem ativa

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

        {/* Imagens abaixo do título, centralizadas */}
        <div className="absolute top-64 left-1/2 transform -translate-x-1/2 z-20 flex space-x-8">
          {/* Primeira Imagem */}
          <img
            src="/csgoempire.png"
            alt="Image 1"
            className={`w-32 cursor-pointer transition duration-300 ${
              activeImage === 1 ? "brightness-100" : "brightness-50"
            }`}
            onClick={() => setActiveImage(1)} // Mudar para ativa ao clicar
          />
          {/* Segunda Imagem */}
          <img
            src="/shuffle.png"
            alt="Image 2"
            className={`w-32 cursor-pointer transition duration-300 ${
              activeImage === 2 ? "brightness-100" : "brightness-50"
            }`}
            onClick={() => setActiveImage(2)} // Mudar para ativa ao clicar
          />
        </div>

        {/* Leaderboard Cards (Primeira View - Detalhes Simples) */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="relative z-10 flex justify-center space-x-8 2xl:mt-28"
        >
          {activeImage === 1 ? (
            <>
              {/* Cards do Empire */}
              <div className="bg-gray-800 rounded-lg p-6 text-center relative">
                <div className="bg-gray-900 rounded-full w-24 h-24 mx-auto mb-4">
                  <img
                    src="/avatar2.png"
                    alt="Second Place"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">Player 2</h3>
                <p className="text-sm text-gray-400">Wagered</p>
                <p className="text-lg font-semibold text-white">$120,000</p>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
                  $15,000
                </div>
              </div>

              <div className="bg-red-800 rounded-lg p-8 text-center relative transform scale-110">
                <div className="bg-red-900 rounded-full w-32 h-32 mx-auto mb-4">
                  <img
                    src="/avatar1.png"
                    alt="First Place"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold">Player 1</h3>
                <p className="text-sm text-gray-400">Wagered</p>
                <p className="text-lg font-semibold text-white">$300,000</p>
                <div className="bg-yellow-600 text-white px-6 py-2 rounded-lg mt-4 w-48 mx-auto relative">
                  $50,000
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center relative">
                <div className="bg-gray-900 rounded-full w-24 h-24 mx-auto mb-4">
                  <img
                    src="/avatar3.png"
                    alt="Third Place"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">Player 3</h3>
                <p className="text-sm text-gray-400">Wagered</p>
                <p className="text-lg font-semibold text-white">$90,000</p>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
                  $10,000
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Cards do Shuffle */}
              <div className="bg-gray-800 rounded-lg p-6 text-center relative">
                <div className="bg-gray-900 rounded-full w-24 h-24 mx-auto mb-4">
                  <img
                    src="/avatar4.png"
                    alt="Second Place"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">Shuffle Player 2</h3>
                <p className="text-sm text-gray-400">Wagered</p>
                <p className="text-lg font-semibold text-white">$150,000</p>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
                  $20,000
                </div>
              </div>

              <div className="bg-red-800 rounded-lg p-8 text-center relative transform scale-110">
                <div className="bg-red-900 rounded-full w-32 h-32 mx-auto mb-4">
                  <img
                    src="/avatar5.png"
                    alt="First Place"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold">Shuffle Player 1</h3>
                <p className="text-sm text-gray-400">Wagered</p>
                <p className="text-lg font-semibold text-white">$400,000</p>
                <div className="bg-yellow-600 text-white px-6 py-2 rounded-lg mt-4 w-48 mx-auto relative">
                  $60,000
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center relative">
                <div className="bg-gray-900 rounded-full w-24 h-24 mx-auto mb-4">
                  <img
                    src="/avatar6.png"
                    alt="Third Place"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">Shuffle Player 3</h3>
                <p className="text-sm text-gray-400">Wagered</p>
                <p className="text-lg font-semibold text-white">$120,000</p>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
                  $15,000
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Time Component - Posicionado com absolute */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <Time targetDate="2024-12-31T23:59:59" />
        </div>

        {/* Componentes laterais */}
        {activeImage === 1 ? (
          <>
            <EmpireLeft />
            <EmpireRight />
          </>
        ) : (
          <>
            <ShuffleLeft />
            <ShuffleRight />
          </>
        )}
      </div>

      {/* Segunda View - Detalhes dos Jogadores (Detalhes Diferenciados) */}
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        {/* Cabeçalho com os títulos */}
        <div className="flex justify-between items-center px-4 rounded w-full max-w-3xl">
          <div className="flex items-center">
            <span className="text-white ml-4">User</span>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-16">Wagered</span>
            <span className="text-yellow-500">Prize</span>
          </div>
        </div>

        {/* Detalhes dos jogadores (Segunda View) */}
        <div className="flex flex-col space-y-4 mt-4 w-full max-w-3xl">
          {activeImage === 1
            ? [...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-800 rounded"
                >
                  <div className="flex items-center">
                    <span className="text-white w-10 ml-6">{index + 4}</span>
                    <img
                      src={`/empire${index + 4}.png`}
                      alt={`Player ${index + 4}`}
                      className="w-12 h-12 rounded-full ml-2"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-white mr-16">$200</span>
                    <span className="text-yellow-500">$200</span>
                  </div>
                </div>
              ))
            : [...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-800 rounded"
                >
                  <div className="flex items-center">
                    <span className="text-white w-10 ml-6">{index + 4}</span>
                    <img
                      src={`/shuffle${index + 4}.png`}
                      alt={`Player ${index + 4}`}
                      className="w-12 h-12 rounded-full ml-2"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-white mr-16">$100</span>
                    <span className="text-yellow-500">$200</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
