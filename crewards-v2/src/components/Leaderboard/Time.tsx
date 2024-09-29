import { useEffect, useState } from "react";

function Time() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calcula o tempo restante até uma data alvo
  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59");

    const countdown = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

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
  }, []);

  return (
    <div>
      {/* Texto e contador de tempo */}
      <div>
        <p className="text-white text-xl mb-2">Leaderboard ends in:</p>
        <div className="flex space-x-4 text-white">
          <div>
            <span className="block text-2xl">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div>
            <span className="block text-2xl">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div>
            <span className="block text-2xl">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div>
            <span className="block text-2xl">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
