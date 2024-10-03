import { useState } from "react";
import Empire from "../components/Leaderboard//Empire";
import Shuffle from "../components/Leaderboard/Shuffle";

function Leaderboard() {
  const [activeImage, setActiveImage] = useState(1); // 1 para Empire, 2 para Shuffle

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Imagens para alternar entre Empire e Shuffle */}
      <div className="absolute top-24 lg:top-44 2xl:top-60 left-1/2 transform -translate-x-1/2 z-20 flex space-x-8">
        {/* Imagem do Empire */}
        <img
          src="/csgoempire.png"
          alt="Empire"
          className={`w-24 2xl:w-36 cursor-pointer transition duration-300 ${
            activeImage === 1 ? "brightness-100" : "brightness-50"
          }`}
          onClick={() => setActiveImage(1)} // Mudar para Empire ao clicar
        />
        {/* Imagem do Shuffle */}
        <img
          src="/shuffle.png"
          alt="Shuffle"
          className={`w-24 2xl:w-36 cursor-pointer transition duration-300 ${
            activeImage === 2 ? "brightness-100" : "brightness-50"
          }`}
          onClick={() => setActiveImage(2)} // Mudar para Shuffle ao clicar
        />
      </div>

      {/* Renderiza o componente ativo com base na imagem ativa */}
      {activeImage === 1 ? <Empire /> : <Shuffle />}
    </div>
  );
}

export default Leaderboard;
