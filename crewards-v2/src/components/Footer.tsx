import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0c0c0c] to-[#0a0a0a] text-[#444444] 2xl:px-60  font-bold border-t-2 border-y-[#242424]">
      <div className="container py-8 flex flex-wrap justify-between">
        <div className="footer-section flex flex-col items-start">
          <img
            className="footer-logo w-32 glow-effect-2"
            src="logo.png"
            alt="Logo"
          />
          <p className="font-extrabold">
            © Copyrights 2024 <br /> crewards.gg
          </p>
        </div>

        <div className="footer-section text-xl mx-2"> {/* Ajuste a margem aqui */}
          <h4 className="hover:text-white transition-colors mb-2">
            <a href="#" className="hover:text-white transition-colors">
              Rewards
            </a>
          </h4>
          <h4 className="hover:text-white transition-colors mb-2">
            <a href="#" className="hover:text-white transition-colors">
              Videos
            </a>
          </h4>
          <h4 className="hover:text-white transition-colors">
            <a href="#" className="hover:text-white transition-colors">
              Leaderboard
            </a>
          </h4>
        </div>

        <div className="footer-section text-xl mx-4">
          <h4 className="hover:text-white transition-colors mb-2">
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </h4>
          <h4 className="hover:text-white transition-colors mb-2">
            <a href="#" className="hover:text-white transition-colors mb-2">
              Private Policy
            </a>
          </h4>
          <h4 className="hover:text-white transition-colors mb-2">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </h4>
        </div>

        <div className="footer-section">
          <div className="social-icons flex justify-end items-center">
            <a href="#" className="transform transition-transform hover:scale-110"> {/* Aplique a transformação aqui */}
              <img className="w-16" src="X.png" alt="X" />
            </a>
            <a href="#" className="transform transition-transform hover:scale-110"> {/* Aplique a transformação aqui */}
              <img className="w-16" src="Discord.png" alt="Discord" />
            </a>
            <a href="#" className="transform transition-transform hover:scale-110"> {/* Aplique a transformação aqui */}
              <img className="w-16" src="Youtube.png" alt="Youtube" />
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
