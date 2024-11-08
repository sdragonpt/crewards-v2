import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import MoneyCounterHero from "./MoneyCounterHero";
import MoneyCounter from "./MoneyCounter";
import { useState, useEffect, useCallback } from "react";

function Hero() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768);

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
  const textGlowClasses = "font-bold font-thunder text-5xl md:text-[7vw]";

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-[#1B1E22]">
      <div
        className={`${containerClasses} md:mt-[4vw]`}
        style={{ backgroundImage: "url(/background.png)" }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div
        className={`${containerClasses} md:mt-[4vw] brightness-150`}
        style={{ backgroundImage: "url(/redglow.png)" }}
      />

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="absolute top-[20%] transform -translate-x-1/2 z-10 text-center text-white w-[80%] max-w-[1900px]"
      >
        <a className={textGlowClasses}>
          UNLOCK{" "}
          <span className="shadow-lg glow-effect-text-2 font-thunder">
            REWARDS
          </span>
        </a>
        <h2 className="font-semibold font-thunder text-4xl md:text-[6vw] mt-[0.2rem] md:mt-[1vw]">
          AT EVERY STEP
        </h2>
        <p
          className="text-base md:text-[1vw] mt-[0.5rem] md:mt-[2vw] max-w-5xl mx-auto"
          style={{ lineHeight: "1.6" }}
        >
          From small wins to big rewards, our program has something for everyone
          <br className="hidden md:inline" /> at every step of the way!
        </p>

        <div className="mt-6 flex justify-center space-x-4">
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

      {/* Rotating Images */}
      {["layer2", "layer4", "layer3", "layer1"].map((layer, index) => (
        <img
          key={index}
          src={`/${layer}.png`}
          alt={`Mini ${index + 1}`}
          className={`hidden md:block absolute ${
            index === 0
              ? "left-[6%] bottom-[5%] w-[16%]"
              : index === 1
              ? "left-[15%] top-1/4 transform -translate-y-1/2 w-[8%]"
              : index === 2
              ? "right-[10%] top-[20%] w-[10%]"
              : "right-[18%] bottom-[16%] transform -translate-y-1/2 w-[4%]"
          } animate-sway-slow`}
        />
      ))}
    </div>
  );
}

export default Hero;
