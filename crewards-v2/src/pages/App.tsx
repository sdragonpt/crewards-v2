import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import VideoBar from "../components/VideoBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingScreen from "./LoadingScreen";
import Leaderboard from "./Leaderboard";
import Challenges from "../components/Challenges";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
                <VideoBar />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
