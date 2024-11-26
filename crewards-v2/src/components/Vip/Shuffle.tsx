import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Definindo um tipo para os níveis
type Tier =
  | "WOOD"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "JADE"
  | "SAPPHIRE"
  | "RUBY"
  | "DIAMOND";

const Shuffle: React.FC = () => {
  const [userTier] = useState<Tier>("SILVER");
  const levelPercent: number = 48.7;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login

  const tierData: Record<
    Tier,
    {
      image: string;
      wager: string;
      prize: string;
      next: Tier | null; // O próximo nível pode ser null
    }
  > = {
    WOOD: {
      image: "/wood.svg",
      wager: "1000",
      prize: "10",
      next: "BRONZE",
    },
    BRONZE: {
      image: "/bronze.svg",
      wager: "5000",
      prize: "40",
      next: "SILVER",
    },
    SILVER: {
      image: "/silver.svg",
      wager: "10000",
      prize: "60",
      next: "GOLD",
    },
    GOLD: {
      image: "/gold.svg",
      wager: "25000",
      prize: "190",
      next: "PLATINUM",
    },
    PLATINUM: {
      image: "/platinum.svg",
      wager: "50000",
      prize: "325",
      next: "JADE",
    },
    JADE: {
      image: "/jade.svg",
      wager: "75000",
      prize: "340",
      next: "SAPPHIRE",
    },
    SAPPHIRE: {
      image: "/sapphire.svg",
      wager: "100000",
      prize: "350",
      next: "RUBY",
    },
    RUBY: {
      image: "/ruby.svg",
      wager: "250000",
      prize: "2250",
      next: "DIAMOND",
    },
    DIAMOND: {
      image: "/diamond.svg",
      wager: "500000",
      prize: "4000",
      next: null,
    },
  };

  const tierKeys = Object.keys(tierData) as Tier[];

  const currentTier = tierData[userTier];
  const nextTier = currentTier.next ? tierData[currentTier.next] : null;

  const handleLogin = () => {
    setIsLoggedIn(true); // Define isLoggedIn como true ao fazer login
    console.log("Login true");
  };

  // Hook para atualizar a largura da janela
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [redeemedTiers, setRedeemedTiers] = useState<Tier[]>([]);

  const handleClick = (tier: Tier) => {
    if (
      tier === userTier ||
      tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
      (userTier === "DIAMOND" && levelPercent === 100) ||
      (levelPercent === 100 && tier === userTier)
    ) {
      setRedeemedTiers((prev) => {
        // Adiciona o tier ao array apenas se ainda não estiver presente
        if (!prev.includes(tier)) {
          return [...prev, tier];
        }
        return prev; // Retorna o mesmo estado se o tier já foi resgatado
      });
    }
  };

  const [showRectangle, setShowRectangle] = useState(false);

  const toggleRectangle = () => {
    setShowRectangle(!showRectangle);
  };

  const containerClasses = "absolute inset-0 bg-cover bg-center";

  return (
    <div className="relative items-center justify-center min-h-screen bg-cover bg-center bg-[#0E0E0E]">
      {/* Primeira View */}
      <div className="relative flex items-center justify-center lg:min-h-[100vh] custom-min-h bg-cover bg-center">
        <div className={`${containerClasses} brightness-125 background-0`} />
        <div className={`${containerClasses} brightness-90 glows-2`} />
        {/* Fixed Images */}
        {["Vector-2", "Vector-3"].map((layer, index) => (
          <img
            key={index}
            src={`/Vectors/${layer}.png`}
            alt={`Vector ${index + 1}`}
            className={`hidden md:block absolute ${
              index === 0
                ? "left-[33%] top-[30%] w-[2%]" // Nova imagem 1
                : "right-[33%] top-[22%] w-[1.5%]" // Nova imagem 2
            } `}
          />
        ))}
        <p className="items-end absolute top-[32vw] md:top-[7.5vw] text-[11vw] md:text-[3vw] font-extrabold z-10 text-white">
          <span className="text-[3.5vw]">VIP</span>
        </p>

        {/* Info */}
        <div className="absolute top-[20%] right-[10%] flex items-center z-10 ">
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
              className="absolute top-full -left-[200%] mt-2 bg-[#191919] text-white rounded-lg p-4 w-[20rem] z-20 shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src="/info-1.png"
                  alt="Imagem Info"
                  className="w-4 h-4 object-contain mr-1"
                />
                <p className="font-bold font-workSans text-[#B2B2B2] text-[0.9vw] mt-[0.5%]">
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

        {/* Content */}
        <div className="z-10 w-[68%]">
          {isLoggedIn ? (
            // Logged
            <div className="bg-[#191919] rounded-xl py-[1vw] px-[1.6vw] z-10 mt-[3vw] text-white text-center">
              {/* Topo com informações alinhadas à esquerda e à direita */}
              <div className="flex justify-between items-center mb-4">
                {/* Esquerda: Tier e Wagered */}
                <div className="flex items-center">
                  <div className="bg-[#131313] p-[0.4vw] rounded-xl">
                    <img
                      src={currentTier.image}
                      alt="Tier Badge"
                      className="w-[2.6vw] object-contain"
                    />
                  </div>
                  <div className="text-left ml-[1vw]">
                    <h2 className="text-white text-[1.1vw] font-extrabold">
                      {userTier}
                    </h2>
                    <p className="text-[#B2B2B2] font-semibold text-[0.6vw]">
                      WAGERED
                    </p>
                  </div>
                </div>

                {/* Direita: Progress e Level Percentage */}
                <div className="flex items-center">
                  <div className="text-right">
                    <h2 className="text-white text-[1.1vw] font-extrabold">
                      {levelPercent}%
                    </h2>
                    <p className="text-[#B2B2B2] font-semibold text-[0.6vw]">
                      YOUR PROGRESS
                    </p>
                  </div>
                </div>
              </div>

              {/* Barra de Carregamento */}
              <div className="w-full h-3 bg-[#131313] rounded-full relative mt-[2vw] mb-[1.2vw]">
                <div
                  className="h-full rounded-full progress-bar"
                  style={{
                    width: `${levelPercent}%`,
                    background: `#886cff`,
                  }}
                ></div>
              </div>

              {/* Legenda da Barra de Progresso */}
              <div className="flex justify-between mt-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={currentTier.image}
                    alt="start"
                    className="w-6 h-6"
                  />
                  <p className="text-gray-300 text-xs">{userTier}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {nextTier && (
                    <>
                      <img src={nextTier.image} alt="end" className="w-6 h-6" />
                      <span className="text-gray-300 text-xs">
                        <span>{currentTier.next}</span>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            // Log In
            <div className="bg-[#191919] relative rounded-xl p-[2vw] z-10 mt-[3vw] text-white text-center flex flex-col items-center">
              {/* Fixed Images */}
              {["Vector-2", "Vector-3"].map((layer, index) => (
                <img
                  key={index}
                  src={`/Vectors/${layer}.png`}
                  alt={`Vector ${index + 1}`}
                  className={`hidden md:block absolute ${
                    index === 0
                      ? "left-[4%] bottom-[20%] w-[2%]" // Nova imagem 1
                      : "right-[8%] top-[22%] w-[1.5%]" // Nova imagem 2
                  } `}
                />
              ))}
              <h1 className="font-extrabold text-[1.6vw]">LOG IN</h1>
              <p className="font-semibold text-[0.7vw] text-[#B2B2B2]">
                LOG IN TO VIEW YOUR PERSONAL STATISTICS AND CLAIM THE VIP
                REWARDS!
              </p>
              <Link
                onClick={handleLogin}
                to="#"
                className="flex items-center mt-[1vw] shadow-button-1 text-center cursor-pointer bg-[#2B2B2B] text-[#B2B2B2] font-workSans font-bold px-[0.8vw] py-[0.5vw] hover:opacity-70 transition-opacity duration-300 rounded-[0.6vw]"
              >
                <img
                  src="/discordlogo.png"
                  alt="Imagem do botão"
                  className="w-[0.8vw] object-contain mr-2"
                />
                <p className="text-[0.8vw]">LOG IN</p>
              </Link>
            </div>
          )}
        </div>

        {/* VIP Rewards */}
        <div className="absolute z-10 w-[68%] bottom-[2vw]">
          {/* Rakeback */}
          <div className="flex items-center mt-[2vw]">
            <img
              src="/icons/sparkles-two-2.png"
              alt="Imagem do botão"
              className="w-5 h-5 object-contain mr-2"
            />
            <span className="font-bold font-workSans text-base text-white text-[1.2vw]">
              VIP Rewards
            </span>
          </div>
          <div className="bg-[#191919] rounded-xl p-8 z-10 mt-[1vw] text-white text-center flex justify-between items-center">
            {/* Lado esquerdo */}
            <div className="flex flex-col items-center space-y-4">
              {/* Coins */}
              <div className="flex items-center space-x-4">
                <div className="bg-[#131313] p-[1vw] rounded-xl">
                  <img
                    src="/shufflelogo.png"
                    alt="Shuffle Logo"
                    className="w-[1.3vw] object-contain"
                  />
                </div>
                <div className="text-left">
                  <h2 className="font-extrabold text-[0.8vw]">RAKEBACK</h2>
                  <p className="font-semibold text-[#B2B2B2] text-[0.7vw]">
                    INSTANT REWARD
                  </p>
                </div>
              </div>
            </div>

            {/* Lado direito */}
            <div className="flex items-center">
              {/* Available */}
              <div className="flex justify-between items-center bg-[#131313] p-4 rounded-xl border-[#2a2a2a] border-2 mr-6">
                <h2 className="text-[#B2B2B2] font-bold mr-2">AVAILABLE</h2>
                <p className="font-bold">$0</p>
              </div>
              {/* Redeem Reward */}
              {isLoggedIn ? (
                <div className="flex cursor-pointer justify-center p-4 shadow-button items-center text-center bg-gradient-to-l from-[#4C30C0] to-[#886cff] rounded-xl hover:opacity-70 transition-opacity duration-300">
                  <img
                    src="/icons/gift-1-1.png"
                    alt="Imagem do botão"
                    className="w-5 h-5 object-contain mr-2"
                  />
                  <span className="font-bold font-workSans text-base text-white">
                    REDEEM REWARD
                  </span>
                </div>
              ) : (
                <div className="flex cursor-not-allowed justify-center p-4 shadow-button items-center text-center bg-gradient-to-l from-[#4C30C0] to-[#886cff] rounded-xl opacity-20">
                  <img
                    src="/icons/gift-1-1.png"
                    alt="Imagem do botão"
                    className="w-5 h-5 object-contain mr-2"
                  />
                  <span className="font-bold font-workSans text-base text-white">
                    REDEEM REWARD
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Hr */}
          <hr className="border-[#242424] mt-[2vw]" />
        </div>
      </div>

      {/* Second View */}
      <div className="flex items-center justify-center text-center">
        {/* Tiers */}
        <div className="z-10 w-[68%] mb-[4vw]">
          {tierKeys.map((tier) => (
            <div
              key={tier}
              className={`bg-[#191919] relative rounded-xl p-8 z-10 text-white text-center flex justify-between items-center mb-6 overflow-hidden ${
                tier === userTier
                  ? "border-l-4 border-[#886cff]" // Estilo especial para o rank atual
                  : ""
              }`}
            >
              {/* Glow lateral apenas para o rank atual */}
              {tier === userTier && (
                <div className="absolute left-[-2vw] h-full w-[20vw] bg-[#886cff] blur-3xl opacity-10 z-[-1]"></div>
              )}

              {/* Lado esquerdo */}
              <div className="flex flex-col items-center space-y-4">
                {/* Imagem do Tier */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#131313] relative p-3 rounded-xl">
                    <img
                      src={tierData[tier].image}
                      alt={tierData[tier].prize}
                      className="w-[2vw] object-contain"
                    />
                    {/* Ícone de check para tiers passados */}
                    {tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) && (
                      <img
                        src="/circle-check-1.png"
                        alt="Check Icon"
                        className="absolute top-0 left-0 w-5 h-5 transform -translate-x-[50%] translate-y-[50%]"
                      />
                    )}
                  </div>
                  <div className="text-left">
                    {/* Nome do Tier */}
                    <h2 className="font-extrabold text-[0.8vw]">
                      {tier.charAt(0).toUpperCase() + tier.slice(1)}
                    </h2>
                    {/* Wager do Tier */}
                    <p className="font-semibold text-[#B2B2B2] text-[0.7vw] flex items-center">
                      WAGER ${tierData[tier].wager}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lado direito */}
              <div className="flex items-center">
                {/* Available */}
                <div className="flex justify-between items-center bg-[#131313] p-4 rounded-xl border-[#2a2a2a] border-2 mr-6">
                  <h2 className="text-[#B2B2B2] font-bold mr-2">CLAIM</h2>
                  <p className="font-bold">${tierData[tier].prize}</p>
                </div>

                {/* Botão Redeem Reward */}
                <button
                  className={`flex justify-center p-4 shadow-button items-center text-center rounded-xl ${
                    redeemedTiers.includes(tier)
                      ? "bg-gradient-to-l from-[#4C30C0] to-[#886CFF] cursor-not-allowed opacity-20"
                      : tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
                        (userTier === "DIAMOND" && levelPercent === 100) ||
                        (levelPercent === 100 && tier === userTier)
                      ? "bg-gradient-to-l from-[#4C30C0] to-[#886CFF] text-white cursor-pointer hover:opacity-70 transition-opacity duration-300"
                      : "bg-gradient-to-l from-[#4C30C0] to-[#886CFF] cursor-not-allowed opacity-20"
                  }`}
                  disabled={redeemedTiers.includes(tier)}
                  onClick={() => handleClick(tier)}
                >
                  {redeemedTiers.includes(tier) ? (
                    <>
                      <img
                        src="/circle-check-3.png"
                        alt="Check Icon"
                        className="w-5 h-5 object-contain mr-2"
                      />
                      <span className="font-bold font-workSans text-base">
                        REDEEMED
                      </span>
                    </>
                  ) : (
                    <>
                      <img
                        src="/icons/gift-1-1.png"
                        alt="Gift Icon"
                        className="w-5 h-5 object-contain mr-2"
                      />
                      <span className="font-bold font-workSans text-base">
                        REDEEM REWARD
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shuffle;
function setWindowWidth(_innerWidth: number) {
  throw new Error("Function not implemented.");
}
