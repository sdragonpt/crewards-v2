import { useEffect, useState } from "react";

interface TimeProps {
  targetDate: string;
  textColor?: string; // Adicionando uma prop para a cor do texto
}
const Time: React.FC<TimeProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calcula o tempo restante até uma data alvo
  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date();
      const difference = new Date(targetDate).getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div>
      {/* Texto e contador de tempo */}
      <div>
        <p className="text-white md:text-[1vw] text-[4vw] mb-[0.6vw] text-center"></p>
        <div className="flex text-white">
          <hr className="md:mr-[1vw] md:w-[20vw] w-[10vw] md:mt-[3vw] mt-[8vw] border-0 h-[0.1vw] bg-gradient-to-r from-[#0E0E0E] to-[#3F3F3F]" />
          <div className="p-[1vw] md:w-[4vw] w-[16vw] flex flex-col items-center justify-center">
            <span className="block md:text-[2vw] text-[6vw] font-bold">
              {timeLeft.days}
            </span>
            <span className="md:text-[0.8vw] text-[4vw] text-[#B2B2B2] font-semibold">
              DAYS
            </span>
          </div>
          <div className="p-[1vw] md:w-[4vw] w-[16vw] flex flex-col items-center justify-center">
            <p className="block md:text-[2vw] text-[6vw] font-bold">
              {timeLeft.hours}
            </p>
            <p className="md:text-[0.8vw] text-[4vw] text-[#B2B2B2] font-semibold">
              HOURS
            </p>
          </div>
          <div className="p-[1vw] md:w-[4vw] w-[16vw] flex flex-col items-center justify-center">
            <span className="block md:text-[2vw] text-[6vw] text-center font-bold">
              {timeLeft.minutes}
            </span>
            <span className="md:text-[0.8vw] text-[4vw] text-[#B2B2B2] font-semibold">
              MINS
            </span>
          </div>
          <div className="p-[1vw] md:w-[4vw] w-[16vw] flex flex-col items-center justify-center">
            <span className="block md:text-[2vw] text-[6vw] text-center font-bold">
              {timeLeft.seconds}
            </span>
            <span className="md:text-[0.8vw] text-[4vw] text-[#B2B2B2] font-semibold">
              SECS
            </span>
          </div>
          <hr className="md:ml-[1vw] md:w-[20vw] w-[10vw] md:mt-[3vw] mt-[8vw] border-0 h-[0.1vw] bg-gradient-to-r from-[#3F3F3F] to-[#0E0E0E]" />
        </div>
      </div>
    </div>
  );
};

export default Time;
