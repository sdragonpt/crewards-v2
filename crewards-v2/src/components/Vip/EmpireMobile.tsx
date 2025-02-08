import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Tier =
  | "RUST"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "EMERALD"
  | "SAPPHIRE"
  | "RUBY"
  | "DIAMOND"
  | "MYTHIC"
  | "DARKMATTER";

const Empire: React.FC = () => {
  const [userTier] = useState<Tier>("SILVER");
  const levelPercent: number = 20;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const tierData: Record<
    Tier,
    {
      image: string;
      wager: string;
      prize: string;
      next: Tier | null;
    }
  > = {
    RUST: {
      image: "/rank-rust.png",
      wager: "1,000",
      prize: "10",
      next: "BRONZE",
    },
    BRONZE: {
      image: "/2bronze.png",
      wager: "5,000",
      prize: "40",
      next: "SILVER",
    },
    SILVER: {
      image: "/3silver.png",
      wager: "10,000",
      prize: "60",
      next: "GOLD",
    },
    GOLD: {
      image: "/4gold.png",
      wager: "25,000",
      prize: "190",
      next: "PLATINUM",
    },
    PLATINUM: {
      image: "/5platinum.png",
      wager: "50,000",
      prize: "325",
      next: "EMERALD",
    },
    EMERALD: {
      image: "/6emerald.png",
      wager: "75,000",
      prize: "400",
      next: "SAPPHIRE",
    },
    SAPPHIRE: {
      image: "/7sapphire1.png",
      wager: "100,000",
      prize: "350",
      next: "RUBY",
    },
    RUBY: {
      image: "/8ruby.png",
      wager: "250,000",
      prize: "2250",
      next: "DIAMOND",
    },
    DIAMOND: {
      image: "/9diamond.png",
      wager: "500,000",
      prize: "4000",
      next: "MYTHIC",
    },
    MYTHIC: {
      image: "/10mythic.png",
      wager: "1,000,000",
      prize: "8500",
      next: "DARKMATTER",
    },
    DARKMATTER: {
      image: "/11darkmatter.png",
      wager: "2,500,000",
      prize: "27000",
      next: null,
    },
  };

  const tierKeys = Object.keys(tierData) as Tier[];
  const currentTier = tierData[userTier];
  const nextTier = currentTier.next ? tierData[currentTier.next] : null;

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Login true");
  };

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
      (userTier === "DARKMATTER" && levelPercent === 100) ||
      (levelPercent === 100 && tier === userTier)
    ) {
      setRedeemedTiers((prev) => {
        if (!prev.includes(tier)) {
          return [...prev, tier];
        }
        return prev;
      });
    }
  };

  const [showRectangle, setShowRectangle] = useState(false);

  const toggleRectangle = () => {
    setShowRectangle(!showRectangle);
  };

  const containerClasses = "absolute inset-0 bg-cover bg-center";

  return (
    <div className="relative min-h-screen bg-[#0E0E0E]">
      <div className="relative flex flex-wrap items-center justify-center min-h-[100vh] bg-cover bg-center">
        {/* Background Effects */}
        <div className={`${containerClasses} brightness-125 background-0`} />
        <div className={`${containerClasses} brightness-90 glows-1`} />

        {/* VIP Title */}
        <p className="absolute top-[32vw] text-[11vw] font-extrabold z-10 text-white">
          <span>VIP</span>
        </p>

        {/* Info Button */}
        <div className="absolute top-[20%] right-[10%] flex items-center z-20">
          <span
            onClick={toggleRectangle}
            className="flex items-center cursor-pointer hover:opacity-70 transition-opacity duration-300"
          >
            <img src="/info.png" alt="Info" className="w-5 h-5 mr-1" />
            <span className="font-bold text-white text-sm">INFO</span>
          </span>

          {showRectangle && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full right-0 mt-2 bg-[#191919] rounded-lg p-4 w-[calc(100vw-2rem)] max-w-[20rem] z-20 shadow-lg"
            >
              <div className="flex items-center mb-2">
                <img src="/info-1.png" alt="Info" className="w-4 h-4 mr-2" />
                <p className="font-bold text-[#B2B2B2] text-sm">INFO</p>
              </div>
              <p className="text-sm text-[#656565]">
                Winners will be tipped onsite! Sports betting & coin flip bets
                will NOT be counted towards your wager on the leaderboard.
              </p>
            </motion.div>
          )}
        </div>

        {/* Main Content */}
        <div
          className={`z-10 w-[90%] px-4 flex flex-col items-center justify-center ${
            isLoggedIn ? "mt-[38vh]" : "mt-[38vh]"
          }`}
        >
          {isLoggedIn ? (
            <div className="bg-[#191919] rounded-xl p-6 w-full">
              <div className="flex flex-col gap-6">
                {/* Header com Status */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#131313] p-3 rounded-xl">
                      <img
                        src={currentTier.image}
                        alt="Tier Badge"
                        className="w-12 h-12"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-white">
                        {userTier}
                      </h2>
                      <p className="text-sm text-[#B2B2B2]">WAGERED</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <h2 className="text-xl font-extrabold text-white">
                      {levelPercent}%
                    </h2>
                    <p className="text-sm text-[#B2B2B2]">YOUR PROGRESS</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#131313] rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${levelPercent}%`,
                      background: "#E9B10E",
                    }}
                  />
                </div>

                {/* Progress Labels */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={currentTier.image}
                      alt="Current"
                      className="w-6 h-6"
                    />
                    <p className="text-gray-300 text-sm">{userTier}</p>
                  </div>
                  {nextTier && (
                    <div className="flex items-center gap-2">
                      <img
                        src={nextTier.image}
                        alt="Next"
                        className="w-6 h-6"
                      />
                      <p className="text-gray-300 text-sm">
                        {currentTier.next}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#191919] rounded-xl p-6 w-full text-center">
              <h1 className="text-2xl font-extrabold mb-4 text-white">
                LOG IN
              </h1>
              <p className="text-sm text-[#B2B2B2] font-semibold mb-6">
                LOG IN TO VIEW YOUR PERSONAL STATISTICS AND CLAIM THE VIP
                REWARDS!
              </p>
              <Link
                onClick={handleLogin}
                to="#"
                className="inline-flex items-center justify-center gap-2 bg-[#2B2B2B] text-[#B2B2B2] px-6 py-3 rounded-lg"
              >
                <img src="/discordlogo.png" alt="Discord" className="w-5" />
                <span className="font-bold">LOG IN</span>
              </Link>
            </div>
          )}

          {/* VIP Rewards Section */}
          <div className="w-full mt-8">
            <div className="flex items-center mb-4">
              <img
                src="/icons/sparkles-two-2.png"
                alt="Sparkles"
                className="w-5 h-5 mr-2"
              />
              <span className="font-bold text-white text-lg">VIP Rewards</span>
            </div>

            <div className="bg-[#191919] rounded-xl p-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#131313] p-3 rounded-xl">
                    <img
                      src="/icons/coins.png"
                      alt="Coins"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">RAKEBACK</h3>
                    <p className="text-sm text-gray-400">INSTANT REWARD</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="bg-[#131313] p-4 rounded-xl border border-[#2a2a2a]">
                    <div className="flex justify-between items-center">
                      <span className="text-[#B2B2B2]">AVAILABLE</span>
                      <div className="flex items-center">
                        <img
                          src="/icons/coins.png"
                          alt=""
                          className="w-4 h-4 mr-2"
                        />
                        <span className="font-bold text-white">0</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl ${
                      isLoggedIn
                        ? "bg-gradient-to-r from-[#9C6E0A] to-[#F6AF16]"
                        : "bg-gradient-to-r from-[#9C6E0A] to-[#F6AF16] opacity-20"
                    }`}
                    disabled={!isLoggedIn}
                  >
                    <img src="/icons/gift-1-1.png" alt="" className="w-5 h-5" />
                    <span className="text-white font-bold">REDEEM REWARD</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second View - Tiers List */}
      <div className="px-4 py-8 flex justify-center">
        <div className="w-[90%] space-y-4">
          {tierKeys.map((tier) => (
            <div
              key={tier}
              className={`bg-[#191919] rounded-xl p-4 ${
                tier === userTier ? "border-l-4 border-[#E9B10E]" : ""
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative bg-[#131313] p-3 rounded-xl">
                    <img
                      src={tierData[tier].image}
                      alt=""
                      className="w-10 h-10"
                    />
                    {tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) && (
                      <img
                        src="/circle-check-2.png"
                        alt=""
                        className="absolute -top-2 -left-2 w-5 h-5"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{tier}</h3>
                    <p className="text-sm text-gray-400 flex items-center">
                      WAGER
                      <img
                        src="/icons/coins.png"
                        alt=""
                        className="w-4 h-4 mx-1"
                      />
                      {tierData[tier].wager}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-[#131313] p-4 rounded-xl border border-[#2a2a2a]">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">CLAIM</span>
                      <div className="flex items-center">
                        <img
                          src="/icons/coins.png"
                          alt=""
                          className="w-4 h-4 mr-2"
                        />
                        <p className="font-bold text-white">
                          {tierData[tier].prize}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleClick(tier)}
                    disabled={redeemedTiers.includes(tier)}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl ${
                      redeemedTiers.includes(tier)
                        ? "bg-gradient-to-r from-[#9C6E0A] to-[#F6AF16] opacity-20"
                        : tierKeys.indexOf(tier) <= tierKeys.indexOf(userTier)
                        ? "bg-gradient-to-r from-[#9C6E0A] to-[#F6AF16]"
                        : "bg-gradient-to-r from-[#9C6E0A] to-[#F6AF16] opacity-20"
                    }`}
                  >
                    {redeemedTiers.includes(tier) ? (
                      <>
                        <img
                          src="/circle-check-3.png"
                          alt=""
                          className="w-5 h-5"
                        />
                        <span className="text-white font-bold">REDEEMED</span>
                      </>
                    ) : (
                      <>
                        <img
                          src="/icons/gift-1-1.png"
                          alt=""
                          className="w-5 h-5"
                        />
                        <span className="text-white font-bold">
                          REDEEM REWARD
                        </span>
                      </>
                    )}
                  </button>
                </div>
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
