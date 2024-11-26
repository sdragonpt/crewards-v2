import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import CardSection from "../components/Home/CardSection";
import VideoBar from "../components/Home/VideoBar";
import VideoBarLocal from "../components/Home/VideoBarLocal";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter"; // Importando o MobileFooter
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "./LoadingScreen";
import Leaderboard from "./Leaderboard";
import Vip from "./Vip";
import Challenges from "../components/Home/Challenges";
import ProfileSettings from "./ProfileSettings";
import useWindowWidth from "../hooks/useWindowWidth"; // Importando o hook
import MoneyCounter from "../components/Home/MoneyCounter";
import ProfileSettingsModal from "./ProfileSettingsModal";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false); // Estado para controlar o modal
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login
  const windowWidth = useWindowWidth(); // Usando o hook para obter a largura da janela

  const toggleModal = () => setOpenModal((prev) => !prev);

  const isLocalhost = window.location.hostname === "localhost";

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev); // Alterna o valor de isLoggedIn
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // False after 1 sec
    }, 1000); // 1 sec

    return () => clearTimeout(timer); // Limpa o timer
  }, []);

  const renderFooter = () => {
    // Renderiza o footer apropriado baseado na largura da janela
    return windowWidth < 768 ? <MobileFooter /> : <Footer />;
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Carregando a tela */}
      <LoadingScreen />

      <div
        className={`bg-[#131313] min-h-screen ${
          isLoading ? "hidden" : ""
        } select-none`}
      >
        <NavBar toggleModal={toggleModal} />

        {/* Modal de configurações de perfil */}
        <ProfileSettingsModal
          isOpen={openModal} // Passa o estado de abertura
          onClose={toggleModal} // Passa a função de fechamento
          onConfirm={() => console.log("Confirmado")} // Função de confirmação
          toggleLogin={toggleLogin} // Passando a função toggleLogin para o modal
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MoneyCounter targetAmount={35000} />
                <CardSection />
                <Challenges />
                {isLocalhost ? <VideoBarLocal /> : <VideoBar />}
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
                {isLoggedIn ? (
                  <ProfileSettings /> // Exibe a página de configurações se estiver logado
                ) : (
                  <div>Você precisa estar logado para acessar esta página</div> // Caso contrário, exibe uma mensagem
                )}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
