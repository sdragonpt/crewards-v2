import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Time from "./Time";
import { useState } from "react";

function Shuffle() {
  const time = "2024-12-05T23:59:59";
  const [showRectangle, setShowRectangle] = useState(false);

  const toggleRectangle = () => {
    setShowRectangle(!showRectangle);
  };

  const handleCopy = (event: React.MouseEvent<SVGSVGElement>) => {
    // Copiar o texto para a área de transferência
    navigator.clipboard.writeText("CLASSY");

    // Encontrar o container para manipular os ícones
    const label = event.currentTarget.closest("label") as HTMLElement | null;

    if (label) {
      // Encontrar os ícones dentro do label
      const clipboardIcon = label.querySelector(
        ".clipboard"
      ) as HTMLElement | null;
      const clipboardCheckIcon = label.querySelector(
        ".clipboard-check"
      ) as HTMLElement | null;

      // Verificar se os ícones existem
      if (clipboardIcon && clipboardCheckIcon) {
        // Mostrar o ícone de "check" e esconder o ícone original
        clipboardCheckIcon.style.display = "block";
        clipboardIcon.style.display = "none";

        // Após 3 segundos, voltar ao ícone original
        setTimeout(() => {
          clipboardCheckIcon.style.display = "none";
          clipboardIcon.style.display = "block";
        }, 3000); // 3000 milissegundos = 3 segundos
      }
    }
  };

  const containerClasses = "absolute inset-0 bg-cover bg-center";

  return (
    <div className="relative items-center justify-center min-h-screen bg-cover bg-center bg-[#0E0E0E]">
      {/* Primeira View - Leaderboard Cards */}
      <div className="relative flex items-center justify-center lg:min-h-[100vh] custom-min-h bg-cover bg-center">
        <div className={`${containerClasses} brightness-125 background-0`} />
        <div className={`${containerClasses} brightness-50 glows-2`} />
        {/* Fixed Images */}
        {[
          "shuffle2",
          "shuffle1",
          "shuffle4",
          "shuffle3",
          "Vector-2",
          "Vector-3",
        ].map((layer, index) => (
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
                : index === 3
                ? "right-[36%] top-[33%] transform -translate-y-1/2 w-[2%]"
                : index === 4
                ? "left-[15%] bottom-[42%] w-[2%]" // Nova imagem 1
                : "right-[10%] top-[46%] w-[1.5%]" // Nova imagem 2
            } `}
          />
        ))}

        <div className="absolute info-mt md:top-[20%] top-[16%] md:right-[10%] right-[6%] flex items-center z-20 ">
          <span
            className="flex items-center cursor-pointer hover:opacity-70 transition-opacity duration-300"
            onClick={toggleRectangle}
          >
            <img
              src="/info.png"
              alt="Imagem Info"
              className="w-5 h-5 object-contain mr-1"
            />
            <span className="font-bold font-workSans text-base text-white text-[1vw]">
              INFO
            </span>
          </span>

          {showRectangle && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full md:-left-[200%] -left-[400%] mt-2 bg-[#191919] text-white rounded-lg p-4 w-[20rem] z-20 shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src="/info-1.png"
                  alt="Imagem Info"
                  className="w-4 h-4 object-contain mr-1"
                />
                <p className="font-bold font-workSans text-[#B2B2B2] text-[14px] md:text-[0.9vw] mt-[1px] md:mt-[0.5%]">
                  INFO
                </p>
              </div>
              <p className="text-sm text-[#656565] mt-2">
                Winners will be tipped onsite! Sports betting & coin flip bets
                will NOT be counted towards your wager on the leaderboard.
              </p>
            </motion.div>
          )}
        </div>

        <p className="absolute top-[32vw] md:top-[7.5vw] text-[11vw] md:text-[3vw] font-extrabold z-10 text-white">
          <span className="md:text-[3.5vw]">L</span>EADERBOAR
          <span className="md:text-[3.5vw]">D</span>
        </p>

        {/* Leaderboard Cards (Primeira View - Detalhes Simples) */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial={"hidden"} // Verifica se a tela é pequena
          animate="show"
          viewport={{ once: true, amount: 0.7 }} // Ajusta o amount baseado na altura da tela
          transition={{ duration: 0.5 }} // Mantém a velocidade da animação
          className="relative z-10 flex flex-wrap justify-center md:space-x-4 xl:space-x-4 mt-[100vw] tele-mt md:mt-[14vw]"
        >
          {/* Cards do Shuffle */}
          <div>
            {/* Card principal */}
            <div className="absolute translate-x-[5vw] md:translate-x-0 top-[-42vw] md:top-[2vw] scale-[1.10] md:scale-100 bg-[#191919] rounded-lg p-[8vw] md:p-[2vw] text-center md:relative w-[60vw] md:w-[16vw] md:h-[17.4vw] h-[70vw] overflow-hidden">
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
                <span className="text-[#717171]">$</span>
                120,000
              </p>

              {/* Sombra amarela (fora do fluxo do conteúdo interno) */}
              <div className="absolute bottom-[-1vw] left-1/2 -translate-x-1/2 h-[32%] w-full bg-[#777777] blur-2xl opacity-40 rounded-xl z-[-1] pointer-events-none"></div>
            </div>

            {/* Gradiente dos "500 coins" */}
            <div className="relative text-center bottom-[-120%] w-[70vw] md:mt-[2.8vw] md:w-[17vw] transform -translate-x-[0vw] md:-translate-x-[.5vw] md:bottom-[4.2vw]">
              <div className="justify-between flex items-center text-[5vw] md:text-[1.1vw] bg-gradient-to-r from-[#717171] via-[#D3D3D3] to-[#717171] text-black font-bold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg">
                <img
                  src="/icons/Vector.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
                <div>$500</div>
                <img
                  src="/icons/Vector-1.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="absolute translate-x-[5vw] md:translate-x-0 top-[-125vw] md:scale-100 scale-[1.10] md:top-[0vw] bg-[#191919] rounded-lg p-[8vw] md:p-[2vw] md:pb-[1vw] text-center md:relative transform overflow-hidden w-[60vw] md:w-[16vw] md:h-[17.4vw] h-[70vw]">
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
                <span className="text-[#D89C21]">$</span>
                300,000
              </p>

              {/* Sombra amarela (fora do fluxo do conteúdo interno) */}
              <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 h-[32%] w-full bg-[#d8b321] blur-2xl opacity-40 rounded-xl z-[-1] pointer-events-none"></div>
            </div>

            {/* Div do gradiente ajustada */}
            <div className="relative text-center bottom-[700%] w-[70vw] md:mt-[1vw] md:w-[17vw] transform -translate-x-[0vw] md:-translate-x-[.5vw] md:bottom-[4.4vw]">
              <div className="justify-between flex items-center text-[5vw] md:text-[1.1vw] bg-gradient-to-r from-[#DB9210] via-[#F4E776] to-[#D89C21] text-black font-bold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg">
                <img
                  src="/icons/Vector.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
                <div>$1,000</div>
                <img
                  src="/icons/Vector-1.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="absolute translate-x-[5vw] md:translate-x-0 top-[41vw] md:top-[2vw] bg-[#191919] rounded-lg p-[8vw] md:p-[2vw] text-center md:relative transform scale-[1.10] md:scale-100 overflow-hidden w-[60vw] md:w-[16vw] md:h-[17.4vw] h-[70vw]">
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
                <span className="text-[#9D4D25]">$</span>
                90,000
              </p>

              {/* Sombra amarela (fora do fluxo do conteúdo interno) */}
              <div className="absolute bottom-[-1vw] left-1/2 -translate-x-1/2 h-[32%] w-full bg-[#a55c38] blur-2xl opacity-40 rounded-xl z-[-1] pointer-events-none"></div>
            </div>
            {/* Div do gradiente */}
            <div className="relative text-center bottom-[-650%] w-[70vw] md:mt-[2.8vw] md:w-[17vw] transform -translate-x-[0vw] md:-translate-x-[.5vw] md:bottom-[4.2vw]">
              <div className="justify-between flex items-center text-[5vw] md:text-[1.1vw] bg-gradient-to-r from-[#9D4D25] via-[#FFA878] to-[#9D4D25] text-black font-bold px-[6vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] rounded-lg">
                <img
                  src="/icons/Vector.png"
                  alt="Imagem do botão"
                  className="w-[2.5%] object-contain"
                />
                <div>$250</div>
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
        <div className="absolute time-b md:bottom-[1vw] bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <Time targetDate={time} />
        </div>
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div className="pt-32 second-view-mt md:pt-0 min-h-[100vh] flex flex-col justify-center bg-[#0E0E0E] items-center lg:pb-20 lg:pt-10 3xl:pb-0 my-[-90px] lg:my-0">
        {/* Redeem */}
        <div className="w-[68%] justify-between pt-2 pb-6 items-center flex bg-gradient-to-r from-[#191919] to-[#0E0E0E] rounded-lg text-white">
          <div className="ml-5">
            <img
              src="stake.png"
              alt="Stake Logo"
              className="rounded-t-lg md:w-12 object-contain mt-2 ml-2 mb-2"
            />
            <h1 className="font-extrabold md:text-[1.5vw] text-[4vw] ml-2">
              REDEEM BONUSES
            </h1>
            <p className="font-extrabold md:text-[0.7vw] text-[3vw] text-[#B2B2B2] ml-2">
              AND JOIN OUR $5k LEADERBOARD
            </p>
          </div>
          <div className="mr-6">
            <a
              href="https://csgoempire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center px-6 shadow-button items-center text-center w-full bg-gradient-to-l from-[#07478E] to-[#1475E1] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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

        {/* Positions */}
        <div className="w-[68%] bg-[#191919] rounded-lg p-2 md:p-6 md:mt-[3vw] mt-[10vw]">
          <div className="flex justify-between items-center mb-4 rounded w-full font-medium text-[3vw] md:text-[0.8vw]">
            <div className="flex items-center">
              <span className="text-zinc-500 mr-6">Rank</span>
              <span className="text-zinc-500 md:ml-8">User</span>
            </div>
            <div className="flex items-center">
              <span className="text-zinc-500 md:mr-[4.5rem] mr-4">Wagered</span>
              <span className="text-zinc-500 md:mr-9">Prize</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 w-full">
            {[...Array(7)].map((_, index) => {
              const prizes = [250, 150, 100, 100, 50, 50, 50];
              const prize = prizes[index] || 0;

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
                  className={`flex justify-between items-center md:p-3 md:pr-6 w-full rounded-lg lg:mx-0 md:mx-4 ${
                    index % 2 === 0
                      ? "bg-[#212121] border-t-[1px] border-t-[#2A2A2A] border-b-[2px] border-b-[#181818]"
                      : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div className="bg-[#141414] rounded-lg text-center w-10 ml-2 md:mr-5 mr-[1vw]">
                      <p className="text-[#b2b2b2] md:my-1 font-bold md:text-[0.8vw] my-[2vw] px-1">
                        #{index + 4}
                      </p>
                    </div>
                    <span className="text-white ml-4 md:text-[1vw] text-[3vw] overflow-hidden whitespace-nowrap text-ellipsis max-w-20 md:max-w-sm">
                      {name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white">
                      <span className="text-[#666]">$1000</span>
                    </span>
                    <span className="text-white lg:ml-16 ml-5">
                      ${prize}
                    </span>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* History */}
        <div className="w-[68%] md:mt-[3vw] mt-[10vw]">
          <div className="flex items-center">
            <img
              src="/icons/history.png"
              alt="Imagem do botão"
              className="md:w-[1.3vw] w-5 object-contain mr-2"
            />
            <span className="font-bold font-workSans text-base text-white md:text-[1.4vw]">
              History
            </span>
          </div>
          <div className="flex flex-wrap justify-between gap-4 w-full">
            {["November 2024", "October 2024", "September 2024"].map(
              (month, index) => (
                <div key={index} className="flex-grow mt-6">
                  <div className="bg-[#191919] rounded-lg px-7 py-4 flex items-center text-white md:text-[1vw] text-[3.6vw]">
                    <div>
                      <h1 className="font-bold">{month}</h1>
                      <p className="font-medium text-[#B2B2B2] md:text-[0.8vw]">
                        #{102 - index}
                      </p>
                      <h2 className="font-semibold text-[#656565] md:text-[0.9vw] mt-4">
                        TOTAL POOL
                      </h2>
                      <p className="font-semibold">$2000</p>
                    </div>
                    <div className="flex items-center bg-[#2B2B2B] px-3 py-2 rounded-lg ml-auto cursor-pointer">
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
              )
            )}
          </div>
        </div>

        {/* Rewards */}
        <div className="w-[68%] md:mt-[3vw] mt-[10vw] mb-[2vw]">
          <div className="flex items-center">
            <img
              src="/icons/gift-1.png"
              alt="Imagem do botão"
              className="md:w-[1.3vw] w-5 object-contain mr-2"
            />
            <span className="font-bold font-workSans text-base text-white md:text-[1.4vw]">
              Rewards
            </span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between mt-6">
          {/* Card 1 */}

          <div className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden"
          >
            {/* NEW Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="font-workSans italic font-bold text-sm bg-gradient-to-r from-[#1475E1] from-60% to-slate-950 bg-clip-text text-transparent">
                NEW
              </span>
            </div>

            <img
              src="stake.png"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-32 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-2xl mb-2">
                5% RAKEBACK
              </p>

              <p className="font-semibold font-workSans text-sm text-[#B2B2B2]">
                REGISTER BY CLICKING ON THE REDEEM BUTTON
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white mb-3">
                <img
                  src="/blue.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  REGISTER USING MY CODE
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/blue.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  INSTANTLY CLAIM YOUR 5% RAKEBACK
                </span>
              </div>
              {/* Span vazio para igualar altura com card 2 */}
              <div className="flex text-white mb-3">
                <span className="w-5 h-5 mr-2"></span>
                <span className="font-semibold font-workSans text-sm opacity-0">
                  PLACEHOLDER TEXT
                </span>
              </div>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">ClassyYT</span>
              <label className="container-1 mr-4">
                <input type="checkbox" id="checkbox" />
                <svg
                  viewBox="0 0 384 512"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="clipboard"
                  onClick={handleCopy}
                >
                  <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                </svg>

                <svg
                  viewBox="0 0 384 512"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="clipboard-check"
                  style={{ display: "none" }} // Inicialmente invisível
                >
                  <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </label>
            </div>
            <a
              href="https://clash.gg/r/CLASSY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#07478E] to-[#1475E1] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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

          {/* Card 2 */}

          <div className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden ml-[2vw]"
          >
            {/* NEW Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="font-workSans italic font-bold text-sm bg-gradient-to-r from-[#00CA51] from-60% to-slate-950 bg-clip-text text-transparent">
                NEW
              </span>
            </div>

            <img
              src="stake.png"
              alt="Reward 2"
              className="rounded-t-lg 2xl:h-32 w-32 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-2xl mb-2">
                VIP REWARDS
              </p>

              <p className="font-semibold font-workSans text-sm text-[#B2B2B2]">
                REGISTER BY CLICKING ON THE REDEEM BUTTON
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white mb-3">
                <img
                  src="/green.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  REGISTER USING MY CODE
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/green.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  CONNECT YOUR STAKE ACCOUNT
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/green.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  ENJOY YOUR VIP REWARDS
                </span>
              </div>
            </div>

            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">ClassyYT</span>
              <label className="container-1 mr-4">
                <input type="checkbox" id="checkbox" />
                <svg
                  viewBox="0 0 384 512"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="clipboard"
                  onClick={handleCopy}
                >
                  <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                </svg>

                <svg
                  viewBox="0 0 384 512"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="clipboard-check"
                  style={{ display: "none" }} // Inicialmente invisível
                >
                  <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </label>
            </div>
            <a
              href="https://shuffle.com?r=Classy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#007B31] to-[#00CA51] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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

          {/* Card 3 */}

          <div className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden ml-[2vw]"
          >
            {/* NEW Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="font-workSans italic font-bold text-sm bg-gradient-to-r from-[#FF843B] from-60% to-slate-950 bg-clip-text text-transparent">
                NEW
              </span>
            </div>

            <img
              src="stake.png"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-32 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-2xl mb-2">
                $5k LEADERBOARD
              </p>

              <p className="font-semibold font-workSans text-sm text-[#B2B2B2]">
                REGISTER BY CLICKING ON THE REDEEM BUTTON
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white mb-3">
                <img
                  src="/orange.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  REGISTER USING MY CODE
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/orange.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  CLIMB THE LEADERBOARD AND WIN
                </span>
              </div>
              {/* Span vazio para igualar altura com card 2 */}
              <div className="flex text-white mb-3">
                <span className="w-5 h-5 mr-2"></span>
                <span className="font-semibold font-workSans text-sm opacity-0">
                  PLACEHOLDER TEXT
                </span>
              </div>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">ClassyYT</span>
              <label className="container-1 mr-4">
                <input type="checkbox" id="checkbox" />
                <svg
                  viewBox="0 0 384 512"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="clipboard"
                  onClick={handleCopy}
                >
                  <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                </svg>

                <svg
                  viewBox="0 0 384 512"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="clipboard-check"
                  style={{ display: "none" }} // Inicialmente invisível
                >
                  <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </label>
            </div>
            <a
              href="https://csgoempire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#A64D18] to-[#FF843B] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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
        </div>
      </div>
    </div>
  );
}

export default Shuffle;
