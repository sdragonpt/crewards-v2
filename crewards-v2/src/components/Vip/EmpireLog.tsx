import { useState, useRef, useEffect } from "react";
import RakebackModal from "../../pages/RakebackModal";

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
      wager: "- Wager 1000$",
      prize: "- Claim 10$",
      next: "bronze",
      nextText: "Bronze tier",
    },
    bronze: {
      color: "#d5a06c",
      image: "/2bronze.png",
      text: "is your current tier",
      wager: "- Wager 5000$",
      prize: "- Claim 40$",
      next: "silver",
      nextText: "Silver tier",
    },
    silver: {
      color: "#ced7e5",
      image: "/3silver.png",
      text: "is your current tier",
      wager: "- Wager 10000$",
      prize: "- Claim 60$",
      next: "gold",
      nextText: "Gold tier",
    },
    gold: {
      color: "#ddbb56",
      image: "/4gold.png",
      text: "is your current tier",
      wager: "- Wager 25000$",
      prize: "- Claim 190$",
      next: "platinum",
      nextText: "Platinum tier",
    },
    platinum: {
      color: "#9094b6",
      image: "/5platinum.png",
      text: "is your current tier",
      wager: "- Wager 50000$",
      prize: "- Claim 325$",
      next: "emerald",
      nextText: "Emerald tier",
    },
    emerald: {
      color: "#27fc2f",
      image: "/6emerald.png",
      text: "is your current tier",
      wager: "- Wager 75000$",
      prize: "- Claim 340$",
      next: "sapphire",
      nextText: "Sapphire tier",
    },
    sapphire: {
      color: "#2b40fc",
      image: "/7sapphire1.png",
      text: "is your current tier",
      wager: "- Wager 100000$",
      prize: "- Claim 350$",
      next: "ruby",
      nextText: "Ruby tier",
    },
    ruby: {
      color: "#ee3829",
      image: "/8ruby.png",
      text: "is your current tier",
      wager: "- Wager 250000$",
      prize: "- Claim 2250$",
      next: "diamond",
      nextText: "Diamond tier",
    },
    diamond: {
      color: "#13cffb",
      image: "/9diamond.png",
      text: "is your current tier",
      wager: "- Wager 500000$",
      prize: "- Claim 4000$",
      next: "mythic",
      nextText: "Mythic tier",
    },
    mythic: {
      color: "#a023d9",
      image: "/10mythic.png",
      text: "is your current tier",
      wager: "- Wager 1000000$",
      prize: "- Claim 8500$",
      next: "sapphire",
      nextText: "Sapphire tier",
    },
    darkmatter: {
      color: "#640464",
      image: "/11darkmatter.png",
      text: "is your current tier",
      wager: "- Wager 2500000$",
      prize: "- Claim 27000$",
      next: null,
      nextText: null,
    },
  };

  const currentTier = tierData[userTier];
  const nextTier = currentTier.next ? tierData[currentTier.next] : null;
  const glowClass = `glow-rank-${userTier}`;
  const glowClassNext = nextTier ? `glow-rank-${currentTier.next}` : "";
  const tierKeys = Object.keys(tierData) as Tier[];
  const [isModalOpen, setModalOpen] = useState(false);

  // Ref para a segunda view
  const secondViewRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false); // Fechar o modal
  };

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

  const [isHovered, setIsHovered] = useState(false);

  const containerClasses = "absolute inset-0 bg-cover bg-center";

  return (
    <div className="relative items-center justify-center min-h-screen bg-cover bg-center bg-[#0E0E0E]">
      {/* Primeira View */}
      <div className="relative flex items-center justify-center lg:min-h-[100vh] custom-min-h bg-cover bg-center">
        <div className={`${containerClasses} brightness-125 background-0`} />
        <div className={`${containerClasses} brightness-90 glows-1`} />
        <p className="items-end absolute top-[32vw] md:top-[7.5vw] text-[11vw] md:text-[3vw] font-extrabold z-10 text-white">
          <span className="text-[3.5vw]">VIP</span>
        </p>

        <div className="w-[68%] bg-[#191919] rounded-lg p-6 z-10 mt-[3vw]">
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
            className="bg-[#eab30d] text-white py-2 px-4 rounded-full 
             hover:bg-[#f4dc84] 
             transition duration-300 ease-in-out 
             hover:opacity-90 hover:scale-105"
          >
            Claim Rewards
          </button>
        </div>
      </div>

      {/* Segunda View */}
      <div
        ref={secondViewRef} // Ref para a segunda view
        className="min-h-[100vh] flex flex-col justify-center bg-[#111111] items-center lg:pt-28 2xl:pb-0 lg:my-0"
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

              {/* Rakeback Button */}
              {tier === userTier && (
                <div
                  className={`absolute -top-4 right-1 text-white px-4 py-[0.15rem] rounded-full transition 
                            ${isHovered ? "scale-105" : ""}`} // Adiciona a classe scale-105 ao hover
                  style={{
                    borderColor: "#4CAF50",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    zIndex: 10, // Certifica que o badge fica sobre o card
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Sombra para o badge
                    backgroundColor: isHovered ? "#45a049" : "#4CAF50", // Cor verde mais escura ao fazer hover
                    transition:
                      "background-color 0.3s ease, transform 0.3s ease", // Adiciona transição suave para a cor e transformação
                    animation: isHovered
                      ? "none"
                      : "pulse 2s infinite alternate", // Pausa a animação ao fazer hover
                  }}
                  onMouseEnter={() => setIsHovered(true)} // Atualiza o estado para true ao passar o mouse
                  onMouseLeave={() => setIsHovered(false)} // Atualiza o estado para false ao retirar o mouse
                >
                  <button
                    onClick={handleOpenModal} // Abrindo o modal ao clicar no botão
                  >
                    Instant Rakeback
                  </button>
                </div>
              )}

              <RakebackModal
                isOpen={isModalOpen}
                onClose={handleClose}
                totalReward={100}
              />

              <div className="flex items-start">
                <img
                  src={tierData[tier].image}
                  alt={tierData[tier].text}
                  className={`w-16 h-16 mr-6 ml-2 mt-4 mb-4 md:mb-2 glow-rank-${tier}`}
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
        (userTier === "darkmatter" && levelPercent === 100) ||
        (levelPercent === 100 && tier === userTier) // Adiciona esta linha
          ? "bg-[#eab30d] text-white hover:bg-[#f4dc84] cursor-pointer"
          : "bg-gray-500 text-gray-300 cursor-not-allowed"
      } 
      transition duration-300 ease-in-out 
      hover:opacity-90 hover:scale-105`}
                  disabled={
                    !(
                      (
                        tier === userTier ||
                        tierKeys.indexOf(tier) < tierKeys.indexOf(userTier) ||
                        (userTier === "darkmatter" && levelPercent === 100) ||
                        (levelPercent === 100 && tier === userTier)
                      ) // Adiciona esta linha
                    ) // Desativa se não for o tier do usuário, anterior ou se for unbreakable com 100%
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

export default Empire;
function setWindowWidth(_innerWidth: number) {
  throw new Error("Function not implemented.");
}