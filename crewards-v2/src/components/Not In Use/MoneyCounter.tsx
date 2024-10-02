import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

interface MoneyCounterProps {
  targetAmount: number;
}

const MoneyCounter: React.FC<MoneyCounterProps> = ({ targetAmount }) => {
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
    <div className="relative flex items-center justify-center bg-cover bg-center bg-[#171414]">
      <div className="absolute inset-0 bg-black opacity-70" />
      <div
        className="flex flex-col items-center justify-center z-10"
        ref={counterRef}
      >
        <h2 className="text-6xl font-bold mb-8 text-white font-thunder">Money Given Away</h2>
        <motion.div 
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        
        className="relative inline-block">
          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#161616] to-red-600 z-0 transform -translate-x-[2px] -translate-y-[2px]"
            style={{
              width: "calc(100% + 4px)",
              height: "calc(100% + 4px)",
            }}
          />
          <div className="flex items-center space-x-1 bg-[#171414] rounded-xl px-8 py-4 shadow-lg relative z-10">
            <div className="bg-[#171414] text-red-600 rounded-lg pr-4 py-2 ml-[-8px] shadow-lg glow-effect-text text-5xl font-bold">
              $
            </div>
            {formattedAmount.split("").map((digit, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] text-red-600 rounded-lg px-4 py-2 shadow-lg glow-effect-text text-5xl font-bold"
              >
                {digit}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MoneyCounter;
