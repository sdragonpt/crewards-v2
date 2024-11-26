import React, { useEffect, useState } from "react";
import "../css/LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  const [opacity, setOpacity] = useState(1); // Controla a opacidade
  const [isMinTimeElapsed, setIsMinTimeElapsed] = useState(false); // Tempo mínimo
  const [isPageLoaded, setIsPageLoaded] = useState(false); // Página carregada

  useEffect(() => {
    // Define o tempo mínimo de exibição do loading (1 segundo)
    const timer = setTimeout(() => {
      setIsMinTimeElapsed(true);
    }, 1000);

    // Limpa o timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Captura o evento global de carregamento da página
    const handlePageLoad = () => {
      setIsPageLoaded(true); // Marca a página como carregada
    };

    // Adiciona o listener para o evento de carregamento completo
    if (document.readyState === "complete") {
      handlePageLoad(); // Página já está carregada
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  // Fade-out quando ambas as condições forem atendidas
  useEffect(() => {
    if (isMinTimeElapsed && isPageLoaded) {
      setOpacity(0); // Inicia a transição para desaparecer
    }
  }, [isMinTimeElapsed, isPageLoaded]);

  return (
    <div
      className="loading-screen z-50"
      style={{
        opacity,
        pointerEvents: opacity === 0 ? "none" : "auto", // Desativa interação após desaparecer
        transition: "opacity 0.5s ease", // Transição suave
      }}
    >
      <img
        className="footer-logo w-32 glow-effect-3"
        src="/logo.png"
        alt="Logo"
      />
    </div>
  );
};

export default LoadingScreen;
