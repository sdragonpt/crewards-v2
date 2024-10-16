import { motion } from "framer-motion";
import { fadeIn } from "../../variants.ts";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const CardSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se a tela é pequena
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Exemplo de limite para mobile
    };

    handleResize(); // Checar no início
    window.addEventListener("resize", handleResize); // Adicionar listener para resize

    return () => {
      window.removeEventListener("resize", handleResize); // Limpar o listener ao desmontar
    };
  }, []);

  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Iniciar animação quando o h1 estiver 10% visível
  });

  const { ref: ref, inView: inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Iniciar animação dos cards quando 30% do card estiver visível
  });

  return (
    <div
      id="rewards"
      className="relative lg:min-h-screen custom-min-h flex flex-col items-center justify-center bg-[#171414] 2xl:pb-28"
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <h1
        ref={h1Ref}
        className="text-6xl 3xl:mt-24 lg:mt-32 font-bold lg:mb-0 xl:mb-8 mb-2 text-white z-20 font-thunder"
      >
        Rewards
      </h1>
      <motion.div className="flex flex-wrap items-center justify-center lg:space-x-8 z-10">
        {/* Card 1 */}
        <div className="relative lg:w-72 2xl:w-[360px] mb-[-10px] md:mb-03 3xl:scale-100 scale-90">
          <div className="absolute inset-0 opacity-60 rounded-lg blur-[0px]" />
          <motion.div
            ref={ref}
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate={
              isMobile
                ? h1InView
                  ? "show"
                  : "hidden"
                : inView
                ? "show"
                : "hidden"
            }
            transition={{ duration: 0.8 }}
            className="bg-[#2a2a2a] rounded-lg p-4 relative z-10 border-b-[#FFD627] border-b-2"
          >
            <img
              src="clash.gif"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              CLASH.GG
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#FFD627] p-4 lg:p-2 mb-4 text-center">
              <p className="text-zinc-500 mb-1 text-sm">MAIN BONUS</p>
              <motion.span
                ref={ref}
                variants={fadeIn("up", 1)}
                initial="hidden"
                animate={
                  isMobile
                    ? h1InView
                      ? "show"
                      : "hidden"
                    : inView
                    ? "show"
                    : "hidden"
                }
                transition={{ duration: 1 }}
                className="text-white text-lg"
              >
                5% DEPOSIT BONUS
              </motion.span>
            </div>
            <div className="bg-[#171414] rounded-lg p-3 lg:p-2 mb-6 text-center">
              <p className="text-zinc-500 mb-1 2xl:text-sm text-sm">EXTRA</p>
              <span className="text-zinc-300 2xl:text-base text-xs">
                PLAY FOR FREE USING ON-SITE RAIN
              </span>
            </div>
            <a
              href="https://clash.gg/r/CLASSY"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 w-full bg-[#FFD627] text-[#924600] py-2 rounded-lg border-b-4 border-[#EF9C27] hover:opacity-70 text-center block glow-effect-yellow"
            >
              CLAIM BONUS
            </a>
            <p className="text-center text-sm text-neutral-300 mt-4">
              CODE CLASSY
            </p>
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="relative lg:w-72 2xl:w-[360px] mb-[-10px] md:mb-0 3xl:scale-100 scale-90">
          <div className="absolute inset-0 opacity-60 rounded-lg" />
          <motion.div
            ref={ref}
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            animate={
              isMobile
                ? h1InView
                  ? "show"
                  : "hidden"
                : inView
                ? "show"
                : "hidden"
            }
            transition={{ duration: 1.2 }}
            className="bg-[#2a2a2a] rounded-lg p-4 relative z-10 border-b-[#762CFB] border-b-2"
          >
            <img
              src="shuffle.png"
              alt="Reward 2"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              SHUFFLE.COM
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#762CFB] p-4 lg:p-2 mb-4 text-center">
              <p className="text-zinc-500 mb-1 text-sm">MAIN BONUS</p>
              <motion.span
                ref={ref}
                variants={fadeIn("up", 1.4)}
                initial="hidden"
                animate={
                  isMobile
                    ? h1InView
                      ? "show"
                      : "hidden"
                    : inView
                    ? "show"
                    : "hidden"
                }
                transition={{ duration: 1.4 }}
                className="text-white text-lg"
              >
                REDEEM BONUSES
              </motion.span>
            </div>
            <div className="bg-[#171414] rounded-lg p-3 lg:p-2 mb-6 text-center">
              <p className="text-zinc-500 mb-1 text-sm">EXTRA</p>
              <span className="text-zinc-300 text-base">
                WEEKLY $20K RAFFLE
              </span>
            </div>
            <a
              href="https://shuffle.com?r=Classy"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 w-full bg-[#762CFB] text-white py-2 rounded-lg border-b-4 border-[#621CE0] hover:opacity-70 text-center block glow-effect-purple"
            >
              CLAIM BONUS
            </a>
            <p className="text-center text-sm text-neutral-300 mt-4">
              CODE CLASSY
            </p>
          </motion.div>
        </div>

        {/* Card 3 */}
        <div className="relative lg:w-72 2xl:w-[360px] mb-10 md:mb-0 3xl:scale-100 scale-90">
          <div className="absolute inset-0 opacity-60 rounded-lg" />
          <motion.div
            ref={ref}
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            animate={
              isMobile
                ? h1InView
                  ? "show"
                  : "hidden"
                : inView
                ? "show"
                : "hidden"
            }
            transition={{ duration: 1.6 }}
            className="bg-[#2a2a2a] rounded-lg p-4 relative z-10 border-b-[#FFC31A] border-b-2"
          >
            <img
              src="csgoempire.png"
              alt="Reward 3"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              CSGOEMPIRE.COM
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#FFC31A] p-4 mb-4 lg:p-2 text-center">
              <p className="text-zinc-500 mb-1 text-sm">MAIN BONUS</p>
              <motion.span
                ref={ref}
                variants={fadeIn("up", 1.8)}
                initial="hidden"
                animate={
                  isMobile
                    ? h1InView
                      ? "show"
                      : "hidden"
                    : inView
                    ? "show"
                    : "hidden"
                }
                transition={{ duration: 1.8 }}
                className="text-white"
              >
                1 FREE CASE
              </motion.span>
            </div>
            <div className="bg-[#171414] rounded-lg p-3 lg:p-2 mb-6 text-center">
              <p className="text-zinc-500 mb-1 text-sm">EXTRA</p>
              <span className="text-zinc-300">2K MONTHLY LEADERBOARD</span>
            </div>
            <a
              href="https://csgoempire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 w-full bg-[#FFC31A] text-[#1A1B28] py-2 rounded-lg border-b-4 border-[#E3A906] hover:opacity-70 text-center block glow-effect-yellow-2"
            >
              CLAIM BONUS
            </a>
            <p className="text-center text-sm text-neutral-300 mt-4">
              CODE CLASSY
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSection;
