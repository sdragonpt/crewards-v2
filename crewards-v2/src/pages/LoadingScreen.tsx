import React, { useEffect, useState } from "react";
import "../css/LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  const [opacity, setOpacity] = useState(1);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Evento para verificar quando a página estiver completamente carregada
    const handlePageLoad = () => {
      setIsPageLoaded(true); // Define que a página foi carregada
    };

    // Adiciona o ouvinte para o evento de load da janela
    window.addEventListener("load", handlePageLoad);

    return () => {
      // Remove o ouvinte ao desmontar o componente
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (isPageLoaded) {
      // Aguarda 1 segundo para garantir o tempo mínimo de exibição
      const timer = setTimeout(() => {
        setOpacity(0); // Inicia a transição para opacidade 0 após 1 segundo
      }, 1000); // 1 segundo

      // Limpa o timer ao desmontar ou alterar o estado
      return () => clearTimeout(timer);
    }
  }, [isPageLoaded]); // Executa quando a página estiver carregada

  return (
    <div
      className="loading-screen z-50"
      style={{ opacity, pointerEvents: isPageLoaded ? "none" : "auto" }} // Desabilita interação após o carregamento
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
