import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import MoneyCounterHero from "./MoneyCounterHero"; // Importe o MoneyCounter

function Hero() {
  const location = useLocation();
  const navigate = useNavigate();
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>("");

  // Smooth transition to the anchor
  const handleAnchorClick = (anchorId: string) => {
    if (location.pathname === "/leaderboard") {
      setTargetAnchor(anchorId);
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
      <div
        className="absolute z-0 bg-cover bg-center h-full w-full brightness-110"
        style={{
          backgroundImage: "url(/redglow.png)", // Imagem atrás do texto
        }}
      />

      <div className="absolute inset-0 bg-black opacity-50" />
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 text-center text-white 2xl:mt-0 mt-24"
      >
        <i className="text-8xl 2xl:text-9xl font-bold font-thunder">
          UNLOCK <i className="shadow-lg glow-effect-text-2">REWARDS</i>
        </i>
        <i>
          <h2 className="text-7xl 2xl:text-8xl mt-[-0.7rem] 2xl:mt-[-1.5rem] font-semibold font-thunder">
            AT EVERY STEP
          </h2>
        </i>

        <p className="2xl:mt-4 text-mg 2xl:text-xl max-w-2xl mx-auto">
          From small wins to big rewards, our program has something for everyone{" "}
          <br />
          at every step of the way!
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <a
            onClick={() => handleAnchorClick("rewards")}
            className="cursor-pointer bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-3 rounded-md border-b-4 border-red-800 hover:opacity-70"
          >
            Affiliates
          </a>
          <Link
            to="/leaderboard"
            className={`bg-gradient-to-r from-red-900 to-red-800 text-white px-6 py-3 rounded-md border-b-4 border-red-950 hover:opacity-70 cursor-pointer ${
              location.pathname === "/leaderboard"
            }`}
          >
            Leaderboard
          </Link>
        </div>
      </motion.div>

      {/* Money Counter no canto inferior direito */}
      <div className="absolute bottom-10 right-10 z-20">
        <MoneyCounterHero targetAmount={33500} />
      </div>

      {/* Imagens Mini Rotativas */}
      <img
        src="/logo.png"
        alt="Mini 1"
        className="absolute left-[15%] bottom-20 md:bottom-32 lg:bottom-44 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 animate-spin-y glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 2"
        className="absolute top-16 md:top-20 lg:top-36 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 animate-sway glow-effect"
      />
      <img
        src="/logo.png"
        alt="Mini 3"
        className="absolute right-16 md:right-24 lg:right-44 top-1/3 md:top-1/2 transform -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 animate-sway-slow glow-effect"
      />
    </div>
  );
}

export default Hero;
