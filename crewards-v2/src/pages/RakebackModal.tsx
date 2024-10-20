import React, { useEffect, useState } from "react";

interface RakebackModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalReward: number;
}

const RakebackModal: React.FC<RakebackModalProps> = ({
  isOpen,
  onClose,
  totalReward = 0,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reinicia o estado de fechamento quando o modal é aberto
      setIsClosing(false);

      const timer = setTimeout(() => {
        setIsClosing(true); // Inicia a animação de saída após 3 segundos
        const closeTimer = setTimeout(() => {
          onClose(); // Fecha o modal após a animação de saída
        }, 500); // Aguarda a duração da animação de saída
        return () => clearTimeout(closeTimer); // Limpa o timer quando o componente desmontar
      }, 5000);

      return () => clearTimeout(timer); // Limpa o timer quando o componente desmontar
    }
  }, [isOpen, onClose]);

  // Renderiza o modal se estiver aberto ou em fechamento
  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed top-28 left-4 rounded-xl shadow-md flex items-center justify-center border-green-600 z-20 ${
        isClosing ? "animate-slideOutLeft" : "animate-slideInLeft"
      }`}
    >
      {/* Parte com o ícone de verificado */}
      <div className="bg-green-600 rounded-l-xl p-4 flex items-center h-[64px]">
        <i className="fas fa-check-circle text-white text-xl mx-1"></i>
      </div>

      {/* Parte com a mensagem e o botão de fechar */}
      <div className="bg-zinc-800 ml-0 text-white rounded-r-xl p-3 h-[64px] flex items-center space-x-3 border-[1px] border-zinc-700">
        <p className="text-lg mr-10">
          Successfully claimed ${totalReward.toFixed(2)}
        </p>

        {/* Botão de fechar */}
        <button
          onClick={() => {
            setIsClosing(true); // Inicia a animação de saída ao clicar no botão
            setTimeout(onClose, 0); // Fecha o modal após a animação de saída
          }}
          className="text-3xl text-white hover:text-zinc-600 ml-2 mb-[2px] transition duration-300 ease-in-out"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default RakebackModal;
