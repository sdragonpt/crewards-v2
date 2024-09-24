import React, { useEffect, useState } from "react";
import "../css/LoadingScreen.css";

const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isLoading) {
      // Aguarda 1 segundo para permitir que a transição de opacidade aconteça
      const timer = setTimeout(() => {
        setOpacity(0);
      }, 1000); // Tempo de transição da opacidade

      return () => clearTimeout(timer);
    } else {
      // Reseta a opacidade quando está carregando
      setOpacity(1);
    }
  }, [isLoading]);

  return (
    <div
      className="loading-screen"
      style={{ opacity, pointerEvents: isLoading ? 'auto' : 'none' }} // Impede a interação se estiver carregando
    >
      <img
        className="footer-logo w-32 glow-effect-3"
        src="logo.png"
        alt="Logo"
      />
    </div>
  );
};

export default LoadingScreen;
