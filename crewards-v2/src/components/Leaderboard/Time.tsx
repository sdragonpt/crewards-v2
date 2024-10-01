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
        <p className="text-white 2xl:text-lg text-base mb-2 text-center">
          <span
            className={`glow-effect-text-${
              leaderboardType === "SHUFFLE " ? "4" : "5"
            }`}
          >
            {leaderboardType}
          </span>
          LEADERBOARD ENDS IN:
        </p>
        <div className="flex space-x-4 text-white">
          <hr className="w-96 mt-9 border-t-zinc-700" />
          <div className="bg-zinc-900 p-2 rounded-md 2xl:w-20 w-16 text-center bg-opacity-40">
            <span className="block 2xl:text-2xl text-xl text-center">
              {timeLeft.days}
            </span>
            <span className="text-sm text-zinc-500">DAYS</span>
          </div>
          <div className="bg-zinc-900 p-2 rounded-md 2xl:w-20 w-16 text-center bg-opacity-40">
            <span className="block 2xl:text-2xl text-xl text-center">
              {timeLeft.hours}
            </span>
            <span className="text-sm text-zinc-500">HRS</span>
          </div>
          <div className="bg-zinc-900 p-2 rounded-md 2xl:w-20 w-16 text-center bg-opacity-40">
            <span className="block 2xl:text-2xl text-xl text-center">
              {timeLeft.minutes}
            </span>
            <span className="text-sm text-zinc-500">MIN</span>
          </div>
          <div className="bg-zinc-900 p-2 rounded-md 2xl:w-20 w-16 text-center bg-opacity-40">
            <span className="block 2xl:text-2xl text-xl text-center">
              {timeLeft.seconds}
            </span>
            <span className="text-sm text-zinc-500">SEC</span>
          </div>
          <hr className="w-96 mt-9 border-t-zinc-700" />
        </div>
      </div>
    </div>
  );
};

export default Time;
