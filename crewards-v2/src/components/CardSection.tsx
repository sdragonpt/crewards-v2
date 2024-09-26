import { motion } from "framer-motion";
import { fadeIn } from "../variants.ts";
import { useInView } from "react-intersection-observer";

const CardSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.3, // How much is visible to do the animation (30% now)
  });

  return (
    <div
      id="rewards"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#171414]"
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <h1 className="text-6xl xl:mt-8 lg:mt-8 font-bold mb-12 text-white z-20 font-thunder">
        Rewards
      </h1>
      <motion.div className="flex items-center justify-center space-x-8 z-10">
        {/* Card 1 */}
        <div className="relative lg:w-72 2xl:w-[360px]">
          <div className="absolute inset-0 bg-[#FFD627] opacity-60 rounded-lg blur-[80px]" />
          <motion.div
            ref={ref}
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.6 }}
            className="bg-[#2a2a2a] rounded-lg p-4 relative z-10"
          >
            <img
              src="clash.gif"
              alt="Reward 1"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              CLASH.GG
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#FFD627] p-4 mb-4 text-center">
              <motion.span
                ref={ref}
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                5% Deposit Bonus
              </motion.span>
            </div>
            <div className="bg-[#171414] rounded-lg p-6 mb-6 text-center">
              <span className="text-white"></span>
            </div>
            <button className="w-full bg-[#FFD627] text-[#924600] py-2 rounded-lg border-b-4 border-[#EF9C27] hover:opacity-70">
              Button Text 1
            </button>
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="relative lg:w-72 2xl:w-[360px]">
          <div className="absolute inset-0 bg-[#762CFB] opacity-60 rounded-lg blur-[80px]" />
          <motion.div
            ref={ref}
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.8 }}
            className="bg-[#2a2a2a] rounded-lg p-4 relative z-10"
          >
            <img
              src="shuffle.png"
              alt="Reward 2"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              SHUFFLE.COM
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#762CFB] p-4 mb-4 text-center">
              <motion.span
                ref={ref}
                variants={fadeIn("up", 1)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 1 }}
                className="text-white"
              >
                5% Deposit Bonus
              </motion.span>
            </div>
            <div className="bg-[#171414] rounded-lg p-6 mb-6 text-center">
              <span className="text-white"></span>
            </div>
            <button className="w-full bg-[#762CFB] text-white py-2 rounded-lg border-b-4 border-[#621CE0] hover:opacity-70">
              Button Text 2
            </button>
          </motion.div>
        </div>

        {/* Card 3 */}
        <div className="relative lg:w-72 2xl:w-[360px]">
          <div className="absolute inset-0 bg-[#FFC31A] opacity-60 rounded-lg blur-[80px]" />
          <motion.div
            ref={ref}
            variants={fadeIn("up", 1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 1 }}
            className="bg-[#2a2a2a] rounded-lg p-4 relative z-10"
          >
            <img
              src="csgoempire.png"
              alt="Reward 3"
              className="rounded-t-lg 2xl:h-32 w-72 h-24 mx-auto object-contain"
            />
            <p className="text-center text-sm text-neutral-300 mb-6">
              CSGOEMPIRE.COM
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#FFC31A] p-4 mb-4 text-center">
              <motion.span
                ref={ref}
                variants={fadeIn("up", 1.2)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 1.2 }}
                className="text-white"
              >
                5% Deposit Bonus
              </motion.span>
            </div>
            <div className="bg-[#171414] rounded-lg p-6 mb-6 text-center">
              <span className="text-white"></span>
            </div>
            <button className="w-full bg-[#FFC31A] text-[#1A1B28] py-2 rounded-lg border-b-4 border-[#E3A906] hover:opacity-70">
              Button Text 3
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSection;
