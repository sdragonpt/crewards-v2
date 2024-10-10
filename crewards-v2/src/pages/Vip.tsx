import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Empire from "../components/Vip/Empire";
import Shuffle from "../components/Vip/Shuffle";

function Vip() {
  const navigate = useNavigate(); // Hook para navegação
  const location = useLocation(); // Hook para obter a localização atual
  const [activeImage, setActiveImage] = useState<1 | 2>(1); // 1 para Empire, 2 para Shuffle

  const handleImageClick = (image: 1 | 2) => {
    setActiveImage(image);
    navigate(image === 1 ? "/vip/csgoempire" : "/vip/shuffle"); // Navega para a rota correspondente
  };

  // Sincroniza a imagem ativa com a rota atual
  useEffect(() => {
    if (location.pathname === "/vip/csgoempire") {
      setActiveImage(1);
    } else if (location.pathname === "/vip/shuffle") {
      setActiveImage(2);
    }
  }, [location.pathname]); // Executa sempre que a rota mudar

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Imagens para alternar entre Empire e Shuffle */}
      <div className="absolute top-48 lg:top-[10.6rem] 3xl:top-60 left-1/2 transform -translate-x-1/2 z-20 flex space-x-8 justify-center">
        {/* Imagem do Empire */}
        <img
          src="/csgoempire.png"
          alt="Empire"
          className={`w-32 lg:w-28 3xl:w-36 cursor-pointer transition duration-300 ${
            activeImage === 1 ? "brightness-100" : "brightness-50"
          }`}
          onClick={() => handleImageClick(1)} // Mudar para Empire ao clicar
        />
        {/* Imagem do Shuffle */}
        <img
          src="/shuffle.png"
          alt="Shuffle"
          className={`w-32 lg:w-28 3xl:w-36 cursor-pointer transition duration-300 ${
            activeImage === 2 ? "brightness-100" : "brightness-50"
          }`}
          onClick={() => handleImageClick(2)} // Mudar para Shuffle ao clicar
        />
      </div>

      {/* Rotas para Empire e Shuffle */}
      <Routes>
        <Route path="/csgoempire" element={<Empire />} />
        <Route path="/shuffle" element={<Shuffle />} />
        <Route path="*" element={<Navigate to="/vip/csgoempire" replace />} />
        {/* Redireciona para o Empire se a rota não existir */}
      </Routes>
    </div>
  );
}

export default Vip;
