import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState, useRef, useEffect } from "react";

// Definindo um tipo para os níveis
type Tier =
  | "wood"
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "jade"
  | "sapphire"
  | "ruby"
  | "diamond";

const Shuffle: React.FC = () => {
  const [userTier] = useState<Tier>("wood");
  const levelPercent: number = 0;

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
    wood: {
      color: "#d88667",
      image: "/wood.svg",
      text: "is your current tier",
      wager: "- Wager 1000$",
      prize: "- Claim 10$",
      next: "bronze",
      nextText: "Bronze tier",
    },
    bronze: {
      color: "#f4d4b4",
      image: "/bronze.svg",
      text: "is your current tier",
      wager: "- Wager 5000$",
      prize: "- Claim 40$",
      next: "silver",
      nextText: "Silver tier",
    },
    silver: {
      color: "#b4bcc4",
      image: "/silver.svg",
      text: "is your current tier",
      wager: "- Wager 10000$",
      prize: "- Claim 60$",
      next: "gold",
      nextText: "Gold tier",
    },
    gold: {
      color: "#f0d77f",
      image: "/gold.svg",
      text: "is your current tier",
      wager: "- Wager 25000$",
      prize: "- Claim 190$",
      next: "platinum",
      nextText: "Platinum tier",
    },
    platinum: {
      color: "#acb4db",
      image: "/platinum.svg",
      text: "is your current tier",
      wager: "- Wager 50000$",
      prize: "- Claim 325$",
      next: "jade",
      nextText: "Jade tier",
    },
    jade: {
      color: "#59f658",
      image: "/jade.svg",
      text: "is your current tier",
      wager: "- Wager 75000$",
      prize: "- Claim 340$",
      next: "sapphire",
      nextText: "Sapphire tier",
    },
    sapphire: {
      color: "#748bfc",
      image: "/sapphire.svg",
      text: "is your current tier",
      wager: "- Wager 100000$",
      prize: "- Claim 350$",
      next: "ruby",
      nextText: "Ruby tier",
    },
    ruby: {
      color: "#fc4149",
      image: "/ruby.svg",
      text: "is your current tier",
      wager: "- Wager 250000$",
      prize: "- Claim 2250$",
      next: "diamond",
      nextText: "Diamond tier",
    },
    diamond: {
      color: "#56d5fc",
      image: "/diamond.svg",
      text: "is your current tier",
      wager: "- Wager 500000$",
      prize: "- Claim 4000$",
      next: null,
      nextText: null,
    },
  };

  const currentTier = tierData[userTier];
  const nextTier = currentTier.next ? tierData[currentTier.next] : null;
  const glowClass = `glow-${userTier}`;
  const glowClassNext = nextTier ? `glow-${currentTier.next}` : "";
  const tierKeys = Object.keys(tierData) as Tier[];

  // Ref para a segunda view
  const secondViewRef = useRef<HTMLDivElement>(null);

  const handleScrollToView = () => {
    const offset = 120; // Aumenta a quantidade para rolar para cima

    if (secondViewRef.current) {
      // Verifica se a referência está disponível
      const elementPosition = secondViewRef.current.getBoundingClientRect().top; // Posição do elemento
      const offsetPosition = elementPosition + window.scrollY - offset; // Posição final com deslocamento

      if (window.innerWidth < 1024) {
        // Para dispositivos móveis
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // Rolagem suave
        });
      } else {
        // Para telas maiores
        secondViewRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.warn("Elemento de referência não está disponível."); // Opcional: log para debugging
    }
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

  const containerClasses =
    "relative flex items-center justify-center min-h-[100vh] bg-cover bg-center";

  return (
    <div className="relative bg-cover bg-center bg-[#1B1E22] overflow-hidden">
      <div
        className={`${containerClasses} brightness-125 background-0`}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#060606] to-transparent z-10 filter blur-lg" />
        <a className="absolute top-[30vw] md:top-[6vw] text-[16vw] md:text-[6vw] font-bold font-thunder z-10 text-white">
          <a className="shadow-lg glow-effect-text-7">VIP </a>REWARDS
        </a>
        <div
          className="absolute z-0 bg-cover bg-center h-full w-full brightness-110"
          style={{
            backgroundImage: "url(/purpleglow4.png)", // Imagem atrás do texto
          }}
        />

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className={`relative z-10 flex flex-wrap justify-center space-x-12 mx-2 ${
            window.innerWidth < 390 ? "mt-60" : ""
          }`}
        >
          <div
            className="custom-mt custom-p relative bg-zinc-900 rounded-xl p-8 px-6 lg:px-52 2xl:px-56 2xl:py-12 z-10 text-center 3xl:mt-52 lg:mt-36"
            style={{
              height: "auto",
              overflow: "hidden",
              borderColor: currentTier.color,
              borderWidth: "2px",
              borderStyle: "solid",
              boxShadow: "inset 10px 10px 20px rgba(0, 0, 0, 0.5)", // Adiciona uma sombra interna
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
              <div className="2xl:w-[700px] lg:w-[500px] w-full h-3 bg-gray-600 rounded-full relative">
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
              className="bg-[#8337d8] text-white py-2 px-4 rounded-full 
    hover:bg-[#582c8c] 
    transition duration-300 ease-in-out 
    hover:opacity-90 hover:scale-105"
            >
              Claim Rewards
            </button>
          </div>
        </motion.div>
      </div>

      {/* Segunda View - Detalhes dos Jogadores */}
      <div
        ref={secondViewRef} // Ref para a segunda view
        className="z-30 min-h-[100vh] flex flex-col justify-center bg-[#111111] items-center lg:pt-28 lg:pb-10 2xl:pb-0 lg:my-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      >
        <div className="z-20 flex flex-wrap justify-center 2xl:w-[1400px] lg:w-[1000px]">
          {tierKeys.map((tier) => (
            <div
              key={tier}
              className="relative bg-zinc-900 rounded-lg p-4 mb-4 w-full 2xl:w-[580px] 2xl:h-[130px] lg:w-[460px] flex flex-col justify-between m-2"
              style={{
                borderColor: tierData[tier].color,
                borderWidth: "2px",
                borderStyle: "solid",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.5)", // Adiciona uma sombra interna
              }}
            >
              {/* Badge */}
              {tier === userTier && (
                <div
                  className="absolute -top-4 left-1 bg-zinc-900 text-white px-4 py-[0.15rem] rounded-full"
                  style={{
                    borderColor: tierData[tier].color,
                    borderWidth: "2px",
                    borderStyle: "solid",
                    zIndex: 10, // Certifica que o badge fica sobre o card
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Sombra para o badge
                  }}
                >
                  Your Tier
                </div>
              )}

              <div className="flex items-start">
                <img
                  src={tierData[tier].image}
                  alt={tierData[tier].text}
                  className={`w-16 h-16 mr-6 ml-2 mt-4 mb-4 md:mb-0 glow-${tier}`}
                />
                <div className="flex-1 mt-2">
                  <h3 className="text-white font-normal">
                    {tier.charAt(0).toUpperCase() + tier.slice(1)}
                  </h3>
                  <p className="text-gray-300">{tierData[tier].wager}</p>
                  <p className="text-gray-300">{tierData[tier].prize}</p>
                </div>
              </div>
              {/* Botão "Claim" */}
              <div className="flex justify-end lg:mt-6 lg:mr-6 2xl:mt-8 2xl:mr-10 flex-col lg:flex-row">
                <button
                  className={`py-2 px-4 rounded-full text-sm 
      ${
        tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
        (userTier === "diamond" && levelPercent === 100) ||
        (levelPercent === 100 && tier === userTier) // Verifica se o usuário está no tier atual ou anterior, ou se tem 100%
          ? "bg-[#8337d8] text-white hover:bg-[#582c8c] cursor-pointer" // Botão ativo
          : "bg-gray-500 text-gray-300 cursor-not-allowed" // Botão desativado
      } 
      transition duration-300 ease-in-out 
      hover:opacity-90 hover:scale-105`}
                  disabled={
                    !(
                      (
                        tier === userTier ||
                        tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
                        (userTier === "diamond" && levelPercent === 100) ||
                        (levelPercent === 100 && tier === userTier)
                      ) // Adiciona condição de 100%
                    ) // Desativa se não for o tier do usuário, anterior, ou se for diamond com 100%
                  }
                >
                  Claim
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
