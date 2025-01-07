import { useState, useEffect } from "react";
import Empire from "../components/Leaderboard/Empire";
import Shuffle from "../components/Leaderboard/Shuffle";

function Leaderboard() {
  const [activeImage, setActiveImage] = useState(1); // 1 para Empire, 2 para Shuffle

  const [styles, setStyles] = useState({
    left: "54.6%",
    width: "43%",
    backgroundColor: "rgb(43 43 43)",
  });

  useEffect(() => {
    const updateStyles = () => {
      if (window.innerWidth < 768) {
        // "md" breakpoint em Tailwind
        setStyles({
          left: activeImage === 1 ? "2.6%" : "53.8%", // Ajustes menores para telas pequenas
          width: activeImage === 1 ? "46%" : "43%",
          backgroundColor: "rgb(43 43 43)",
        });
      } else {
        setStyles({
          left: activeImage === 1 ? "1.8%" : "50.6%",
          width: activeImage === 1 ? "49%" : "47.6%",
          backgroundColor: "rgb(43 43 43)",
        });
      }
    };

    // Atualiza estilos na montagem e no redimensionamento
    updateStyles();
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, [activeImage]);

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Imagens para alternar entre Empire e Shuffle */}
      <div className="absolute top-[52vw] md:top-[12.4vw] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="flex justify-center bg-[#191919] rounded-full border-2 border-[#2B2B2B]">
          {/* Contêiner para a imagem do Empire - versão para telas maiores */}
          <div className="relative flex flex-col items-center ml-1 z-20">
            <div
              className={`rounded-xl px-3 transition-transform duration-300 transform ${
                activeImage === 1 ? "" : "opacity-50"
              }`}
            >
              <img
                src="/csgoempire.png"
                alt="Empire"
                className={`w-[6vw] cursor-pointer transition duration-300 ease-in-out hover:scale-110 hidden md:block`} // Mostra apenas em telas md ou maiores
                onClick={() => setActiveImage(1)} // Mudar para Empire ao clicar
              />
              <img
                src="/empirelogo.png"
                alt="Empire Small"
                className={`w-7 pb-2 pt-2 ml-4 mr-4  cursor-pointer transition duration-300 ease-in-out hover:scale-110 block md:hidden`} // Mostra apenas em telas menores que md
                onClick={() => setActiveImage(1)} // Mudar para Empire ao clicar
              />
            </div>
          </div>

          {/* Contêiner para a imagem do Shuffle - versão para telas maiores */}
          <div className="relative flex flex-col items-center z-20">
            <div
              className={`rounded-xl px-3 transition-transform duration-300 transform ${
                activeImage === 2 ? "" : "opacity-50"
              }`}
            >
              <img
                src="/shuffle.png"
                alt="Shuffle"
                className={`w-[6vw] cursor-pointer transition duration-300 ease-in-out hover:scale-110 hidden md:block`} // Mostra apenas em telas md ou maiores
                onClick={() => setActiveImage(2)} // Mudar para Shuffle ao clicar
              />
              <img
                src="/shufflelogo2.png"
                alt="Shuffle Small"
                className={`w-7 pb-2 pt-2 ml-4 mr-4 cursor-pointer transition duration-300 ease-in-out hover:scale-110 block md:hidden`} // Mostra apenas em telas menores que md
                onClick={() => setActiveImage(2)} // Mudar para Shuffle ao clicar
              />
            </div>
          </div>
        </div>

        {/* Linha de fundo unificada que se move */}
        <div
          className={`absolute top-[49.5%] transform -translate-y-1/2 bg-[#2B2B2B] rounded-full md:h-[2.2vw] md:mt-0 h-[40px] transition-all duration-300 ease-in-out z-10`}
          style={styles}
        />
      </div>

      {/* Renderiza o componente ativo com base na imagem ativa */}
      {activeImage === 1 ? <Empire /> : <Shuffle />}
    </div>
  );
}

export default Leaderboard;
