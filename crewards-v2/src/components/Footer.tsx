import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (anchorId: string) => {
    // If already in the homepage, scrolls to the anchor
    if (location.pathname === "/") {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Goes to homepage
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0c0c0c] to-[#0a0a0a] text-[#444444] font-bold border-t-2 border-y-[#242424] xl:px-36 2xl:px-60">
      <div className="container py-8 flex flex-wrap justify-between">
        <div className="footer-section flex flex-col items-start">
          <img
            className="footer-logo w-32 glow-effect-2"
            src="/logo.png"
            alt="Logo"
          />
          <p className="font-extrabold">
            © Copyrights 2024 <br /> crewards.gg
          </p>
        </div>

        <div className="footer-section text-xl mx-2">
          <h4 className="mb-2">
            <a
              onClick={() => handleAnchorClick("rewards")}
              className="hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Rewards
            </a>
          </h4>
          <h4 className="mb-2">
            <a
              onClick={() => handleAnchorClick("challenges")}
              className="hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Challenges
            </a>
          </h4>
          <h4 className="mb-2">
            <a
              onClick={() => handleAnchorClick("video-bar")}
              className="hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Videos
            </a>
          </h4>
          <Link
            to="/leaderboard"
            onClick={() => handleAnchorClick("leaderboard")}
            className="hover:text-white transition-colors duration-300 mb-2 cursor-pointer"
          >
            Leaderboard
          </Link>
        </div>

        <div className="footer-section text-xl mx-4">
          <h4 className="mb-2">
            <Link
              to="/contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </h4>
          <h4 className="mb-2">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </h4>
          <h4 className="mb-2">
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </h4>
        </div>

        <div className="footer-section">
          <div className="social-icons flex justify-end items-center">
            <a
              href="https://x.com/classybets"
              target="_blank"
              className="transform transition-transform hover:scale-110"
            >
              <img className="w-16" src="/X.png" alt="X" />
            </a>
            <a
              href="https://discord.gg/classy"
              target="_blank"
              className="transform transition-transform hover:scale-110"
            >
              <img className="w-16" src="/Discord.png" alt="Discord" />
            </a>
            <a
              href="https://www.youtube.com/classy"
              target="_blank"
              className="transform transition-transform hover:scale-110"
            >
              <img className="w-16" src="/Youtube.png" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-[#242424]" />

      <p className="text-sm text-left py-4">
        18+ | Gamble Responsibly | BeGambleAware. Most people gamble for fun and
        enjoyment. Do not think of gambling as a way to make money. Only gamble
        with money you can afford to lose. Set a money and time limit in
        advance. Never chase your losses. Don't use gambling to distract
        yourself from everyday problems.
      </p>
    </footer>
  );
};

export default Footer;
