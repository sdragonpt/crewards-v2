import React, { useEffect, useState } from "react";
import "../css/LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  const [opacity, setOpacity] = useState(1);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loadedResources, setLoadedResources] = useState(0);
  const [totalResources, setTotalResources] = useState(0);

  useEffect(() => {
    // Função para contar os recursos carregados (imagens, etc.)
    const handleResourceLoad = () => {
      setLoadedResources((prev) => prev + 1);
    };

    // Seleciona todas as imagens da página
    const images = Array.from(document.getElementsByTagName("img"));

    // Conta o número total de imagens e outros recursos
    setTotalResources(images.length);

    // A cada imagem carregada, chama a função handleResourceLoad
    images.forEach((img) => {
      if (img.complete) {
        // Se a imagem já está carregada, imediatamente chama o handler
        handleResourceLoad();
      } else {
        // Caso contrário, aguarda o evento onLoad da imagem
        img.onload = handleResourceLoad;
      }
    });

    // Verifica quando todos os recursos foram carregados
    if (loadedResources === totalResources) {
      setIsPageLoaded(true); // Página está completamente carregada
    }
  }, [loadedResources, totalResources]);

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
