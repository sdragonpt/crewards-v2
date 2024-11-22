import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "../../variants";
import Time from "./Time";
// import EmpireLeft from "./EmpireLeft";
// import EmpireRight from "./EmpireRight";

function Empire() {
  const [isLoaded, setIsLoaded] = useState(false);
  const time = "2025-01-01T23:59:59";

  // Usando useEffect para simular o carregamento de dados
  useEffect(() => {
    // Simula o carregamento dos dados (exemplo com 100ms de espera)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Ajuste o tempo conforme necessário para o seu caso de uso

    return () => clearTimeout(timer); // Limpa o timer quando o componente é desmontado
  }, []);

  const containerClasses = "absolute inset-0 bg-cover bg-center";

  return (
    <div className="relative items-center justify-center min-h-screen bg-cover bg-center bg-[#0E0E0E]">
      {/* Primeira View - Leaderboard Cards */}
      <div className="relative flex items-center justify-center lg:min-h-[100vh] custom-min-h bg-cover bg-center">
        <div className={`${containerClasses} brightness-125 background-0`} />
        <div className={`${containerClasses} brightness-90 glows-1`} />
        {/* Fixed Images */}
        {["empire2", "empire1", "empire4", "empire3"].map((layer, index) => (
          <img
            key={index}
            src={`/Vectors/${layer}.png`}
            alt={`Vector ${index + 1}`}
            className={`hidden md:block absolute ${
              index === 0
                ? "right-[27%] top-[14%] w-[8%]"
                : index === 1
                ? "left-[28%] top-[34%] transform -translate-y-1/2 w-[8%]"
                : index === 2
                ? "left-[33%] top-[16%] w-[1.5%]"
                : "right-[36%] top-[33%] transform -translate-y-1/2 w-[2%]"
            } `}
          />
        ))}
        <p className="absolute top-[32vw] md:top-[8vw] text-[11vw] md:text-[3vw] font-extrabold z-10 text-white">
          LEADERBOARD
        </p>

        {/* Leaderboard Cards (Primeira View - Detalhes Simples) */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial={"hidden"} // Verifica se a tela é pequena
          animate={isLoaded ? "show" : "hidden"}
          viewport={{ once: true, amount: 0.7 }} // Ajusta o amount baseado na altura da tela
          transition={{ duration: 0.5 }} // Mantém a velocidade da animação
          className="relative z-10 flex flex-wrap justify-center md:space-x-8 xl:space-x-8 3xl:space-x-20 mt-[50vw] md:mt-[14vw]"
        >
          {/* Cards do Empire */}
          <div>
            {/* Card principal */}
            <div className="absolute top-[-42vw] md:top-[2vw] scale-[1.10] md:scale-100 bg-[#191919] rounded-lg p-[8vw] md:p-[2vw] text-center md:relative w-[60vw] md:w-[16vw] md:h-[17.4vw] h-[70vw] overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-[#191919] via-[#D3D3D3] to-[#191919]"></div>
              <div className="bg-zinc-950 rounded-full w-[20vw] md:w-[4.5vw] mx-auto mb-[3vw] md:mb-[1vw] relative">
                <img
                  src="/logo2.png"
                  alt="Second Place"
                  className="rounded-full w-full h-auto"
                />
              </div>
              <h3 className="text-[5vw] md:text-[1.2vw] text-white md:mb-[1vw] mt-[2vw] md:mt-0 font-extrabold">
                Player 2
              </h3>
              <p className="text-[3vw] md:text-[0.7vw] text-[#B2B2B2] font-semibold">
                WAGERED
              </p>
              <p className="text-[5vw] md:text-[1vw] font-medium text-white">
                <span className="text-[#717171]">
                  <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
                </span>
                120,000
              </p>

              {/* Sombra amarela (fora do fluxo do conteúdo interno) */}
              <div className="absolute bottom-[-1vw] left-1/2 -translate-x-1/2 h-[32%] w-full bg-[#777777] blur-2xl opacity-40 rounded-xl z-[-1] pointer-events-none"></div>
            </div>

            {/* Gradiente dos "500 coins" */}
            <div className="relative text-center w-[64.5vw] md:mt-[2.8vw] md:w-[17vw] transform -translate-x-[10vw] md:-translate-x-[.5vw] md:bottom-[4.2vw]">
              <div className="justify-between flex items-center text-[5vw] md:text-[1.1vw] bg-gradient-to-r from-[#717171] via-[#D3D3D3] to-[#717171] text-black font-bold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg">
                <img
                  src="/icons/Vector.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
                <div>
                  <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw] md:text-[1vw]"></i>
                  500
                </div>
                <img
                  src="/icons/Vector-1.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="absolute top-[-125vw] md:top-[0vw] bg-[#191919] rounded-lg p-[8vw] md:p-[2vw] md:pb-[1vw] text-center md:relative transform overflow-hidden w-[60vw] md:w-[16vw] md:h-[17.4vw] h-[70vw]">
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-[#191919] via-[#F4E776] to-[#191919]"></div>
              <div className="bg-zinc-950 rounded-full w-[20vw] md:w-[4.5vw] mx-auto mb-[3vw] md:mb-[1vw] relative">
                <img
                  src="/logo2.png"
                  alt="First Place"
                  className="rounded-full w-full h-auto"
                />
              </div>
              <h3 className="text-[5vw] md:text-[1.2vw] text-white md:mb-[1vw] mt-[2.4vw] md:mt-0 font-extrabold">
                Player 1
              </h3>
              <p className="text-[3vw] md:text-[0.7vw] text-[#B2B2B2] font-semibold">
                WAGERED
              </p>
              <p className="text-[5vw] md:text-[1vw] font-medium text-white">
                <span className="text-[#D89C21]">
                  <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
                </span>
                300,000
              </p>

              {/* Sombra amarela (fora do fluxo do conteúdo interno) */}
              <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 h-[32%] w-full bg-[#d8b321] blur-2xl opacity-40 rounded-xl z-[-1] pointer-events-none"></div>
            </div>

            {/* Div do gradiente ajustada */}
            <div className="relative text-center mt-[5vw] w-[64.5vw] md:mt-[1vw] md:w-[17vw] transform -translate-x-[10vw] md:-translate-x-[.5vw] md:bottom-[4.4vw]">
              <div className="justify-between flex items-center text-[5vw] md:text-[1.1vw] bg-gradient-to-r from-[#DB9210] via-[#F4E776] to-[#D89C21] text-black font-bold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg">
                <img
                  src="/icons/Vector.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
                <div>
                  <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw] md:text-[1vw]"></i>
                  1,000
                </div>
                <img
                  src="/icons/Vector-1.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="absolute top-[41vw] md:top-[2vw] bg-[#191919] rounded-lg p-[8vw] md:p-[2vw] text-center md:relative transform scale-[1.10] md:scale-100 overflow-hidden w-[60vw] md:w-[16vw] md:h-[17.4vw] h-[70vw]">
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-[#191919] via-[#FFA878] to-[#191919]"></div>
              <div className="bg-zinc-950 rounded-full w-[20vw] md:w-[4.5vw] mx-auto mb-[3vw] md:mb-[1vw]">
                <img
                  src="/logo2.png"
                  alt="Third Place"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-[5vw] md:text-[1.2vw] text-white md:mb-[1vw] mt-[2vw] md:mt-0 font-extrabold">
                Player 3
              </h3>
              <p className="text-[3vw] md:text-[0.7vw] text-[#B2B2B2] font-semibold">
                WAGERED
              </p>
              <p className="text-[5vw] md:text-[1vw] font-semibold text-white">
                <span className="text-[#9D4D25]">
                  <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw]"></i>
                </span>
                90,000
              </p>

              {/* Sombra amarela (fora do fluxo do conteúdo interno) */}
              <div className="absolute bottom-[-1vw] left-1/2 -translate-x-1/2 h-[32%] w-full bg-[#a55c38] blur-2xl opacity-40 rounded-xl z-[-1] pointer-events-none"></div>
            </div>
            {/* Div do gradiente */}
            <div className="relative text-center w-[64.5vw] md:mt-[2.8vw] md:w-[17vw] transform -translate-x-[10vw] md:-translate-x-[.5vw] md:bottom-[4.2vw]">
              <div className="justify-between flex items-center text-[5vw] md:text-[1.1vw] bg-gradient-to-r from-[#9D4D25] via-[#FFA878] to-[#9D4D25] text-black font-bold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg">
                <img
                  src="/icons/Vector.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
                <div>
                  <i className="fa-solid fa-coins md:mr-[0.2vw] mr-[1.2vw] md:text-[1vw]"></i>
                  250
                </div>
                <img
                  src="/icons/Vector-1.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Time Component */}
        <div className="absolute md:bottom-[1vw] bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <Time targetDate={time} />
        </div>
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div className="pt-32 md:pt-0 min-h-[100vh] flex flex-col justify-center bg-[#0E0E0E] items-center lg:pb-20 lg:pt-10 3xl:pb-0 my-[-90px] lg:my-0">
        {/* <div className="flex flex-wrap text-center">
          <span className="text-zinc-500">Winners will be tipped onsite!</span>
        </div>
        <div className="flex flex-wrap text-center lg:mb-0 mb-10">
          <span className="text-red-600 px-4">
            Sports betting & coin flip bets will NOT be counted towards your
            wager on the leaderboard
          </span>
        </div> */}
        <div className="justify-between pt-2 pb-6 items-center w-[56%] flex bg-gradient-to-r from-[#191919] to-[#0E0E0E] rounded-lg text-white">
          <div className="ml-6">
            <img
              src="csgoempire.png"
              alt="CSGOEmpire Logo"
              className="rounded-t-lg w-36 object-contain"
            />
            <h1 className="font-extrabold text-[1.5vw]">REDEEM BONUSES</h1>
            <p className="font-extrabold text-[0.7vw] text-[#B2B2B2]">
              AND JOIN OUR $2K MONTHLY LEADERBOARD
            </p>
          </div>
          <div className="mr-6">
            <a
              href="https://csgoempire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center scale-90 px-6 shadow-button items-center text-center w-full bg-gradient-to-l from-[#9C6E0A] to-[#F6AF16] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
            >
              <img
                src="/icons/gift-1-1.png"
                alt="Imagem do botão"
                className="w-5 h-5 object-contain mr-2"
              />
              <span className="font-bold font-workSans text-base text-white">
                REDEEM REWARD
              </span>
            </a>
          </div>
        </div>
        <div className="w-[56%] bg-[#191919] rounded-lg p-6 mt-[3vw]">
          <div className="flex justify-between items-center mb-4 rounded w-full font-medium text-[0.8vw]">
            <div className="flex items-center">
              <span className="text-zinc-500">Rank</span>
              <span className="text-zinc-500 ml-16">User</span>
            </div>
            <div className="flex items-center">
              <span className="text-zinc-500 lg:mr-[4.5rem] mr-8">Wagered</span>
              <span className="text-zinc-500 lg:mr-9 mr-10">Prize</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 w-full">
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
                  className={`flex justify-between items-center p-3 pr-6 rounded-lg lg:mx-0 mx-4 ${
                    index % 2 === 0
                      ? "bg-[#212121] border-t-[1px] border-t-[#2A2A2A] border-b-[2px] border-b-[#181818]"
                      : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div className="bg-[#141414] rounded-lg text-center w-10 ml-2 mr-5">
                      <p className="text-[#b2b2b2] my-1 font-bold text-[0.8vw]">
                        #{index + 4}
                      </p>
                    </div>
                    <img
                      src={`/${avatar}.png`}
                      alt={`Avatar`}
                      className="3xl:w-12 w-8 rounded-full ml-2"
                    />
                    <span className="text-white ml-4 text-[1vw] overflow-hidden whitespace-nowrap text-ellipsis max-w-20 md:max-w-sm">
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

        <div className="w-[56%] mt-[3vw]">
          <div className="flex items-center">
            <img
              src="/icons/history.png"
              alt="Imagem do botão"
              className="w-5 h-5 object-contain mr-2"
            />
            <span className="font-bold font-workSans text-base text-white">
              History
            </span>
          </div>
          <div className="flex justify-between">
            <div className="flex mt-6">
              <div className="bg-[#191919] rounded-lg px-7 py-4 flex items-center text-white text-[1vw]">
                <div>
                  <h1 className="font-bold">November 2024</h1>
                  <p className="font-medium text-[#B2B2B2] text-[0.8vw]">
                    #102
                  </p>
                  <h2 className="font-semibold text-[#656565] text-[0.9vw] mt-4">
                    TOTAL POOL
                  </h2>
                  <p className="font-semibold">$2000</p>
                </div>
                <div className="flex items-center bg-[#2B2B2B] px-3 py-2 rounded-lg ml-4 cursor-pointer">
                  <span className="font-bold font-workSans text-base text-[#B2B2B2]">
                    VIEW
                  </span>
                  <img
                    src="/icons/arrow.png"
                    alt="Imagem do botão"
                    className="w-4 object-contain ml-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="bg-[#191919] rounded-lg px-7 py-4 flex items-center text-white text-[1vw]">
                <div>
                  <h1 className="font-bold">October 2024</h1>
                  <p className="font-medium text-[#B2B2B2] text-[0.8vw]">
                    #101
                  </p>
                  <h2 className="font-semibold text-[#656565] text-[0.9vw] mt-4">
                    TOTAL POOL
                  </h2>
                  <p className="font-semibold">$2000</p>
                </div>
                <div className="flex items-center bg-[#2B2B2B] px-3 py-2 rounded-lg ml-4 cursor-pointer">
                  <span className="font-bold font-workSans text-base text-[#B2B2B2]">
                    VIEW
                  </span>
                  <img
                    src="/icons/arrow.png"
                    alt="Imagem do botão"
                    className="w-4 object-contain ml-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="bg-[#191919] rounded-lg px-7 py-4 flex items-center text-white text-[1vw]">
                <div>
                  <h1 className="font-bold">September 2024</h1>
                  <p className="font-medium text-[#B2B2B2] text-[0.8vw]">
                    #100
                  </p>
                  <h2 className="font-semibold text-[#656565] text-[0.9vw] mt-4">
                    TOTAL POOL
                  </h2>
                  <p className="font-semibold">$2000</p>
                </div>
                <div className="flex items-center bg-[#2B2B2B] px-3 py-2 rounded-lg ml-4 cursor-pointer">
                  <span className="font-bold font-workSans text-base text-[#B2B2B2]">
                    VIEW
                  </span>
                  <img
                    src="/icons/arrow.png"
                    alt="Imagem do botão"
                    className="w-4 object-contain ml-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empire;
