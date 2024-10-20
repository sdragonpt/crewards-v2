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
        className="absolute z-0 bg-cover bg-center h-full w-full brightness-110"
        style={{
          backgroundImage: "url(/redglow.png)", // Imagem atrás do texto
        }}
      />
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="absolute 3xl:top-52 2xl:top-44 xl:top-36 lg:top-20 z-10 text-center text-white"
      >
        <i className="text-6xl md:text-8xl 3xl:text-9xl font-bold font-thunder">
          UNLOCK <i className="shadow-lg glow-effect-text-2">REWARDS</i>
        </i>
        <h2 className="text-5xl md:text-7xl 3xl:text-8xl mt-[-0.7rem] 3xl:mt-[-1.5rem] font-semibold font-thunder">
          AT EVERY STEP
        </h2>
        <p className="3xl:mt-4 text-sm md:text-base 3xl:text-xl max-w-3xl mx-auto">
          From small wins to big rewards, our program has something for everyone
          {/* Quebra de linha para telas maiores */}
          <br className="hidden md:inline" />
          at every step of the way!
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <a
            onClick={() => handleAnchorClick("rewards")}
            className="cursor-pointer bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-3 rounded-md hover:opacity-70 transition-opacity duration-300"
          >
            Affiliates
          </a>
          <Link
            to="/leaderboard"
            className={`animated-button text-white px-6 py-3 rounded-md
    cursor-pointer transition-opacity duration-300 
    ${
      location.pathname === "/leaderboard" ? "opacity-100" : "hover:opacity-70"
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
      <img
        src="/logo.png"
        alt="Mini 2"
        className="hidden md:block absolute lg:left-[10%] top-40 md:bottom-32 lg:bottom-44 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 3xl:w-40 3xl:h-40 animate-sway-slow glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 4"
        className="hidden md:block absolute right-32 md:right-24 lg:right-10 top-1/3 md:top-1/3 transform -translate-y-1/2 w-36 h-36 md:w-24 md:h-36 lg:w-36 lg:h-36 xl:w-36 3xl:w-44 3xl:h-44 animate-sway-slow glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 1"
        className="hidden md:block absolute lg:left-[15%] bottom-20 md:bottom-32 lg:bottom-44 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 3xl:w-40 3xl:h-40 animate-sway-slow glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 3"
        className="hidden md:block absolute right-16 md:right-24 lg:right-72 top-1/3 md:top-3/4 transform -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 3xl:w-36 animate-sway-slow glow-effect"
      />
    </div>
  );
}

export default Hero;
