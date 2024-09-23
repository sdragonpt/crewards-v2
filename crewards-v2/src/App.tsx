import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MoneyCounter from "./components/MoneyCounter";
import CardSection from "./components/CardSection";
import VideoBar from "./components/VideoBar";
import Footer from "./components/Footer";
// import Leaderboard from "./components/Leaderboard"; // Importe o componente do Leaderboard

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="bg-[#1c1c1c] min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <MoneyCounter targetAmount={33500} />
              <CardSection />
              <VideoBar />
              <Footer />
            </>
          } />
          {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
