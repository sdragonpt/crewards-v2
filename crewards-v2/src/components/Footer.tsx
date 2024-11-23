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
    <footer className="bg-[#131313] text-[#575757] font-base border-t-2 border-y-[#1C1C1C] md:px-[12%] 2xl:px-[14%] py-4">
      <div className="container py-4 flex flex-wrap justify-between w-[100%]">
        <div className="footer-section flex flex-col items-start">
          <img
            className="footer-logo w-28 glow-effect-2"
            src="/logo.png"
            alt="Logo"
          />
          <p className="font-medium">© Copyrights 2024 crewards.gg</p>
          <div className="social-icons flex justify-end items-center mt-4">
            <a
              href="https://x.com/classybets"
              target="_blank"
              className="transform transition-transform hover:scale-110 mr-2"
            >
              <span>
                <img className="w-12" src="/X.png" alt="X" />
              </span>
            </a>
            <a
              href="https://discord.gg/classy"
              target="_blank"
              className="transform transition-transform hover:scale-110 mr-2"
            >
              <span>
                <img className="w-12" src="/Discord.png" alt="Discord" />
              </span>
            </a>
            <a
              href="https://www.youtube.com/classy"
              target="_blank"
              className="transform transition-transform hover:scale-110"
            >
              <span>
                <img className="w-12" src="/Youtube.png" alt="Youtube" />
              </span>
            </a>
          </div>
        </div>

        <div className="flex">
          <div className="footer-section md:text-lg 2xl:text-xl mx-2 mr-6 font-medium">
            <p className="mb-2 text-white font-semibold text-[1.2vw]">EXPLORE</p>
            <h4 className="mb-2">
              <a
                onClick={() => handleAnchorClick("rewards")}
                className="hover:text-white transition-colors duration-300 cursor-pointer text-[1.1vw]"
              >
                Rewards
              </a>
            </h4>
            <h4 className="mb-2">
              <a
                onClick={() => handleAnchorClick("challenges")}
                className="hover:text-white transition-colors duration-300 cursor-pointer text-[1.1vw]"
              >
                Challenges
              </a>
            </h4>
            <h4 className="mb-2">
              <a
                onClick={() => handleAnchorClick("video-bar")}
                className="hover:text-white transition-colors duration-300 cursor-pointer text-[1.1vw]"
              >
                Videos
              </a>
            </h4>
            <Link
              to="/leaderboard"
              onClick={() => handleAnchorClick("leaderboard")}
              className="hover:text-white transition-colors duration-300 mb-2 cursor-pointer text-[1.1vw]"
            >
              Leaderboard
            </Link>
          </div>
          <div className="footer-section text-xl mx-4 font-medium md:text-lg 2xl:text-xl">
            <p className="mb-2 text-white font-semibold text-[1.2vw]">ABOUT</p>
            <h4 className="mb-2">
              <Link
                to="/contact"
                className="hover:text-white transition-colors duration-300 text-[1.1vw]"
              >
                Contact
              </Link>
            </h4>
            <h4 className="mb-2">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-300 text-[1.1vw]"
              >
                Privacy Policy
              </Link>
            </h4>
            <h4 className="mb-2">
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-300 text-[1.1vw]"
              >
                Terms of Service
              </Link>
            </h4>
          </div>
        </div>
      </div>

      <hr className="border-[#242424] mt-2" />

      <p className="text-left md:text-[0.8vw] items-center py-4 rounded-lg flex text-[#575757] mt-2 font-semibold">
        18+ | Play Responsibly | Many individuals engage in gambling for
        entertainment and pleasure. Avoid viewing gambling as a method to earn
        money. Only wager with funds you can afford to part with. Establish both
        a budget and a time limit beforehand. Never pursue your losses. Refrain
        from using gambling as an escape from daily challenges.
      </p>
    </footer>
  );
};

export default Footer;
