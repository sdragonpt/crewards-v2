import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MoneyCounter from "../components/MoneyCounter";
import CardSection from "../components/CardSection";
import VideoBar from "../components/VideoBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "./LoadingScreen"; // Importando o LoadingScreen
import Challenges from "../components/Challenges";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Define como false após 1 segundo
    }, 1000); // 1 segundo de espera

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen isLoading={isLoading} /> {/* Passa o estado de loading */}
      <div className={`bg-[#1c1c1c] min-h-screen ${isLoading ? 'hidden' : ''}`}>
        <NavBar /> {/* Exibe a NavBar somente após o carregamento */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MoneyCounter targetAmount={33500} />
                <CardSection />
                <Challenges /> {/* Challenges renderiza aqui */}
                <VideoBar />
                <Footer />
              </>
            }
          />
          <Route
            path="/leaderboard"
            element={<div>{/* Coloque aqui o conteúdo do Leaderboard */}</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
