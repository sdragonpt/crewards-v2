import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Empire from "../components/Vip/Empire";
import EmpireMobile from "../components/Vip/EmpireMobile";
import Shuffle from "../components/Vip/Shuffle";
import ShuffleMobile from "../components/Vip/ShuffleMobile";

function Vip() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeImage, setActiveImage] = useState<1 | 2>(1);
  const [isMobile, setIsMobile] = useState(false);

  const [styles, setStyles] = useState({
    left: "54.6%",
    width: "43%",
    backgroundColor: "rgb(43 43 43)",
  });

  useEffect(() => {
    const updateStyles = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setStyles({
          left: activeImage === 1 ? "2.6%" : "53.8%",
          width: activeImage === 1 ? "46%" : "43%",
          backgroundColor: "rgb(43 43 43)",
        });
      } else {
        setStyles({
          left: activeImage === 1 ? "1.8%" : "50.6%",
          width: activeImage === 1 ? "49%" : "47.6%",
          backgroundColor: "rgb(43 43 43)",
        });
      }
    };

    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => window.removeEventListener("resize", updateStyles);
  }, [activeImage]);

  const handleImageClick = (image: 1 | 2) => {
    setActiveImage(image);
    navigate(image === 1 ? "/vip/csgoempire" : "/vip/shuffle");
  };

  useEffect(() => {
    if (location.pathname === "/vip/csgoempire") {
      setActiveImage(1);
    } else if (location.pathname === "/vip/shuffle") {
      setActiveImage(2);
    }
  }, [location.pathname]);

  // Definindo os componentes condicionalmente baseado no isMobile
  const EmpireComponent = isMobile ? EmpireMobile : Empire;
  const ShuffleComponent = isMobile ? ShuffleMobile : Shuffle;

  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Toggle Section */}
      <div className="absolute top-[52vw] md:top-[12.4vw] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="flex justify-center bg-[#191919] rounded-full border-2 border-[#2B2B2B]">
          {/* Empire Toggle */}
          <div className="relative flex flex-col items-center ml-1 z-20">
            <div
              className={`rounded-xl px-3 transition-transform duration-300 transform ${
                activeImage === 1 ? "" : "opacity-50"
              }`}
            >
              <img
                src="/csgoempire.png"
                alt="Empire"
                className={`w-[6vw] cursor-pointer transition duration-300 ease-in-out hover:scale-110 hidden md:block`}
                onClick={() => handleImageClick(1)}
              />
              <img
                src="/empirelogo.png"
                alt="Empire Small"
                className={`w-7 pb-2 pt-2 ml-4 mr-4 cursor-pointer transition duration-300 ease-in-out hover:scale-110 block md:hidden`}
                onClick={() => handleImageClick(1)}
              />
            </div>
          </div>

          {/* Shuffle Toggle */}
          <div className="relative flex flex-col items-center z-20">
            <div
              className={`rounded-xl px-3 transition-transform duration-300 transform ${
                activeImage === 2 ? "" : "opacity-50"
              }`}
            >
              <img
                src="/shuffle.png"
                alt="Shuffle"
                className={`w-[6vw] cursor-pointer transition duration-300 ease-in-out hover:scale-110 hidden md:block`}
                onClick={() => handleImageClick(2)}
              />
              <img
                src="/shufflelogo2.png"
                alt="Shuffle Small"
                className={`w-7 pb-2 pt-2 ml-4 mr-4 cursor-pointer transition duration-300 ease-in-out hover:scale-110 block md:hidden`}
                onClick={() => handleImageClick(2)}
              />
            </div>
          </div>
        </div>

        {/* Moving Background Line */}
        <div
          className={`absolute top-[49.5%] transform -translate-y-1/2 bg-[#2B2B2B] rounded-full md:h-[2.2vw] md:mt-0 h-[40px] transition-all duration-300 ease-in-out z-10`}
          style={styles}
        />
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/csgoempire" element={<EmpireComponent />} />
        <Route path="/shuffle" element={<ShuffleComponent />} />
        <Route path="*" element={<Navigate to="/vip/csgoempire" replace />} />
      </Routes>
    </div>
  );
}

export default Vip;
