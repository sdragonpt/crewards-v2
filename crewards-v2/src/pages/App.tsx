import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import CardSection from "../components/Home/CardSection";
import VideoBar from "../components/Home/VideoBar";
// import VideoBarLocal from "../components/Home/VideoBarLocal";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter"; // Importando o MobileFooter
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "./LoadingScreen";
import Leaderboard from "./Leaderboard";
import Vip from "./Vip";
import Challenges from "../components/Home/Challenges";
import ProfileSettings from "./ProfileSettings";
import useWindowWidth from "../hooks/useWindowWidth"; // Importando o hook

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isLocalhost = window.location.hostname === "localhost";
  const windowWidth = useWindowWidth(); // Usando o hook para obter a largura da janela

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // False after 1 sec
    }, 1000); // 1 sec

    return () => clearTimeout(timer); // Cleans timer
  }, []);

  const renderFooter = () => {
    // Renderiza o footer apropriado baseado na largura da janela
    return windowWidth < 768 ? <MobileFooter /> : <Footer />;
  };

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />
      <div
        className={`bg-[#1c1c1c] min-h-screen ${
          isLoading ? "hidden" : ""
        } select-none`}
      >
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CardSection />
                <Challenges />
                {isLocalhost ? <Challenges /> : <VideoBar />}
                {renderFooter()} {/* Renderiza o footer aqui */}
              </>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <div>
                <Leaderboard />
                {renderFooter()} {/* Renderiza o footer aqui também */}
              </div>
            }
          />
          <Route
            path="/vip/*" // Permite sub-rotas para csgoempire e shuffle
            element={
              <div>
                <Vip />
                {renderFooter()} {/* Renderiza o footer aqui também */}
              </div>
            }
          />
          <Route
            path="/profile" // Adiciona a rota para a página de login
            element={
              <div>
                <ProfileSettings />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
