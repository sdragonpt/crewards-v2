import { useState } from "react";
import Empire from "../components/Leaderboard//Empire";
import Shuffle from "../components/Leaderboard/Shuffle";

function Leaderboard() {
  const [activeImage, setActiveImage] = useState(1); // 1 para Empire, 2 para Shuffle

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Imagens para alternar entre Empire e Shuffle */}
      <div className="absolute top-48 lg:top-[10.6rem] 3xl:top-60 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="flex space-x-8 justify-center">
          {/* Contêiner para a imagem do Empire */}
          <div className="relative flex flex-col items-center">
            <div
              className={`rounded-xl px-3 transition-transform duration-300 transform ${
                activeImage === 1 ? "" : "opacity-50"
              }`}
            >
              <img
                src="/csgoempire.png"
                alt="Empire"
                className={`w-32 lg:w-28 3xl:w-36 cursor-pointer transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => setActiveImage(1)} // Mudar para Empire ao clicar
              />
            </div>
          </div>

          {/* Contêiner para a imagem do Shuffle */}
          <div className="relative flex flex-col items-center">
            <div
              className={`rounded-xl px-3 transition-transform duration-300 transform ${
                activeImage === 2 ? "" : "opacity-50"
              }`}
            >
              <img
                src="/shuffle.png"
                alt="Shuffle"
                className={`w-32 lg:w-28 3xl:w-36 cursor-pointer transition duration-300 ease-in-out hover:scale-110`}
                onClick={() => setActiveImage(2)} // Mudar para Shuffle ao clicar
              />
            </div>
          </div>
        </div>

        {/* Linha de fundo unificada que se move */}
        <div
          className={`absolute bottom-0 h-1 transition-all duration-300 ease-in-out`}
          style={{
            left: activeImage === 1 ? "-3%" : "50%", // Prolonga a linha à esquerda para Empire
            width: activeImage === 1 ? "53%" : "53%", // Aumenta a largura da linha para Empire
            backgroundColor:
              activeImage === 1 ? "rgb(234, 179, 13)" : "rgb(131, 55, 216)", // Amarelo para Empire e roxo para Shuffle
          }}
        />
      </div>

      {/* Renderiza o componente ativo com base na imagem ativa */}
      {activeImage === 1 ? <Empire /> : <Shuffle />}
    </div>
  );
}

export default Leaderboard;
