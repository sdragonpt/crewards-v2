import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>("");

  // Função que lida com o clique no Home
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Função para scroll suave até a âncora
  const handleAnchorClick = (anchorId: string) => {
    if (location.pathname === "/leaderboard") {
      setTargetAnchor(anchorId);
      navigate("/");
    } else if (location.pathname === "/challenges") {
      setTargetAnchor(anchorId);
      navigate("/");
    } else if (location.pathname === "/") {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Efeito que lida com o scroll até a âncora após a navegação
  useEffect(() => {
    if (location.pathname === "/" && targetAnchor) {
      const element = document.getElementById(targetAnchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setTargetAnchor(null); // Reset the anchor after scrolling
    }
  }, [location.pathname, targetAnchor]);

  // Atualiza a âncora ativa com base no local
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveLink(location.hash.slice(1) || ""); // Remove o '#' e atualiza o link ativo
    } else {
      setActiveLink(path.replace("/", "")); // Atualiza com a rota
    }
  }, [location]);

  // Função para verificar se a âncora está ativa
  const isActive = (anchorId: string) => {
    return location.pathname === "/" && location.hash === `#${anchorId}`;
  };

  return (
    <nav className="fixed top-0 w-full bg-neutral-900 bg-opacity-15 backdrop-blur-lg lg:py-4 z-30 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-20 w-auto" src="./logo.png" alt="Logo" />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-lg font-extrabold text-zinc-500 relative">
              <Link
                to="/"
                onClick={handleHomeClick}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  location.pathname === "/" ? "text-white" : "hover:text-white"
                }`}
              >
                Home
              </Link>
              <a
                onClick={() => handleAnchorClick("rewards")}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  isActive("rewards") ? "text-white" : "hover:text-white"
                }`}
              >
                Rewards
              </a>
              <a
                onClick={() => handleAnchorClick("challenges")}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  isActive("challenges") ? "text-white" : "hover:text-white"
                }`}
              >
                Challenges
              </a>
              <a
                onClick={() => handleAnchorClick("video-bar")}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  isActive("video-bar") ? "text-white" : "hover:text-white"
                }`}
              >
                Videos
              </a>
              <Link
                to="/leaderboard"
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  location.pathname === "/leaderboard" ? "text-white" : "hover:text-white"
                }`}
              >
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
