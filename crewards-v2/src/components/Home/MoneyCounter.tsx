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
          className="text-zinc-300 font-base"
          style={{ fontSize: "5vw", marginBottom: "2vw" }} // Tamanho e margem responsivos
        >
          TOTAL GIVEN AWAY
        </h2>

        <div className="relative inline-block">
          <div
            className="absolute inset-0 rounded-sm bg-red-600 z-0"
            style={{
              width: "calc(100% + 0.5vw)", // Responsivo para borda externa
              height: "calc(100% + 0.5vw)", // Responsivo para borda externa
              transform: "translate(-0.25vw, -0.25vw)", // Responsivo para offset de borda
            }}
          />
          <div className="flex items-center md:space-x-1 space-x-[1px] rounded-xl shadow-lg relative z-10">
            <div
              className="bg-[#2a2a2a] bg-opacity-90 text-white rounded-sm shadow-lg font-bold"
              style={{
                padding: "0.4vw 1.3vw", // Padding responsivo
                fontSize: "10vw", // Tamanho de fonte responsivo
              }}
            >
              $
            </div>
            {formattedAmount.split("").map((digit, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] bg-opacity-90 text-white rounded-sm shadow-lg font-bold"
                style={{
                  padding: "0.4vw 1.3vw", // Padding responsivo
                  fontSize: "10vw", // Tamanho de fonte responsivo
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

export default MoneyCounter;
