import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import CardSection from "../components/Home/CardSection";
import VideoBar from "../components/Home/VideoBar";
import VideoBarLocal from "../components/Home/VideoBarLocal";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "./LoadingScreen";
import Leaderboard from "./Leaderboard";
import Vip from "./Vip";
import Challenges from "../components/Home/Challenges";
import ProfileSettings from "./ProfileSettings";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isLocalhost = window.location.hostname === "localhost";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // False after 1 sec
    }, 1000); // 1 sec

    return () => clearTimeout(timer); // Cleans timer
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen isLoading={isLoading} /> {/* Goes to loading */}
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
                {/* <MoneyCounter targetAmount={33500} /> */}
                <CardSection />
                <Challenges />
                {isLocalhost ? <VideoBarLocal /> : <VideoBar />}
                <Footer />
              </>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <div>
                <Leaderboard />
                <Footer />
              </div>
            }
          />
          <Route
            path="/vip/*" // Permite sub-rotas para csgoempire e shuffle
            element={
              <div>
                <Vip />
                <Footer />
              </div>
            }
          />
          <Route
            path="/profile" // Adiciona a rota para a página de login
            element={<ProfileSettings />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
