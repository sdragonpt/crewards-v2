import { useEffect, useState, useRef } from "react";

interface MoneyCounterProps {
  targetAmount: number;
}

const MoneyCounter: React.FC<MoneyCounterProps> = ({ targetAmount }) => {
  const [amount, setAmount] = useState(0);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation when the element is in view
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
  }, [targetAmount]);

  const formattedAmount = amount.toLocaleString("pt-BR").replace(/\./g, ",");

  return (
    <div className="relative flex items-center justify-center bg-cover bg-center bg-[#171414]">
      <div className="absolute inset-0 bg-black opacity-70" />
      <div
        className="flex flex-col items-center justify-center z-10"
        ref={counterRef}
      >
        <h2 className="text-5xl font-bold mb-8 text-white">Money Given Away</h2>
        <div className="flex items-center space-x-1 bg-[#171414] rounded-lg px-8 py-4 shadow-lg">
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
      </div>
    </div>
  );
};

export default MoneyCounter;
