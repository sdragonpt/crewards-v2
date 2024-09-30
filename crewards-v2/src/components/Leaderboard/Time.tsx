import { useEffect, useState } from "react";

interface TimeProps {
  targetDate: string; // Recebe a data alvo como uma propriedade
}

function Time({ targetDate }: TimeProps) {
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
        <p className="text-white text-xl mb-2 text-center">
          Leaderboard ends in:
        </p>
        <div className="flex space-x-4 text-white">
          <div>
            <span className="block text-2xl text-center">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div>
            <span className="block text-2xl text-center">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div>
            <span className="block text-2xl text-center">
              {timeLeft.minutes}
            </span>
            <span className="text-sm">Minutes</span>
          </div>
          <div>
            <span className="block text-2xl text-center">
              {timeLeft.seconds}
            </span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
