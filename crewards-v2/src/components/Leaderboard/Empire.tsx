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
        className="relative flex items-center justify-center lg:min-h-[100vh] custom-min-h bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url(/background.png)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#060606] to-transparent z-10 filter blur-lg" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <p className="absolute top-[30vw] md:top-[6vw] text-[16vw] md:text-[6vw] font-bold font-thunder z-10 text-white">
          <a className="shadow-lg glow-effect-text-6">LEADER</a>BOARD
        </p>

        {/* Leaderboard Cards (Primeira View - Detalhes Simples) */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial={"hidden"} // Verifica se a tela é pequena
          animate="show"
          viewport={{ once: true, amount: 0.7 }} // Ajusta o amount baseado na altura da tela
          transition={{ duration: 0.5 }} // Mantém a velocidade da animação
          className="relative z-10 flex flex-wrap justify-center md:space-x-12 xl:space-x-16 3xl:space-x-20 mt-[50vw] md:mt-[6vw]"
        >
          {/* Cards do Empire */}
          <div className="absolute top-[-42vw] md:top-[0vw] scale-[1.10] md:scale-100 bg-zinc-900 rounded-lg p-[8vw] md:p-[2vw] text-center md:relative w-[60vw] md:w-[12vw] md:h-[17.4vw] h-[70vw]">
            <div className="bg-zinc-950 rounded-full w-[20vw] md:w-[4.5vw] mx-auto mb-[3vw] md:mb-[1vw]">
              <img
                src="/logo2.png"
                alt="Second Place"
                className="rounded-full w-full h-auto"
              />
              <div className="absolute top-[25vw] md:top-[6vw] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#717171] via-[#D3D3D3] to-[#717171] text-black text-[3vw] md:text-[0.8vw] font-bold px-[2vw] md:px-[0.4vw] py-[0.5vw] md:py-[0vw] rounded-full">
                2
              </div>
            </div>
            <h3 className="text-[5vw] md:text-[1vw] text-white md:mb-[1vw] mt-[2vw] md:mt-0">
              Player 2
            </h3>
            <p className="text-[3vw] md:text-[0.8vw] text-zinc-500">Wagered</p>
            <p className="text-[5vw] md:text-[1vw] font-medium text-white">
              <span className="text-[#717171]">
                <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
              </span>
              120,000
            </p>

            {/* Div do gradiente */}
            <div className="relative mt-[5vw] w-[64.5vw] md:mt-[1vw] md:w-[13vw] transform -translate-x-[10vw] md:-translate-x-[2.4vw]">
              <div className="text-[5vw] md:text-[0.8vw] bg-gradient-to-r from-[#717171] via-[#D3D3D3] to-[#717171] text-black font-semibold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg shadow-2">
                <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
                500
              </div>
            </div>
          </div>

          <div className="absolute top-[-125vw] md:top-[0vw] bg-zinc-900 rounded-lg p-[8vw] md:p-[1vw] md:pb-[1vw] text-center md:relative transform scale-[1.10] overflow-visible w-[60vw] md:w-[13vw] md:h-[17.6vw] h-[70vw]">
            <div className="bg-zinc-950 rounded-full w-[20vw] md:w-[5.2vw] mx-auto mb-[1vw] md:mb-[1vw] md:mt-[1vw]">
              <img
                src="/logo2.png"
                alt="First Place"
                className="rounded-full"
              />
              <div className="absolute top-[25vw] md:top-[6.2vw] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#DB9210] via-[#F4E776] to-[#D89C21] text-black text-[3vw] md:text-[0.8vw] font-bold px-[2vw] md:px-[0.5vw] py-[0.5vw] md:py-[0.05vw] rounded-full">
                1
              </div>
            </div>
            <h3 className="text-[5vw] md:text-[1.3vw] text-white mt-[2.4vw] md:mt-0">
              Player 1
            </h3>
            <p className="text-[3vw] md:text-[0.8vw] text-zinc-500">Wagered</p>
            <p className="text-[5vw] md:text-[1vw] font-medium text-white">
              <span className="text-[#D89C21]">
                <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
              </span>
              300,000
            </p>

            {/* Div do gradiente ajustada */}
            <div className="relative mt-[5vw] w-[64.5vw] md:mt-[1vw] md:w-[14.2vw] transform -translate-x-[10vw] md:-translate-x-[1.6vw]">
              <div className="text-[5vw] md:text-[0.8vw] bg-gradient-to-r from-[#DB9210] via-[#F4E776] to-[#D89C21] text-black font-semibold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg shadow-1">
                <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
                1,000
              </div>
            </div>
          </div>

          <div className="absolute top-[41vw] md:top-[0vw] bg-zinc-900 rounded-lg p-[8vw] md:p-[2vw] text-center md:relative transform scale-[1.10] md:scale-100 overflow-visible w-[60vw] md:w-[12vw] md:h-[17.4vw] h-[70vw]">
            <div className="bg-zinc-950 rounded-full w-[20vw] md:w-[4.5vw] mx-auto mb-[3vw] md:mb-[1vw]">
              <img
                src="/logo2.png"
                alt="Third Place"
                className="rounded-full"
              />
              {/* Position */}
              <div className="absolute top-[25vw] md:top-[6vw] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9D4D25] via-[#FFA878] to-[#9D4D25] text-black text-[3vw] md:text-[0.8vw] font-bold px-[2vw] md:px-[0.4vw] py-[0.5vw] md:py-[0.0vw] rounded-full">
                3
              </div>
            </div>
            <h3 className="text-[5vw] md:text-[1vw] text-white md:mb-[1vw] mt-[2vw] md:mt-0">
              Player 3
            </h3>
            <p className="text-[3vw] md:text-[0.8vw] text-zinc-500">Wagered</p>
            <p className="text-[5vw] md:text-[1vw] font-medium text-white">
              <span className="text-[#9D4D25]">
                <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
              </span>
              90,000
            </p>
            {/* Div do gradiente */}
            <div className="relative mt-[5vw] w-[64.5vw] md:mt-[1vw] md:w-[13vw] transform -translate-x-[10vw] md:-translate-x-[2.4vw]">
              <div className="text-[5vw] md:text-[0.8vw] bg-gradient-to-r from-[#9D4D25] via-[#FFA878] to-[#9D4D25] text-black font-semibold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg shadow-3">
                <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>250
              </div>
            </div>
          </div>
        </motion.div>

        {/* Time Component */}
        <div className="absolute md:bottom-[2vw] bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <Time targetDate={time} leaderboardType="EMPIRE " />
        </div>

        {/* Componentes laterais */}
        <EmpireLeft />
        <EmpireRight />
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div
        className="pt-32 md:pt-0 min-h-[100vh] flex flex-col justify-center bg-[#111111] items-center lg:pb-20 lg:pt-10 3xl:pb-0 my-[-90px] lg:my-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      >
        <div className="flex flex-wrap text-center">
          <span className="text-zinc-500">Winners will be tipped onsite!</span>
        </div>
        <div className="flex flex-wrap text-center lg:mb-0 mb-10">
          <span className="text-red-600 px-4">
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

        <div className="mb-36 flex flex-col space-y-4 mt-4 w-full max-w-3xl lg:mb-12">
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
                    className="3xl:w-12 w-10 rounded-full ml-2"
                  />
                  <span className="text-white ml-4 overflow-hidden whitespace-nowrap text-ellipsis max-w-20 md:max-w-sm">
                    {name}
                  </span>
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
