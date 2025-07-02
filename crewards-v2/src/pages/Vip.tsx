import { useState, useEffect } from "react";
import Shuffle from "../components/Vip/Shuffle";
import ShuffleMobile from "../components/Vip/ShuffleMobile";

function Vip() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  // Componente baseado no tamanho da tela
  const StakeComponent = isMobile ? ShuffleMobile : Shuffle;

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Título VIP Rewards */}
      <div className="absolute top-[52vw] md:top-[12.4vw] left-1/2 transform -translate-x-1/2 z-20">
        <h2 className="font-workSans font-medium text-[#B2B2B2] text-center md:text-2xl text-lg">
          OVER $42,500 MONTHLY IN VIP REWARDS
        </h2>
      </div>

      {/* Renderiza o componente Stake (responsivo) */}
      <StakeComponent />
    </div>
  );
}

export default Vip;
