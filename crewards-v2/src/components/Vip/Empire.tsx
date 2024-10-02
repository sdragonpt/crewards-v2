import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState, useRef } from "react";

// Definindo um tipo para os níveis
type Tier =
  | "rust"
  | "bronze"
  | "silver"
  | "gold"
  | "diamond"
  | "uranium"
  | "unbreakable";

const Empire: React.FC = () => {
  const [userTier] = useState<Tier>("rust");
  const levelPercent = 69;

  const tierData: Record<
    Tier,
    {
      color: string;
      image: string;
      text: string;
      info: string;
      next: Tier | null; // O próximo nível pode ser null
      nextText: string | null;
    }
  > = {
    rust: {
      color: "#9c8474",
      image: "/rank-rust.png",
      text: "is your current tier",
      info: "- Wagger 100$",
      next: "bronze",
      nextText: "Bronze tier",
    },
    bronze: {
      color: "#d5a06c",
      image: "/rank-bronze.png",
      text: "is your current tier",
      info: "- Wagger 100$",
      next: "silver",
      nextText: "Silver tier",
    },
    silver: {
      color: "#ced7e5",
      image: "/rank-silver.png",
      text: "is your current tier",
      info: "- Wagger 100$",
      next: "gold",
      nextText: "Gold tier",
    },
    gold: {
      color: "#ddbb56",
      image: "/rank-gold.png",
      text: "is your current tier",
      info: "- Wagger 100$",
      next: "diamond",
      nextText: "Diamond tier",
    },
    diamond: {
      color: "#7be4fc",
      image: "/rank-diamond.png",
      text: "is your current tier",
      info: "- Wagger 100$",
      next: "uranium",
      nextText: "Uranium tier",
    },
    uranium: {
      color: "#63f124",
      image: "/rank-uranium.png",
      text: "is your current tier",
      info: "- Wagger 100$",
      next: "unbreakable",
      nextText: "Unbreakable tier",
    },
    unbreakable: {
      color: "#fa4719",
      image: "/rank-unbreakable.png",
      text: "is your current tier",
      info: "- Wagger 100$",
      next: null,
      nextText: null,
    },
  };

  const currentTier = tierData[userTier];
  const nextTier = currentTier.next ? tierData[currentTier.next] : null;
  const glowClass = `glow-rank-${userTier}`;
  const glowClassNext = nextTier ? `glow-rank-${currentTier.next}` : "";
  const tierKeys = Object.keys(tierData) as Tier[];

  // Ref para a segunda view
  const secondViewRef = useRef<HTMLDivElement>(null);

  const handleScrollToView = () => {
    secondViewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      <div
        className="relative flex items-center justify-center min-h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url(/background.png)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#060606] to-transparent z-10 filter blur-lg" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <i className="absolute top-32 2xl:top-40 text-6xl 2xl:text-8xl font-bold font-thunder z-10 text-white">
          <i className="shadow-lg glow-effect-text-5">VIP </i>REWARDS
        </i>
        <div
          className="absolute z-0 bg-cover bg-center h-full w-full brightness-110"
          style={{
            backgroundImage: "url(/yellowglow.png)", // Imagem atrás do texto
          }}
        />

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="relative z-10 flex flex-wrap justify-center space-x-12"
        >
          <div
            className="relative bg-zinc-900 rounded-xl p-8 px-6 lg:px-48 2xl:px-56 2xl:py-20 z-10 text-center 2xl:mt-48"
            style={{
              height: "auto",
              overflow: "hidden",
              borderColor: currentTier.color,
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <div className="flex items-center justify-center mb-12">
              {" "}
              {/* Usando flex com items-center e justify-center */}
              <img
                src={currentTier.image}
                alt="dynamic"
                className={`w-16 h-16 mr-4 ${glowClass}`} // Mantendo margem à direita para espaçamento
              />
              <div className="text-left">
                {" "}
                {/* Alinhando o texto à esquerda */}
                <h2 className="text-white text-xl font-semibold">
                  <span>
                    {userTier.charAt(0).toUpperCase() + userTier.slice(1)}
                  </span>{" "}
                  <span className="font-normal">{currentTier.text}</span>
                </h2>
                <p className="text-gray-300 text-sm">
                  Your progress is an accumulated sum through your <br />
                  wager, increase through tiers to earn bigger rewards
                </p>
              </div>
            </div>

            {/* Barra de Carregamento com Porcentagem */}
            <div className="relative mb-4">
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
              <div className="2xl:w-[700px] w-full h-3 bg-gray-600 rounded-full relative">
                <div
                  className="h-full rounded-full progress-bar"
                  style={{
                    width: `${levelPercent}%`,
                    background: `linear-gradient(to right, ${
                      currentTier.color
                    }, ${nextTier ? nextTier.color : currentTier.color})`,
                  }}
                ></div>
              </div>

              <div className="flex justify-between mt-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={currentTier.image}
                    alt="start"
                    className={`w-6 h-6 ${glowClass}`}
                  />
                  <span className="text-gray-300 text-xs">
                    {userTier.charAt(0).toUpperCase() + userTier.slice(1)} tier
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {nextTier && (
                    <>
                      <img
                        src={nextTier.image} // Imagem do próximo nível
                        alt="end"
                        className={`w-6 h-6 ${glowClassNext}`}
                      />
                      <span className="text-gray-300 text-xs">
                        <span>{currentTier.nextText}</span>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handleScrollToView}
              className="bg-[#eab30d] text-white py-2 px-4 rounded-full hover:bg-[#f4dc84] transition"
            >
              Claim Rewards
            </button>
          </div>
        </motion.div>
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div
        ref={secondViewRef} // Ref para a segunda view
        className="min-h-[100vh] flex flex-col justify-center bg-[#111111] items-center lg:pt-10 2xl:pb-0 lg:my-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      >
        <div className="flex flex-wrap justify-center 2xl:w-[1400px]">
          {tierKeys.map((tier) => (
            <div
              key={tier}
              className="bg-zinc-900 rounded-lg p-4 mb-4 2xl:w-[580px] 2xl:h-[130px] flex flex-col justify-between m-2"
              style={{
                borderColor: tierData[tier].color,
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-start">
                <img
                  src={tierData[tier].image}
                  alt={tierData[tier].text}
                  className={`w-16 h-16 mr-6 ml-2 mt-4 glow-rank-${tier}`}
                />
                <div className="flex-1">
                  <h3 className="text-white font-normal">
                    {tier.charAt(0).toUpperCase() + tier.slice(1)}
                  </h3>
                  <p className="text-gray-300">{tierData[tier].info}</p>
                </div>
                {/* Renderiza "Your Tier" somente se o tier atual for igual ao userTier */}
                {tier === userTier && (
                  <div className="bg-zinc-700 text-zinc-400 rounded-full px-2 py-1 text-xs">
                    Your Tier
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empire;
