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
      className="relative lg:min-h-screen custom-min-h flex flex-col items-center justify-center bg-[#1B1E22] 2xl:pb-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(/background.png)",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <p ref={h1Ref} className="text-center absolute top-[3vw] md:top-[7vw]">
        <h1 className="text-[11vw] md:text-[4vw] font-base text-white z-20 font-thunder">
          BONUSES
        </h1>
        <p className="text-[4vw] md:text-[1vw] font-base text-[#797979] mt-[-4vw] md:mt-[-1.6vw]">
          CLAIM & ENJOY INSTANTLY!
        </p>
      </p>
      <motion.div className="flex flex-wrap justify-center md:space-x-16 z-10 md:absolute mt-[12vw]">
        {/* Card 1 */}
        <div className="relative lg:w-72 2xl:w-[360px] mb-[-10px] md:scale-105 scale-90">
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
            className="bg-[#1F242A] rounded-md p-4 relative z-10"
          >
            <img
              src="clash.gif"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              CLASH.GG
            </p>
            <div className="bg-[#161C26] rounded-md border-b border-[#FFD627] p-4 lg:p-2 mb-4 text-center">
              <p className="text-zinc-500 mb-1 text-sm">MAIN</p>
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
            <div className="bg-[#161C26] rounded-md p-3 lg:p-2 mb-6 text-center">
              <p className="text-zinc-500 mb-1 2xl:text-sm text-sm">EXTRA</p>
              <span className="text-zinc-300 2xl:text-base text-xs">
                PLAY FOR FREE USING ON-SITE RAIN
              </span>
            </div>
            <a
              href="https://clash.gg/r/CLASSY"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 w-full bg-[#FFD627] text-[#924600] py-2 rounded-sm border-b-4 border-[#EF9C27] hover:opacity-70 text-center block glow-effect-yellow transition-opacity duration-300"
            >
              CLAIM BONUS
            </a>

            <p className="text-center text-sm text-neutral-300 mt-4">
              CODE CLASSY
            </p>
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="relative lg:w-72 2xl:w-[360px] mb-[-10px] md:mb-0 md:scale-105 scale-90">
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
            className="bg-[#1F242A] rounded-lg p-4 relative z-10"
          >
            <img
              src="shuffle.png"
              alt="Reward 2"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              SHUFFLE.COM
            </p>
            <div className="bg-[#161C26] rounded-md border-b border-[#762CFB] p-4 lg:p-2 mb-4 text-center">
              <p className="text-zinc-500 mb-1 text-sm">MAIN</p>
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
            <div className="bg-[#161C26] rounded-md p-3 lg:p-2 mb-6 text-center">
              <p className="text-zinc-500 mb-1 text-sm">EXTRA</p>
              <span className="text-zinc-300 text-base">
                WEEKLY $20K RAFFLE
              </span>
            </div>
            <a
              href="https://shuffle.com?r=Classy"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 w-full bg-[#762CFB] text-white py-2 rounded-sm border-b-4 border-[#621CE0] hover:opacity-70 text-center block glow-effect-purple transition-opacity duration-300"
            >
              CLAIM BONUS
            </a>
            <p className="text-center text-sm text-neutral-300 mt-4">
              CODE CLASSY
            </p>
          </motion.div>
        </div>

        {/* Card 3 */}
        <div className="relative lg:w-72 2xl:w-[360px] mb-10 md:mb-0 md:scale-105 scale-90">
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
            className="bg-[#1F242A] rounded-lg p-4 relative z-10"
          >
            <img
              src="csgoempire.png"
              alt="Reward 3"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              CSGOEMPIRE.COM
            </p>
            <div className="bg-[#161C26] rounded-md border-b border-[#FFC31A] p-4 mb-4 lg:p-2 text-center">
              <p className="text-zinc-500 mb-1 text-sm">MAIN</p>
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
                className="text-white text-lg"
              >
                1 FREE CASE
              </motion.span>
            </div>
            <div className="bg-[#161C26] rounded-md p-3 lg:p-2 mb-6 text-center">
              <p className="text-zinc-500 mb-1 text-sm">EXTRA</p>
              <span className="text-zinc-300">2K MONTHLY LEADERBOARD</span>
            </div>
            <a
              href="https://csgoempire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 w-full bg-[#FFC31A] text-[#1A1B28] py-2 rounded-sm border-b-4 border-[#E3A906] hover:opacity-70 text-center block glow-effect-yellow-2 transition-opacity duration-300"
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
