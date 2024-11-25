import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Definindo um tipo para os níveis
type Tier =
  | "rust"
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "emerald"
  | "sapphire"
  | "ruby"
  | "diamond"
  | "mythic"
  | "darkmatter";

const Empire: React.FC = () => {
  const [userTier] = useState<Tier>("rust");
  const levelPercent: number = 0;

  const [, setIsLoggedIn] = useState(false); // Estado de login

  const tierData: Record<
    Tier,
    {
      color: string;
      image: string;
      text: string;
      wager: string;
      prize: string;
      next: Tier | null; // O próximo nível pode ser null
      nextText: string | null;
    }
  > = {
    rust: {
      color: "#9c8474",
      image: "/rank-rust.png",
      text: "is your current tier",
      wager: "1000",
      prize: "10",
      next: "bronze",
      nextText: "Bronze tier",
    },
    bronze: {
      color: "#d5a06c",
      image: "/2bronze.png",
      text: "is your current tier",
      wager: "5000",
      prize: "40",
      next: "silver",
      nextText: "Silver tier",
    },
    silver: {
      color: "#ced7e5",
      image: "/3silver.png",
      text: "is your current tier",
      wager: "10000",
      prize: "60",
      next: "gold",
      nextText: "Gold tier",
    },
    gold: {
      color: "#ddbb56",
      image: "/4gold.png",
      text: "is your current tier",
      wager: "25000",
      prize: "190",
      next: "platinum",
      nextText: "Platinum tier",
    },
    platinum: {
      color: "#9094b6",
      image: "/5platinum.png",
      text: "is your current tier",
      wager: "50000",
      prize: "325",
      next: "emerald",
      nextText: "Emerald tier",
    },
    emerald: {
      color: "#27fc2f",
      image: "/6emerald.png",
      text: "is your current tier",
      wager: "75000",
      prize: "400",
      next: "sapphire",
      nextText: "Sapphire tier",
    },
    sapphire: {
      color: "#2b40fc",
      image: "/7sapphire1.png",
      text: "is your current tier",
      wager: "100000",
      prize: "350",
      next: "ruby",
      nextText: "Ruby tier",
    },
    ruby: {
      color: "#ee3829",
      image: "/8ruby.png",
      text: "is your current tier",
      wager: "250000",
      prize: "2250",
      next: "diamond",
      nextText: "Diamond tier",
    },
    diamond: {
      color: "#13cffb",
      image: "/9diamond.png",
      text: "is your current tier",
      wager: "500000",
      prize: "4000",
      next: "mythic",
      nextText: "Mythic tier",
    },
    mythic: {
      color: "#a023d9",
      image: "/10mythic.png",
      text: "is your current tier",
      wager: "1000000",
      prize: "8500",
      next: "sapphire",
      nextText: "Sapphire tier",
    },
    darkmatter: {
      color: "#640464",
      image: "/11darkmatter.png",
      text: "is your current tier",
      wager: "2500000",
      prize: "27000",
      next: null,
      nextText: null,
    },
  };

  const tierKeys = Object.keys(tierData) as Tier[];

  const handleLogin = () => {
    setIsLoggedIn(true); // Define isLoggedIn como true ao fazer login
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

  const containerClasses = "absolute inset-0 bg-cover bg-center";

  return (
    <div className="relative items-center justify-center min-h-screen bg-cover bg-center bg-[#0E0E0E]">
      {/* Primeira View */}
      <div className="relative flex flex-wrap items-center justify-center lg:min-h-[100vh] custom-min-h bg-cover bg-center">
        <div className={`${containerClasses} brightness-125 background-0`} />
        <div className={`${containerClasses} brightness-90 glows-1`} />
        <p className="items-end absolute top-[32vw] md:top-[7.5vw] text-[11vw] md:text-[3vw] font-extrabold z-10 text-white">
          <span className="text-[3.5vw]">VIP</span>
        </p>

        {/* Content */}
        <div className="z-10 w-[68%]">
          {/* Log In */}
          <div className="bg-[#191919] rounded-xl p-[2vw] z-10 mt-[3vw] text-white text-center flex flex-col items-center">
            <h1 className="font-extrabold text-[1.6vw]">LOG IN</h1>
            <p className="font-semibold text-[0.7vw] text-[#B2B2B2]">
              LOG IN TO VIEW YOUR PERSONAL STATISTICS AND CLAIM THE VIP REWARDS!
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
                <div className="bg-[#131313] p-[1.3vw] rounded-xl">
                  <img
                    src="/icons/coins.png"
                    alt="Coins"
                    className="w-[1.6vw] object-contain"
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
                <img
                  src="/icons/coins.png"
                  alt="Coins"
                  className="w-4 h-4 object-contain mr-2"
                />
                <p className="font-bold">0</p>
              </div>

              {/* Redeem Reward */}
              <div className="flex cursor-pointer justify-center p-4 shadow-button items-center text-center bg-gradient-to-l from-[#9C6E0A] to-[#F6AF16] rounded-xl hover:opacity-70 transition-opacity duration-300">
                <img
                  src="/icons/gift-1-1.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-bold font-workSans text-base text-white">
                  REDEEM REWARD
                </span>
              </div>
            </div>
          </div>

          {/* Hr */}
          <hr className="border-[#242424] mt-[2vw]" />
        </div>
      </div>

      {/* Second View */}
      <div className="flex items-center justify-center text-center">
        {/* Tiers */}
        <div className="z-10 w-[68%]">
          {tierKeys.map((tier) => (
            <div
              key={tier}
              className="bg-[#191919] rounded-xl p-8 z-10 text-white text-center flex justify-between items-center mb-6"
            >
              {/* Lado esquerdo */}
              <div className="flex flex-col items-center space-y-4">
                {/* Imagem do Tier */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#131313] p-3 rounded-xl">
                    <img
                      src={tierData[tier].image}
                      alt={tierData[tier].text}
                      className="w-[2.8vw] object-contain"
                    />
                  </div>
                  <div className="text-left">
                    {/* Nome do Tier */}
                    <h2 className="font-extrabold text-[0.8vw]">
                      {tier.charAt(0).toUpperCase() + tier.slice(1)}
                    </h2>
                    {/* Wager do Tier */}
                    <p className="font-semibold text-[#B2B2B2] text-[0.7vw] flex items-center">
                      WAGER{" "}
                      <img
                        src="/icons/coins.png"
                        alt="Coins"
                        className="w-4 h-4 object-contain mx-2"
                      />
                      {tierData[tier].wager}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lado direito */}
              <div className="flex items-center">
                {/* Available */}
                <div className="flex justify-between items-center bg-[#131313] p-4 rounded-xl border-[#2a2a2a] border-2 mr-6">
                  <h2 className="text-[#B2B2B2] font-bold mr-2">CLAIM</h2>
                  <img
                    src="/icons/coins.png"
                    alt="Coins"
                    className="w-4 h-4 object-contain mr-2"
                  />
                  <p className="font-bold">{tierData[tier].prize}</p>
                </div>

                {/* Botão Redeem Reward */}
                <button
                  className={`flex cursor-pointer justify-center p-4 shadow-button items-center text-center rounded-xl hover:opacity-70 transition-opacity duration-300 ${
                    tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
                    (userTier === "darkmatter" && levelPercent === 100) ||
                    (levelPercent === 100 && tier === userTier)
                      ? "bg-gradient-to-l from-[#9C6E0A] to-[#F6AF16] text-white"
                      : "bg-gray-500 text-gray-300 cursor-not-allowed"
                  }`}
                  disabled={
                    !(
                      tier === userTier ||
                      tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
                      (userTier === "darkmatter" && levelPercent === 100) ||
                      (levelPercent === 100 && tier === userTier)
                    )
                  }
                >
                  <img
                    src="/icons/gift-1-1.png"
                    alt="Gift Icon"
                    className="w-5 h-5 object-contain mr-2"
                  />
                  <span className="font-bold font-workSans text-base">
                    REDEEM REWARD
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empire;
function setWindowWidth(_innerWidth: number) {
  throw new Error("Function not implemented.");
}
