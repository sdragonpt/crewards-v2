import React from "react";
import { Link } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";

const MobileFooter: React.FC = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleAnchorClick = (anchorId: string) => {
  //   // If already in the homepage, scrolls to the anchor
  //   if (location.pathname === "/") {
  //     const element = document.getElementById(anchorId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     // Goes to homepage
  //     navigate("/");
  //     setTimeout(() => {
  //       const element = document.getElementById(anchorId);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }, 100); // Delay
  //   }
  // };

  return (
    <footer className="bg-[#131313] text-[#575757] font-base border-t-2 border-y-[#242424] px-4 py-4">
      <div className="container py-6 flex flex-col items-start pl-4">
        <div className="footer-section flex flex-col items-start mb-4">
          <img
            className="footer-logo w-36 glow-effect-2"
            src="/logo.png"
            alt="Logo"
          />
          <p className="font-base text-start text-xl text-[#575757]">
            © Copyrights 2024
          </p>
          <p className="font-base text-start text-xl text-[#575757]">
            crewards.gg
          </p>
        </div>

        {/* <div className="footer-section text-lg text-start mt-4">
          <h4 className="hover:text-white transition-colors mb-2">
            <a
              onClick={() => handleAnchorClick("rewards")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Rewards
            </a>
          </h4>
          <h4 className="hover:text-white transition-colors mb-2">
            <a
              onClick={() => handleAnchorClick("challenges")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Challenges
            </a>
          </h4>
          <h4 className="hover:text-white transition-colors mb-2">
            <a
              onClick={() => handleAnchorClick("video-bar")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Videos
            </a>
          </h4>
          <Link
            to="/leaderboard"
            onClick={() => handleAnchorClick("leaderboard")}
            className={`hover:text-white transition-colors mb-2 cursor-pointer`}
          >
            Leaderboard
          </Link>
        </div> */}

        <div className="footer-section text-lg text-start mb-4 mt-4">
          <h4 className="hover:text-white transition-colors mb-2">
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </h4>
          <h4 className="hover:text-white transition-colors mb-2">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </h4>
          <h4 className="hover:text-white transition-colors">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </h4>
        </div>
      </div>

      <div className="footer-section mb-4 flex justify-center">
        {" "}
        {/* Aqui é onde a centralização ocorre */}
        <div className="social-icons flex justify-center">
          <a
            href="https://x.com/classybets"
            target="_blank"
            className="transform transition-transform hover:scale-110 mx-1" // Adicionando margem para espaçamento
          >
            <img className="w-16" src="/X.png" alt="X" />
          </a>
          <a
            href="https://discord.gg/classy"
            target="_blank"
            className="transform transition-transform hover:scale-110 mx-1" // Adicionando margem para espaçamento
          >
            <img className="w-16" src="/Discord.png" alt="Discord" />
          </a>
          <a
            href="https://www.youtube.com/classy"
            target="_blank"
            className="transform transition-transform hover:scale-110 mx-1" // Adicionando margem para espaçamento
          >
            <img className="w-16" src="/Youtube.png" alt="Youtube" />
          </a>
        </div>
      </div>

      <hr className="border-[#242424]" />

      <p className="text-sm text-start py-4 rounded-lg flex text-[#575757] mt-4 font-semibold">
        18+ | Play Responsibly | Many individuals engage in gambling for
        entertainment and pleasure. Avoid viewing gambling as a method to earn
        money. Only wager with funds you can afford to part with. Establish both
        a budget and a time limit beforehand. Never pursue your losses. Refrain
        from using gambling as an escape from daily challenges.
      </p>
    </footer>
  );
};

export default MobileFooter;
