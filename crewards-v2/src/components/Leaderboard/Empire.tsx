import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Time from "./Time";
import EmpireLeft from "./EmpireLeft";
import EmpireRight from "./EmpireRight";

function Empire() {
  const time = "2024-10-05T23:59:59";

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Primeira View - Leaderboard Cards */}
      <div
        className="relative flex items-center justify-center lg:min-h-[100vh] min-h-[160vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url(/background.png)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#060606] to-transparent z-10 filter blur-lg" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <i className="absolute top-32 lg:top-32 2xl:top-40 text-6xl 2xl:text-8xl font-bold font-thunder z-10 text-white">
          <i className="shadow-lg glow-effect-text-5">LEADER</i>BOARD
        </i>

        {/* Leaderboard Cards (Primeira View - Detalhes Simples) */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="relative z-10 flex flex-wrap justify-center lg:space-x-12 mt-28 lg:mt-28 2xl:mt-36"
        >
          {/* Cards do Empire */}
          <div className="absolute top-[-170px] scale-110 lg:scale-100 lg:top-0 bg-zinc-900 rounded-lg p-8 lg:p-6 pb-20 lg:pb-0 text-center lg:relative w-60 lg:w-48 lg:mt-0">
            <div className="bg-zinc-950 rounded-full 2xl:w-24 2xl:h-24 lg:w-16 w-20 mx-auto 2xl:mb-4 lg:mb-3">
              <img
                src="/logo2.png"
                alt="Second Place"
                className="rounded-full"
              />
              <div className="absolute 2xl:top-[6.7rem] lg:top-[4.8rem] top-[6.2rem] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#717171] via-[#D3D3D3] to-[#717171] text-black 2xl:text-sm lg:text-sm text-sm font-bold 2xl:px-[0.65rem] 2xl:py-1 lg:px-[0.44rem] lg:py-0 px-[0.44rem] py-0 rounded-full">
                2
              </div>
            </div>
            <h3 className="lg:text-xl text-2xl text-white lg:mb-4 2xl:mb-8 lg:mt-0 mt-2">
              Player 2
            </h3>
            <p className="text-sm text-zinc-500">Wagered</p>
            <p className="text-lg font-medium text-white">
              <span className="text-[#717171]">
                <i className="fa-solid fa-coins mr-1"></i>
              </span>
              120,000
            </p>

            {/* Div do gradiente */}
            <div className="absolute left-0 right-0 lg:w-60 w-72 2xl:top-[17rem] top-56 -mx-6">
              <div className="bg-gradient-to-r from-[#717171] via-[#D3D3D3] to-[#717171] text-black font-semibold px-4 py-2 rounded-lg mx-4 shadow-2">
                <i className="fa-solid fa-coins mr-1"></i>500
              </div>
            </div>
          </div>

          <div className="absolute top-[-520px] lg:top-0 bg-zinc-900 rounded-lg p-8 pb-20 text-center lg:relative transform scale-110 overflow-visible w-60 lg:ml-24">
            <div className="bg-zinc-950 rounded-full 2xl:w-32 2xl:h-32 w-20 mx-auto mb-3">
              <img
                src="/logo2.png"
                alt="First Place"
                className="rounded-full"
              />
              <div className="absolute 2xl:top-[8.9rem] top-[6.2rem] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#DB9210] via-[#F4E776] to-[#D89C21] text-black 2xl:text-base text-sm font-bold 2xl:px-[0.85rem] 2xl:py-1 px-[0.51rem] py-0 rounded-full">
                1
              </div>
            </div>
            <h3 className="text-2xl text-white">Player 1</h3>
            <p className="text-sm text-zinc-500">Wagered</p>
            <p className="text-lg font-medium text-white">
              <span className="text-[#D89C21]">
                <i className="fa-solid fa-coins mr-1"></i>
              </span>
              300,000
            </p>

            {/* Div do gradiente */}
            <div className="absolute left-0 right-0 w-72 2xl:top-[17rem] top-56 -mx-6">
              <div className="bg-gradient-to-r from-[#DB9210] via-[#F4E776] to-[#D89C21] text-black font-semibold px-6 py-2 rounded-lg mx-4 shadow-1">
                <i className="fa-solid fa-coins mr-1"></i>1,000
              </div>
            </div>
          </div>

          <div className="absolute top-[180px] scale-110 lg:scale-100 lg:top-0 bg-zinc-900 rounded-lg p-8 lg:p-6 pb-20 lg:pb-0 text-center lg:relative w-60 lg:w-48 lg:mt-0">
            <div className="bg-zinc-950 rounded-full 2xl:w-24 2xl:h-24 lg:w-16 w-20 mx-auto 2xl:mb-4 lg:mb-3">
              <img
                src="/logo2.png"
                alt="Third Place"
                className="rounded-full"
              />
              {/* Position */}
              <div className="absolute 2xl:top-[6.7rem] lg:top-[4.8rem] top-[6.2rem]  left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9D4D25] via-[#FFA878] to-[#9D4D25] text-black 2xl:text-sm lg:text-sm text-sm font-bold 2xl:px-[0.65rem] 2xl:py-1 lg:px-[0.44rem] lg:py-0 px-[0.44rem] py-0 rounded-full">
                3
              </div>
            </div>
            <h3 className="lg:text-xl text-2xl text-white lg:mb-4 2xl:mb-8 lg:mt-0 mt-2">
              Player 3
            </h3>
            <p className="text-sm text-zinc-500">Wagered</p>
            <p className="text-lg font-medium text-white">
              <span className="text-[#9D4D25]">
                <i className="fa-solid fa-coins mr-1"></i>
              </span>
              90,000
            </p>
            {/* Div do gradiente */}
            <div className="absolute left-0 right-0 lg:w-60 w-72 2xl:top-[17rem] top-56 -mx-6">
              <div className="bg-gradient-to-r from-[#9D4D25] via-[#FFA878] to-[#9D4D25] text-black font-semibold px-4 py-2 rounded-lg mx-4 shadow-3">
                <i className="fa-solid fa-coins mr-1"></i>250
              </div>
            </div>
          </div>
        </motion.div>

        {/* Time Component */}
        <div className="absolute 2xl:bottom-10 bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <Time targetDate={time} leaderboardType="EMPIRE " />
        </div>

        {/* Componentes laterais */}
        <EmpireLeft />
        <EmpireRight />
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div
        className="min-h-[100vh] flex flex-col justify-center bg-[#111111] items-center lg:pb-20 lg:pt-10 2xl:pb-0 my-[-90px] lg:my-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      >
        <div className="flex flex-wrap text-center">
          <span className="text-zinc-500">Winners will be tipped onside!</span>
        </div>
        <div className="flex flex-wrap text-center lg:mb-0 mb-10">
          <span className="text-red-600">
            Sports betting & coin flip bets will NOT be counted towards your
            wager on the leaderboard
          </span>
        </div>
        <div className="flex justify-between items-center px-6 rounded w-full max-w-3xl lg:mt-16">
          <div className="flex items-center">
            <span className="text-zinc-500 ml-4">User</span>
          </div>
          <div className="flex items-center">
            <span className="text-zinc-500 lg:mr-16 mr-8">Wagered</span>
            <span className="text-zinc-500 lg:mr-0 mr-3">Prize</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4 w-full max-w-3xl">
          {[...Array(7)].map((_, index) => {
            const prizes = [50, 50, 50, 25, 25, 25, 25];
            const prize = prizes[index] || 0;

            const avatars = [
              "logo2",
              "logo2",
              "logo2",
              "logo2",
              "logo2",
              "logo2",
              "logo2",
            ];
            const avatar = avatars[index] || "logo2";

            const names = [
              "name4",
              "name5",
              "name6",
              "name7",
              "name8",
              "name9",
              "name10",
            ];
            const name = names[index] || `Player ${index + 4}`;

            return (
              <div
                key={index}
                className="flex justify-between items-center p-2 pr-6 bg-zinc-900 rounded lg:mx-0 mx-4 border-zinc-500"
              >
                <div className="flex items-center">
                  <span className="text-white w-10 lg:ml-6 ml-2">
                    <span className="text-zinc-600">#</span>
                    {index + 4}
                  </span>
                  <img
                    src={`/${avatar}.png`}
                    alt={`Avatar`}
                    className="2xl:w-12 w-10 rounded-full ml-2"
                  />
                  <span className="text-white ml-4">{name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white lg:mr-16 mr-7">
                    <span className="text-[#eab30d]">
                      <i className="fa-solid fa-coins mr-1"></i>
                    </span>
                    100
                  </span>
                  <span className="text-white">
                    <span className="text-[#eab30d]">
                      <i className="fa-solid fa-coins mr-1"></i>
                    </span>
                    {prize}
                  </span>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Empire;