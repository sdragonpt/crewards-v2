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
    <div className="bg-[#0E0E0E] bg-[url('/fundo-1.png')] md:bg-contain bg-no-repeat bg-center">
      {/* Contêiner principal com position: relative */}
      <div className="relative">
        <img
          src="/Vectors/money1.png"
          alt="Imagem fixa 1"
          className="absolute top-20 md:right-[32%] right-[8%] md:w-[4%] w-[8%] h-auto"
        />
        <img
          src="/Vectors/money2.png"
          alt="Imagem fixa 2"
          className="absolute bottom-8 md:left-[26%] left-[6%] md:w-[5%] w-[10%] h-auto"
        />

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-col place-items-center justify-center z-10 md:py-[4vw] md:pt-[8vw] pt-[14vw] pb-[20vw]"
          ref={counterRef}
        >
          <div className="flex items-center">
            <img
              src="/icons/gift-1-0.png"
              alt="Imagem do botão"
              className="w-6 h-6 object-contain mr-2"
            />
            <h2
              className="text-[#EE1B3F] font-semibold text-[4.4vw] md:text-[1.3vw]"
            >
              GIVEN AWAY
            </h2>
          </div>

          <div className="relative inline-block">
            <div
              className="absolute inset-0 z-0"
              style={{
                width: "calc(100% + 0.5vw)", // Responsivo para borda externa
                height: "calc(100% + 0.5vw)", // Responsivo para borda externa
                transform: "translate(-0.25vw, -0.25vw)", // Responsivo para offset de borda
              }}
            />
            <div className="flex items-center md:space-x-1 space-x-[1px] relative z-10">
              <div
                className="text-white rounded-sm font-extrabold italic text-[12vw] md:text-[5vw]"
              >
                $
              </div>
              {formattedAmount.split("").map((digit, index) => (
                <div
                  key={index}
                  className="text-white rounded-sm font-extrabold italic text-[12vw] md:text-[5vw]"
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>

          <p className="font-medium text-[#B2B2B2] max-w-[84%] md:max-w-[34%] text-center -mt-[0.5%] text-[3.8vw] md:text-[1vw]">
            Amount given away to our community. Register under my codes and get
            a chance of winning crazy rewards each month!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MoneyCounter;
