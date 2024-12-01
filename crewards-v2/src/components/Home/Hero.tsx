import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// import MoneyCounterHero from "./MoneyCounterHero";
// import MoneyCounter from "./MoneyCounter";
import { useState, useEffect, useCallback } from "react";

function Hero() {
  const location = useLocation();
  const navigate = useNavigate();
  const [, setIsMdOrLarger] = useState(window.innerWidth >= 768);

  // Debounced resize event handler
  const updateScreenSize = useCallback(() => {
    setIsMdOrLarger(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    const debouncedResize = () => setTimeout(updateScreenSize, 100);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [updateScreenSize]);

  // Smooth transition to the anchor
  const handleAnchorClick = (anchorId: string) => {
    if (location.pathname === "/leaderboard") {
      navigate("/");
    } else if (location.pathname === "/") {
      const element = document.getElementById(anchorId);
      if (element) {
        const offsetPosition =
          window.innerWidth < 768
            ? element.getBoundingClientRect().top + window.pageYOffset - 100
            : element.getBoundingClientRect().top;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const containerClasses = "absolute inset-0 bg-cover bg-center";
  const textGlowClasses = "font-extrabold font-workSans text-5xl md:text-[5vw]";

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-[#0E0E0E]">
      <div
        className={`${containerClasses} brightness-125 background-0`}
      />
      <div className={`${containerClasses} brightness-75 glows`} />

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="absolute top-[40%] transform -translate-x-1/2 z-10 text-center text-white w-[80%] max-w-[1900px]"
      >
        <a className={textGlowClasses}>UNLOCK VIP REWARDS</a>
        <p
          className="text-base font-medium text-[#B2B2B2] font-workSans md:text-[1.1vw] mt-[0.5rem] md:mt-[0.2vw] max-w-5xl mx-auto"
          style={{ lineHeight: "1.6" }}
        >
          From small wins to big rewards, our program has something for everyone
          at every step of the way!
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <a
            onClick={() => handleAnchorClick("rewards")}
            className="inline-flex items-center shadow-button-red cursor-pointer bg-gradient-to-r from-[#FF1D44] to-[#B70020] text-white pl-1 pr-3 py-2 md:px-[1.6vw] md:py-[0.8vw] rounded-2xl hover:opacity-70 transition-opacity duration-300 text-sm md:text-[1vw]"
          >
            <img
              src="/icons/gift-1-1.png"
              alt="Imagem do botão"
              className="w-5 h-5 object-contain mr-1 md:mr-2"
            />
            <span className="font-bold font-workSans text-[4vw] md:text-base">REWARDS</span>
          </a>

          <Link
            to="/leaderboard"
            className={`flex items-center shadow-button cursor-pointer bg-[#2B2B2B] text-[#B2B2B2] px-4 py-2 md:px-[1.6vw] md:py-[0.8vw] rounded-2xl hover:opacity-70 transition-opacity duration-300 text-sm md:text-[1vw]${
              location.pathname === "/leaderboard"
                ? "opacity-100"
                : "hover:opacity-70"
            }`}
          >
            <img
              src="/icons/flag-2.png"
              alt="Imagem do botão"
              className="w-5 h-5 object-contain mr-2"
            />
            <span className="font-bold font-workSans text-base">
              LEADERBOARD
            </span>
          </Link>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center mb-8">
        <img
          src="/icons/mouse.png"
          alt="Imagem do botão"
          className="w-5 h-5 object-contain mr-2"
        />
        <span className="font-bold font-workSans text-base text-[#B2B2B2]">
          SCROLL FOR MORE INFORMATION
        </span>
      </div>

      {/* <div
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
      </div> */}

      {/* Rotating Images */}
      {["1", "4", "2", "3"].map((layer, index) => (
        <img
          key={index}
          src={`/image-${layer}-0.png`}
          alt={`Mini ${index + 1}`}
          className={`hidden md:block absolute ${
            index === 0
              ? "left-[14%] bottom-[22%] w-[10%]"
              : index === 1
              ? "left-[28%] top-[20%] transform -translate-y-1/2 w-[6%]"
              : index === 2
              ? "right-[23%] top-[18%] w-[9%]"
              : "right-[16%] bottom-[16%] transform -translate-y-1/2 w-[12%]"
          } animate-sway-slow`}
        />
      ))}
      {/* Fixed Images */}
      {["Vector", "Vector-1", "Vector-2", "Vector-3"].map((layer, index) => (
        <img
          key={index}
          src={`/Vectors/${layer}.png`}
          alt={`Vector ${index + 1}`}
          className={`hidden md:block absolute ${
            index === 0
              ? "right-[18%] top-[36%] w-[2.5%]"
              : index === 1
              ? "left-[16%] top-[36%] transform -translate-y-1/2 w-[2%]"
              : index === 2
              ? "right-[6%] top-[16%] w-[2%]"
              : "left-[6%] bottom-[10%] transform -translate-y-1/2 w-[2%]"
          } `}
        />
      ))}
    </div>
  );
}

export default Hero;
