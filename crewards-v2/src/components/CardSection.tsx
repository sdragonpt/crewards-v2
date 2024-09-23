import React from "react";

const CardSection: React.FC = () => {
  return (
    <div id="rewards" className="relative min-h-screen flex flex-col items-center justify-center bg-[#171414]">
      <div className="absolute inset-0 bg-black opacity-70" />
      <h1 className="text-5xl font-bold mb-12 text-white z-20">REWARDS</h1>
      <div className="flex items-center justify-center space-x-8 z-10">
        {/* Card 1 */}
        <div className="relative lg:w-72 2xl:w-[360px]">
          <div className="absolute inset-0 bg-[#FFD627] opacity-60 rounded-lg blur-[100px]" />
          <div className="bg-[#2a2a2a] rounded-lg p-4 relative z-10">
            <img
              src="clash.png"
              alt="Reward 1"
              className="rounded-t-lg w-full h-28 2xl:h-32 object-cover"
            />
            <p className="text-center text-sm text-neutral-300 mb-6 font-semibold">
              CLASH.GG
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#FFD627] p-4 mb-4 text-center font-semibold">
              <span className="text-white">5% Deposit Bonus</span>
            </div>
            <div className="bg-[#171414] rounded-lg p-6 mb-6 text-center">
              <span className="text-white"></span>
            </div>
            <button className="w-full bg-[#FFD627] text-[#924600] py-2 rounded-lg border-b-4 border-[#EF9C27] font-bold hover:opacity-70">
              Button Text 1
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative lg:w-72 2xl:w-[360px]">
          <div className="absolute inset-0 bg-[#762CFB] opacity-60 rounded-lg blur-[100px]" />
          <div className="bg-[#2a2a2a] rounded-lg p-4 relative z-10">
            <img
              src="shuffle.png"
              alt="Reward 2"
              className="rounded-t-lg w-full h-28 2xl:h-32 object-cover"
            />
            <p className="text-center text-sm text-neutral-300 mb-6 font-semibold">
              SHUFFLE.COM
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#762CFB] p-4 mb-4 text-center font-semibold">
              <span className="text-white">5% Deposit Bonus</span>
            </div>
            <div className="bg-[#171414] rounded-lg p-6 mb-6 text-center">
              <span className="text-white"></span>
            </div>
            <button className="w-full bg-[#762CFB] text-white py-2 rounded-lg border-b-4 border-[#621CE0] font-bold hover:opacity-70">
              Button Text 2
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative lg:w-72 2xl:w-[360px]">
          <div className="absolute inset-0 bg-[#FFC31A] opacity-60 rounded-lg blur-[100px]" />
          <div className="bg-[#2a2a2a] rounded-lg p-4 relative z-10">
            <img
              src="csgoempire.png"
              alt="Reward 3"
              className="rounded-t-lg w-full h-28 2xl:h-32 object-cover"
            />
            <p className="text-center text-sm text-neutral-300 mb-6 font-semibold">
              CSGOEMPIRE.COM
            </p>
            <div className="bg-[#171414] rounded-lg border-b border-[#FFC31A] p-4 mb-4 text-center font-semibold">
              <span className="text-white">5% Deposit Bonus</span>
            </div>
            <div className="bg-[#171414] rounded-lg p-6 mb-6 text-center">
              <span className="text-white"></span>
            </div>
            <button className="w-full bg-[#FFC31A] text-[#1A1B28] py-2 rounded-lg border-b-4 border-[#E3A906] font-bold hover:opacity-70">
              Button Text 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
