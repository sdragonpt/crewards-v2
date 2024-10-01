import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Time from "./Time";
import EmpireLeft from "./EmpireLeft";
import EmpireRight from "./EmpireRight";

// Defina a interface para o jogador
interface Player {
  id: number;
  name: string;
  avatar: string;
  wagered: number;
  created_at: string;
}

function Empire() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [topPlayers, setTopPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          "https://csgoempire.com/api/v2/referrals/referred-users",
          {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
              Authorization: "Bearer fbc36789370d3e351101c07c2cbcb263",
            },
            params: {
              per_page: 10,
              page: 1,
            },
          }
        );

        const filteredPlayers: Player[] = response.data.data.filter(
          (player: Player) =>
            new Date(player.created_at) >= new Date("2024-09-01")
        );
        setPlayers(filteredPlayers);

        const sortedPlayers = filteredPlayers.sort(
          (a, b) => b.wagered - a.wagered
        );
        setTopPlayers(sortedPlayers.slice(0, 3));
      } catch (error) {
        console.error("Erro ao buscar jogadores:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Primeira View - Leaderboard Cards */}
      <div
        className="relative flex items-center justify-center min-h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(/background.png)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <i className="absolute 2xl:top-40 text-6xl 2xl:text-8xl font-bold font-thunder z-10 text-white">
          <i className="shadow-lg glow-effect-text-2">Leader</i>board
        </i>

        {/* Leaderboard Cards (Primeira View - Detalhes Simples) */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="relative z-10 flex justify-center space-x-8 2xl:mt-28"
        >
          {/* Cards do Empire */}
          {topPlayers.map((player: Player, index) => (
            <div
              key={player.id}
              className={`bg-gray-${
                index === 1 ? "red" : "gray"
              }-800 rounded-lg p-6 text-center relative`}
            >
              <div className="bg-gray-900 rounded-full w-24 h-24 mx-auto mb-4">
                <img
                  src={player.avatar}
                  alt={`${player.name} Avatar`}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{player.name}</h3>
              <p className="text-sm text-gray-400">Wagered</p>
              <p className="text-lg font-semibold text-white">
                ${player.wagered}
              </p>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-40 mx-auto relative">
                {/* Prize can be set here */}
                $15,000
              </div>
            </div>
          ))}
        </motion.div>

        {/* Time Component */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <Time targetDate="2024-12-31T23:59:59" />
        </div>

        {/* Componentes laterais */}
        <EmpireLeft />
        <EmpireRight />
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        <div className="flex justify-between items-center px-4 rounded w-full max-w-3xl">
          <div className="flex items-center">
            <span className="text-white ml-4">User</span>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-16">Wagered</span>
            <span className="text-yellow-500">Prize</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4 w-full max-w-3xl">
          {players.slice(3).map((player: Player, index) => (
            <div
              key={player.id}
              className="flex justify-between items-center p-4 bg-gray-800 rounded"
            >
              <div className="flex items-center">
                <span className="text-white w-10 ml-6">{index + 4}</span>
                <img
                  src={player.avatar}
                  alt={`Player ${index + 4}`}
                  className="w-12 h-12 rounded-full ml-2"
                />
              </div>
              <div className="flex items-center">
                <span className="text-white mr-16">${player.wagered}</span>
                <span className="text-yellow-500">$200</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Empire;
