import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Time from "../components/Leaderboard/Time";
import SideImagesLeft from "../components/Leaderboard/EmpireLeft";
import SideImagesRight from "../components/Leaderboard/EmpireRight";

function Leaderboard() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-[#171414] overflow-hidden">
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
            <img
              src="/avatar2.png"
              alt="Second Place"
              className="rounded-full"
            />
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
            <img
              src="/avatar1.png"
              alt="First Place"
              className="rounded-full"
            />
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
            <img
              src="/avatar3.png"
              alt="Third Place"
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold">Player 3</h3>
          <p className="text-sm text-gray-400">Wagered</p>
          <p className="text-lg font-semibold text-white">$90,000</p>
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
            $10,000
          </div>
        </div>
      </motion.div>

      {/* Time Component - Posicionado com absolute */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Time />
      </div>

      {/* Componentes laterais */}
      <SideImagesLeft />
      <SideImagesRight />
    </div>
  );
}

export default Leaderboard;
