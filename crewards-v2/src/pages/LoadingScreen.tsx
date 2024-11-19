import React, { useEffect, useState } from "react";
import "../css/LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  const [opacity, setOpacity] = useState(1);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Função para contar os recursos carregados (imagens, etc.)
    const handleResourceLoad = () => {
      // Verifica se todos os recursos foram carregados
      const images = Array.from(document.getElementsByTagName("img"));
      const loadedImages = images.filter((img) => img.complete).length;

      // Se todos os recursos foram carregados, marca a página como carregada
      if (loadedImages === images.length) {
        setIsPageLoaded(true); // Página está completamente carregada
      }
    };

    // Seleciona todas as imagens da página e configura os eventos de carregamento
    const images = Array.from(document.getElementsByTagName("img"));
    images.forEach((img) => {
      if (img.complete) {
        handleResourceLoad();
      } else {
        img.onload = handleResourceLoad;
      }
    });
  }, []); // Esse efeito executa apenas uma vez quando o componente é montado

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
      style={{
        opacity,
        pointerEvents: isPageLoaded ? "none" : "auto", // Desabilita interação após o carregamento
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
