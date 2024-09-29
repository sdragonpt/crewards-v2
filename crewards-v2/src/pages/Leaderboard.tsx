import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState, useEffect } from "react";

function Leaderboard() {
  const location = useLocation();
  const navigate = useNavigate();

  // Temporizador (contador regressivo)
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Data final
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-[#171414]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(/background.png)",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Leaderboard Cards */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 flex justify-center space-x-8"
      >
        {/* Segundo Lugar */}
        <div className="bg-gray-800 rounded-lg p-6 text-center relative">
          <div className="bg-gray-900 rounded-full w-24 h-24 mx-auto mb-4">
            <img src="/avatar2.png" alt="Second Place" className="rounded-full" />
          </div>
          <h3 className="text-xl font-bold">Player 2</h3>
          <p className="text-sm text-gray-400">Wagered</p>
          <p className="text-lg font-semibold text-white">$120,000</p>
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
            $15,000
          </div>
        </div>

        {/* Primeiro Lugar (Central) */}
        <div className="bg-red-800 rounded-lg p-8 text-center relative transform scale-110">
          <div className="bg-red-900 rounded-full w-32 h-32 mx-auto mb-4">
            <img src="/avatar1.png" alt="First Place" className="rounded-full" />
          </div>
          <h3 className="text-2xl font-bold">Player 1</h3>
          <p className="text-sm text-gray-400">Wagered</p>
          <p className="text-lg font-semibold text-white">$300,000</p>
          <div className="bg-yellow-600 text-white px-6 py-2 rounded-lg mt-4 w-48 mx-auto relative">
            $50,000
          </div>
        </div>

        {/* Terceiro Lugar */}
        <div className="bg-gray-800 rounded-lg p-6 text-center relative">
          <div className="bg-gray-900 rounded-full w-24 h-24 mx-auto mb-4">
            <img src="/avatar3.png" alt="Third Place" className="rounded-full" />
          </div>
          <h3 className="text-xl font-bold">Player 3</h3>
          <p className="text-sm text-gray-400">Wagered</p>
          <p className="text-lg font-semibold text-white">$90,000</p>
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
            $10,000
          </div>
        </div>
      </motion.div>

      {/* Contador de tempo */}
      <div className="text-center mt-8 text-white">
        <p>Leaderboard ends in:</p>
        <div className="text-4xl font-bold">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      </div>

      {/* Componentes laterais com imagem de fundo */}
      <div className="absolute left-0 top-0 h-full w-1/5 bg-cover" style={{ backgroundImage: "url(/side-image-left.png)" }}>
        {/* Mini imagens lado esquerdo */}
        <img src="/mini1.png" alt="Mini Left 1" className="absolute top-20 left-10 w-16 h-16" />
        <img src="/mini2.png" alt="Mini Left 2" className="absolute top-40 left-5 w-12 h-12" />
      </div>

      <div className="absolute right-0 top-0 h-full w-1/5 bg-cover" style={{ backgroundImage: "url(/side-image-right.png)" }}>
        {/* Mini imagens lado direito */}
        <img src="/mini3.png" alt="Mini Right 1" className="absolute top-20 right-10 w-16 h-16" />
        <img src="/mini4.png" alt="Mini Right 2" className="absolute top-40 right-5 w-12 h-12" />
      </div>
    </div>
  );
}

export default Leaderboard;
