import { motion } from "framer-motion";
import { fadeIn } from "../../variants.ts";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const CardSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (location.hash === "#rewards") {
      const element = document.getElementById("rewards");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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

  return (
    <div
      id="rewards"
      className="relative lg:min-h-screen custom-min-h flex flex-col items-center justify-center bg-[#0E0E0E] 2xl:pb-28 font-workSans"
    >
      <span
        ref={h1Ref}
        className="flex text-left items-center absolute top-[3vw] md:top-[7vw] left-[6%] md:left-[12%] font-workSans"
      >
        <img
          src="/icons/gift-1-1.png"
          alt="Imagem do botão"
          className="w-8 h-8 object-contain mr-2"
        />
        <p className="text-[8vw] md:text-[2vw] font-workSans text-white z-20 font-bold">
          Rewards
        </p>
      </span>

      <motion.div className="flex flex-wrap justify-center md:space-x-2 3xl:space-x-16 z-10 md:absolute mt-[12vw] 2xl:mt-64 md:mt-40">
        {/* Card 1 */}
        <div className="relative lg:w-96 2xl:w-[420px] mb-[-10px] 3xl:scale-105 scale-90 md:mt-0 mt-[10vw]">
          <motion.div
            ref={ref}
            variants={fadeIn("up", 0.4)}
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
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden"
          >
            <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 h-20 w-full bg-[#FFD627] blur-lg opacity-20 rounded-xl z-[-1]"></div>
            <img
              src="clash.gif"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-xl mb-2">
                5% DEPOSIT BONUS
              </p>

              <p className="font-semibold font-workSans text-xs text-[#B2B2B2]">
                PLAY FOR FREE USING ON-SITE RAIN
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white">
                <img
                  src="/circle-check.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  DEPOSIT BETWEEN $100 & $1,000
                </span>
              </div>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">CLASSY</span>
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
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#95720E] to-[#E9B10E] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="relative lg:w-96 2xl:w-[420px] mb-[-10px] md:mb-0 3xl:scale-105 scale-90 md:mt-0 mt-[10vw]">
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
            className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden"
          >
            <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 h-20 w-full bg-[#762CFB] blur-lg opacity-20 rounded-xl z-[-1]"></div>
            <img
              src="shuffle.png"
              alt="Reward 2"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-xl mb-2">
                REDEEM BONUSES
              </p>

              <p className="font-semibold font-workSans text-xs text-[#B2B2B2]">
                AND JOIN THEIR WEEKLY $20K RAFFLE
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white">
                <img
                  src="/circle-check-1.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  DEPOSIT BETWEEN $100 & $1,000
                </span>
              </div>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">CLASSY</span>
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
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#4C30C0] to-[#886CFF] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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
          </motion.div>
        </div>

        {/* Card 3 */}
        <div className="relative lg:w-96 2xl:w-[420px] mb-10 md:mb-0 3xl:scale-105 scale-90 md:mt-0 mt-[10vw]">
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
            className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden"
          >
            <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 h-20 w-full bg-[#FFC31A] blur-lg opacity-20 rounded-xl z-[-1]"></div>
            <img
              src="csgoempire.png"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-xl mb-2">
                1 FREE CASE
              </p>

              <p className="font-semibold font-workSans text-xs text-[#B2B2B2]">
                AND 2K MONTHLY LEADERBOARD
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white">
                <img
                  src="/circle-check-2.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  DEPOSIT BETWEEN $100 & $1,000
                </span>
              </div>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">CLASSY</span>
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
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#9C6E0A] to-[#F6AF16] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSection;
