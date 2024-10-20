import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import MoneyCounterHero from "./MoneyCounterHero";
import MoneyCounter from "./MoneyCounter"; // Importe o MoneyCounter
import { useState, useEffect } from "react";

function Hero() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  // Função para verificar a largura da tela
  const updateScreenSize = () => {
    setIsMdOrLarger(window.innerWidth >= 768); // 768px é o ponto de corte para "md" no Tailwind
  };

  useEffect(() => {
    updateScreenSize(); // Verifica no carregamento
    window.addEventListener("resize", updateScreenSize); // Atualiza ao redimensionar
    return () => window.removeEventListener("resize", updateScreenSize); // Limpa o evento ao desmontar
  }, []);

  // Smooth transition to the anchor
  const handleAnchorClick = (anchorId: string) => {
    if (location.pathname === "/leaderboard") {
      navigate("/");
    } else if (location.pathname === "/") {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-[#171414]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(/background.png)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-transparent to-transparent z-10 filter blur-lg" />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div
        className="absolute z-0 bg-cover bg-center h-full w-full brightness-110 bottom-1/4"
        style={{
          backgroundImage: "url(/redglow.png)", // Imagem atrás do texto
        }}
      />
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="absolute top-[18%] transform -translate-x-1/2 z-10 text-center text-white"
        style={{ width: "80%", maxWidth: "1900px" }} // Tamanho máximo da div
      >
        {/* Tamanho ajustado para mobile e vw a partir de md */}
        <i className="font-bold font-thunder text-5xl md:text-[7vw]">
          UNLOCK <i className="shadow-lg glow-effect-text-2">REWARDS</i>
        </i>
        <h2 className="font-semibold font-thunder text-4xl md:text-[6vw] mt-[0.2rem] md:mt-[1vw]">
          AT EVERY STEP
        </h2>
        <p
          className="text-base md:text-[1vw] mt-[0.5rem] md:mt-[2vw] max-w-5xl mx-auto"
          style={{ lineHeight: "1.6"}} // Controla o espaçamento entre linhas
        >
          From small wins to big rewards, our program has something for everyone
          <br className="hidden md:inline" />
          at every step of the way!
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          {/* Fonte ajustada para mobile e vw para md+ */}
          <a
            onClick={() => handleAnchorClick("rewards")}
            className="cursor-pointer bg-gradient-to-r from-red-700 to-red-600 text-white px-4 py-2 md:px-[1.6vw] md:py-[0.8vw] rounded-md hover:opacity-70 transition-opacity duration-300 text-sm md:text-[1vw]"
          >
            Affiliates
          </a>
          <Link
            to="/leaderboard"
            className={`animated-button text-white px-4 py-2 md:px-[1.6vw] md:py-[0.8vw] rounded-md cursor-pointer transition-opacity duration-300 text-sm md:text-[1vw] ${
              location.pathname === "/leaderboard"
                ? "opacity-100"
                : "hover:opacity-70"
            }`}
          >
            Leaderboard
          </Link>
        </div>
      </motion.div>

      {/* Condicional para exibir MoneyCounter ou MoneyCounterHero com base no tamanho da tela */}
      <div
        className={`absolute ${
          isMdOrLarger
            ? "3xl:bottom-24 2xl:bottom-14 bottom-10"
            : "left-1/2 transform -translate-x-1/2 bottom-[14%]"
        } z-20`}
      >
        {isMdOrLarger ? (
          <MoneyCounterHero targetAmount={35000} />
        ) : (
          <MoneyCounter targetAmount={35000} />
        )}
      </div>

      {/* Imagens Mini Rotativas */}
      {/* <img
        src="/logo.png"
        alt="Mini 1"
        className="hidden md:block absolute left-[6%] bottom-[5%] w-[10%] md:w-[12%] lg:w-[15%] xl:w-[18%] 3xl:w-[20%] animate-sway-slow glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 2"
        className="hidden md:block absolute left-[15%] top-1/4 transform -translate-y-1/2 w-[12%] animate-sway-slow glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 3"
        className="hidden md:block absolute right-[15%] top-1/3 w-[16%] animate-sway-slow glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 4"
        className="hidden md:block absolute right-[5%] bottom-[4%] transform -translate-y-1/2 w-[12%] animate-sway-slow glow-effect"
      /> */}
    </div>
  );
}

export default Hero;
