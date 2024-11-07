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
        // Verifica se a tela é mobile (por exemplo, largura abaixo de 768px)
        if (window.innerWidth < 768) {
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100; // Ajuste de 100px para mobile
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-[#1B1E22]">
      <div
        className="absolute inset-0 md:mt-[4vw] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/background.png)",
        }}
      />
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
        className="absolute top-[20%] transform -translate-x-1/2 z-10 text-center text-white"
        style={{ width: "80%", maxWidth: "1900px" }} // Tamanho máximo da div
      >
        {/* Tamanho ajustado para mobile e vw a partir de md */}
        <a className="font-bold font-thunder text-5xl md:text-[7vw]">
          UNLOCK <a className="shadow-lg glow-effect-text-2">REWARDS</a>
        </a>
        <h2 className="font-semibold font-thunder text-4xl md:text-[6vw] mt-[0.2rem] md:mt-[1vw]">
          AT EVERY STEP
        </h2>
        <p
          className="text-base md:text-[1vw] mt-[0.5rem] md:mt-[2vw] max-w-5xl mx-auto"
          style={{ lineHeight: "1.6" }} // Controla o espaçamento entre linhas
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
            Bonuses
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
      <img
        src="/layer2.png"
        alt="Mini 1"
        className="hidden md:block absolute left-[6%] bottom-[5%] w-[16%] animate-sway-slow"
      />
      <img
        src="/layer4.png"
        alt="Mini 2"
        className="hidden md:block absolute left-[15%] top-1/4 transform -translate-y-1/2 w-[8%] animate-sway-slow"
      />
      <img
        src="/layer3.png"
        alt="Mini 3"
        className="hidden md:block absolute right-[10%] top-[20%] w-[10%] animate-sway-slow"
      />
      <img
        src="/layer1.png"
        alt="Mini 4"
        className="hidden md:block absolute right-[18%] bottom-[16%] transform -translate-y-1/2 w-[4%] animate-sway-slow "
      />
    </div>
  );
}

export default Hero;
