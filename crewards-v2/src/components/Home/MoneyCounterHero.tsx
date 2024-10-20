import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

interface MoneyCounterProps {
  targetAmount: number;
}

const MoneyCounterHero: React.FC<MoneyCounterProps> = ({ targetAmount }) => {
  const [amount, setAmount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has already run
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if the section is on view
    const handleScroll = () => {
      const section = document.getElementById("money");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !hasAnimated) {
          setHasAnimated(true); // Define hasAnimated true
          window.removeEventListener("scroll", handleScroll); // Removes listener after animation
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean listener
  }, [hasAnimated]); // Adds hasAnimated

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Start the animation when the element is in view and has not animated yet
          const duration = 3000;
          const startAmount = 0;
          const endAmount = targetAmount;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const newAmount = Math.floor(
              startAmount + (endAmount - startAmount) * progress
            );
            setAmount(newAmount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setHasAnimated(true); // Set to true after animation completes
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect(); // Stop observing after starting the animation
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust as needed
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetAmount, hasAnimated]); // Add hasAnimated to dependencies

  const formattedAmount = amount.toLocaleString("pt-BR").replace(/\./g, ",");

  return (
    <div className="">
      <div className="" />
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col place-items-center justify-center z-10"
        ref={counterRef}
        style={{ marginRight: "2vw" }} // Responsivo para margem
      >
        <h2
          className="text-white font-thunder font-bold"
          style={{ fontSize: "3vw", marginBottom: "0.2vw" }} // Tamanho e margem responsivos
        >
          Total Given Away
        </h2>

        <div className="relative inline-block">
          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#161616] to-red-600 z-0"
            style={{
              width: "calc(100% + 0.5vw)", // Responsivo para borda externa
              height: "calc(100% + 0.5vw)", // Responsivo para borda externa
              transform: "translate(-0.25vw, -0.25vw)", // Responsivo para offset de borda
            }}
          />
          <div
            className="flex items-center space-x-1 bg-[#171414] rounded-xl shadow-lg relative z-10"
            style={{ padding: "0.5vw 2vw" }} // Padding responsivo
          >
            <div
              className="bg-[#171414] text-red-600 rounded-lg shadow-lg glow-effect-text font-bold"
              style={{
                padding: "0.5vw 0.5vw", // Padding responsivo
                marginLeft: "-0.5vw", // Margem negativa responsiva
                fontSize: "2vw", // Tamanho de fonte responsivo
              }}
            >
              $
            </div>
            {formattedAmount.split("").map((digit, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] text-red-600 rounded-lg shadow-lg glow-effect-text font-bold"
                style={{
                  padding: "0.4vw 1.3vw", // Padding responsivo
                  fontSize: "2vw", // Tamanho de fonte responsivo
                }}
              >
                {digit}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MoneyCounterHero;
