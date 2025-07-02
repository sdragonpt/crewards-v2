import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Definindo um tipo para os níveis
type Tier =
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM I"
  | "PLATINUM II"
  | "PLATINUM III"
  | "PLATINUM IV"
  | "PLATINUM V";

const ShuffleMobile: React.FC = () => {
  const [userTier] = useState<Tier>("SILVER");
  const levelPercent: number = 48.7;
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
    BRONZE: {
      image: "/bronze.png",
      wager: "10,000",
      prize: "85",
      next: "SILVER",
    },
    SILVER: {
      image: "/silver.svg",
      wager: "50,000",
      prize: "340",
      next: "GOLD",
    },
    GOLD: {
      image: "/gold.png",
      wager: "100,000",
      prize: "425",
      next: "PLATINUM I",
    },
    "PLATINUM I": {
      image: "/platinum_1.png",
      wager: "250,000",
      prize: "1,275",
      next: "PLATINUM II",
    },
    "PLATINUM II": {
      image: "/platinum_2.png",
      wager: "500,000",
      prize: "2,125",
      next: "PLATINUM III",
    },
    "PLATINUM III": {
      image: "/platinum_3.png",
      wager: "1,000,000",
      prize: "4,250",
      next: "PLATINUM IV",
    },
    "PLATINUM IV": {
      image: "/platinum_4.png",
      wager: "2,500,000",
      prize: "12,750",
      next: "PLATINUM V",
    },
    "PLATINUM V": {
      image: "/platinum_5.png",
      wager: "5,000,000",
      prize: "21,250",
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

  const [redeemedTiers, setRedeemedTiers] = useState<Tier[]>([]);

  const handleClick = (tier: Tier) => {
    if (
      tier === userTier ||
      tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
      (userTier === "PLATINUM V" && levelPercent === 100) ||
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
      {/* First View */}
      <div className="relative flex flex-wrap items-center justify-center min-h-[100vh] bg-cover bg-center">
        {/* Background Effects */}
        <div className={`${containerClasses} brightness-125 background-0`} />
        <div className={`${containerClasses} brightness-50 glows-2`} />

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
            // Logged In View
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
                      background: `#1475E1`,
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
            // Login View
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
            <hr className="border-[#242424]" />
          </div>
        </div>
      </div>

      {/* Second View - Tiers List */}
      <div className="px-4 py-8 flex justify-center">
        <div className="w-[90%] space-y-4">
          {tierKeys.map((tier) => (
            <div
              key={tier}
              className={`bg-[#191919] rounded-xl p-4 relative overflow-hidden ${
                tier === userTier ? "border-l-4 border-[#1475E1]" : ""
              }`}
            >
              {/* Glow lateral apenas para o rank atual */}
              {tier === userTier && (
                <div className="absolute left-[-2vw] h-full w-[20vw] bg-[#1475E1] blur-3xl opacity-10 z-[-1]"></div>
              )}

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
                        src="/circle-check-1.png"
                        alt=""
                        className="absolute -top-2 -left-2 w-5 h-5"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">
                      {tier.charAt(0).toUpperCase() + tier.slice(1)}
                    </h3>
                    <p className="text-sm text-gray-400">
                      WAGER ${tierData[tier].wager}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-[#131313] p-4 rounded-xl border border-[#2a2a2a]">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">CLAIM</span>
                      <p className="font-bold text-white">
                        ${tierData[tier].prize}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleClick(tier)}
                    disabled={redeemedTiers.includes(tier)}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl ${
                      redeemedTiers.includes(tier)
                        ? "bg-gradient-to-l from-[#07478E] to-[#1475E1] cursor-not-allowed opacity-20"
                        : tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
                          (userTier === "PLATINUM V" && levelPercent === 100) ||
                          (levelPercent === 100 && tier === userTier)
                        ? "bg-gradient-to-l from-[#07478E] to-[#1475E1] text-white cursor-pointer hover:opacity-70 transition-opacity duration-300"
                        : "bg-gradient-to-l from-[#07478E] to-[#1475E1] cursor-not-allowed opacity-20"
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

export default ShuffleMobile;
