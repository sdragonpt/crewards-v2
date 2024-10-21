import { useEffect, useState } from "react";

interface TimeProps {
  targetDate: string;
  textColor?: string; // Adicionando uma prop para a cor do texto
  leaderboardType: "EMPIRE " | "SHUFFLE "; // Adicionando uma prop para identificar o tipo de leaderboard
}
const Time: React.FC<TimeProps> = ({ targetDate, leaderboardType }) => {
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
        <p className="text-white md:text-[1vw] text-[4vw] mb-[0.6vw] text-center">
          <span
            className={`glow-effect-text-${
              leaderboardType === "SHUFFLE " ? "4" : "5"
            }`}
          >
            {leaderboardType}
          </span>
          LEADERBOARD ENDS IN:
        </p>
        <div className="flex space-x-[2vw] text-white">
          <hr className="md:w-[20vw] w-[10vw] md:mt-[3vw] mt-[8vw] border-t-zinc-700" />
          <div className="bg-zinc-900 p-[1vw] rounded-md md:w-[4vw] w-[16vw] text-center bg-opacity-40">
            <span className="block md:text-[1.2vw] text-[6vw] text-center">
              {timeLeft.days}
            </span>
            <span className="md:text-[0.8vw] text-[4vw] text-zinc-500">DAYS</span>
          </div>
          <div className="bg-zinc-900 p-[1vw] rounded-md md:w-[4vw] w-[16vw] text-center bg-opacity-40">
            <span className="block md:text-[1.2vw] text-[6vw] text-center">
              {timeLeft.hours}
            </span>
            <span className="md:text-[0.8vw] text-[4vw] text-zinc-500">HRS</span>
          </div>
          <div className="bg-zinc-900 p-[1vw] rounded-md md:w-[4vw] w-[16vw] text-center bg-opacity-40">
            <span className="block md:text-[1.2vw] text-[6vw] text-center">
              {timeLeft.minutes}
            </span>
            <span className="md:text-[0.8vw] text-[4vw] text-zinc-500">MIN</span>
          </div>
          <div className="bg-zinc-900 p-[1vw] rounded-md md:w-[4vw] w-[16vw] text-center bg-opacity-40">
            <span className="block md:text-[1.2vw] text-[6vw] text-center">
              {timeLeft.seconds}
            </span>
            <span className="md:text-[0.8vw] text-[4vw] text-zinc-500">SEC</span>
          </div>
          <hr className="md:w-[20vw] w-[10vw] md:mt-[3vw] mt-[8vw] md:border-t-zinc-700 border-t-zinc-600" />
        </div>
      </div>
    </div>
  );
};

export default Time;
