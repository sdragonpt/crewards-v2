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
    navigator.clipboard.writeText("ClassyYT");

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
      <div className="w-[68%]">
        <div ref={h1Ref} className="flex items-center mt-[8vw]">
          <img
            src="/icons/gift-1.png"
            alt="Imagem do botão"
            className="md:w-[1.3vw] w-5 object-contain mr-2"
          />
          <span className="font-bold font-workSans text-base text-white md:text-[1.4vw]">
            Rewards
          </span>
        </div>

        <motion.div className="flex flex-wrap md:flex-nowrap justify-between mt-6">
          {/* Card 1 */}

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
            {/* NEW Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="font-workSans italic font-bold text-sm bg-gradient-to-r from-[#1475E1] from-60% to-slate-950 bg-clip-text text-transparent">
                NEW
              </span>
            </div>

            <img
              src="stake.png"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-32 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-2xl mb-2">
                5% RAKEBACK
              </p>

              <p className="font-semibold font-workSans text-sm text-[#B2B2B2]">
                REGISTER BY CLICKING ON THE REDEEM BUTTON
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white mb-3">
                <img
                  src="/blue.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  REGISTER USING MY CODE
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/blue.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  INSTANTLY CLAIM YOUR 5% RAKEBACK
                </span>
              </div>
              {/* Span vazio para igualar altura com card 2 */}
              <div className="flex text-white mb-3">
                <span className="w-5 h-5 mr-2"></span>
                <span className="font-semibold font-workSans text-sm opacity-0">
                  PLACEHOLDER TEXT
                </span>
              </div>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">ClassyYT</span>
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
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#07478E] to-[#1475E1] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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

          {/* Card 2 */}

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
            className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden ml-[2vw]"
          >
            {/* NEW Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="font-workSans italic font-bold text-sm bg-gradient-to-r from-[#00CA51] from-60% to-slate-950 bg-clip-text text-transparent">
                NEW
              </span>
            </div>

            <img
              src="stake.png"
              alt="Reward 2"
              className="rounded-t-lg 2xl:h-32 w-32 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-2xl mb-2">
                VIP REWARDS
              </p>

              <p className="font-semibold font-workSans text-sm text-[#B2B2B2]">
                REGISTER BY CLICKING ON THE REDEEM BUTTON
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white mb-3">
                <img
                  src="/green.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  REGISTER USING MY CODE
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/green.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  CONNECT YOUR STAKE ACCOUNT
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/green.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  ENJOY YOUR VIP REWARDS
                </span>
              </div>
            </div>

            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">ClassyYT</span>
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
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#007B31] to-[#00CA51] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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

          {/* Card 3 */}

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
            className="bg-gradient-to-t from-[#191919] to-[#0E0E0E] rounded-lg p-4 relative z-10 overflow-hidden ml-[2vw]"
          >
            {/* NEW Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="font-workSans italic font-bold text-sm bg-gradient-to-r from-[#FF843B] from-60% to-slate-950 bg-clip-text text-transparent">
                NEW
              </span>
            </div>

            <img
              src="stake.png"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-32 h-24 mx-auto object-contain"
            />
            <div className="text-white text-center mb-6">
              <p className="font-extrabold font-workSans text-2xl mb-2">
                $5k LEADERBOARD
              </p>

              <p className="font-semibold font-workSans text-sm text-[#B2B2B2]">
                REGISTER BY CLICKING ON THE REDEEM BUTTON
              </p>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="text-left mb-6">
              <p className="text-zinc-500 text-sm font-workSans font-semibold mb-4">
                COMPLETE THE FOLLOWING STEPS TO CLAIM THIS REWARD:
              </p>
              <div className="flex text-white mb-3">
                <img
                  src="/orange.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  REGISTER USING MY CODE
                </span>
              </div>
              <div className="flex text-white mb-3">
                <img
                  src="/orange.png"
                  alt="Imagem do botão"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-semibold font-workSans text-sm">
                  CLIMB THE LEADERBOARD AND WIN
                </span>
              </div>
              {/* Span vazio para igualar altura com card 2 */}
              <div className="flex text-white mb-3">
                <span className="w-5 h-5 mr-2"></span>
                <span className="font-semibold font-workSans text-sm opacity-0">
                  PLACEHOLDER TEXT
                </span>
              </div>
            </div>
            <hr className="border-[#3F3F3F] mb-6" />
            <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 mb-6 text-left text-white border-2 border-[#3F3F3F]">
              <span className="font-bold font-workSans ml-2">ClassyYT</span>
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
              className="flex justify-center items-center text-center w-full bg-gradient-to-l from-[#A64D18] to-[#FF843B] py-3 rounded-xl hover:opacity-70 transition-opacity duration-300"
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
        </motion.div>
      </div>
    </div>
  );
};

export default CardSection;
