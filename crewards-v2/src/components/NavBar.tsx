import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [, setActiveLink] = useState<string>("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  // Home click
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleLeaderboardClick = () => {
    if (location.pathname === "/leaderboard") {
      const element = document.getElementById("leaderboard");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/leaderboard");
    }
  };

  // Smooth transition to the anchor
  const handleAnchorClick = (anchorId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === "/leaderboard") {
      // Se estiver na página do leaderboard, você pode querer navegar de volta para a home
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Atraso para garantir que a navegação esteja concluída
    } else {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && targetAnchor) {
      const element = document.getElementById(targetAnchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setTargetAnchor(null); // Reset the anchor after scrolling
    }
  }, [location.pathname, targetAnchor]);

  // Updates the anchor
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveLink(location.hash.slice(1) || ""); // Removes '#' and updated active link
    } else {
      setActiveLink(path.replace("/", "")); // Updates with route
    }
  }, [location]);

  // Check if the anchor is active
  const isActive = (anchorId: string) => {
    return location.pathname === "/" && location.hash === `#${anchorId}`;
  };

  return (
    <nav className="fixed top-0 w-full bg-zinc-950 bg-opacity-100 lg:bg-neutral-900 lg:bg-opacity-15 lg:backdrop-blur-lg lg:py-4 z-30 border-b border-zinc-800">
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-48 2xl:px-28">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:justify-between lg:items-center h-24 lg:h-16 lg:relative">
          {/* Logo */}
          <div className="flex-shrink-0 lg:mr-6">
            <img
              className="h-20 w-auto mx-auto lg:mx-0"
              src="/logo.png"
              alt="Logo"
            />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block lg:block">
            <div className="ml-10 flex items-baseline 2xl:space-x-4 2xl:text-lg lg:space-x-2 lg:text-base text-zinc-500 relative">
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
                onClick={() => handleLeaderboardClick()}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  location.pathname === "/leaderboard"
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                Leaderboard
              </Link>
              <Link
                to="/vip/csgoempire"
                onClick={() => handleLeaderboardClick()}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  location.pathname.startsWith("/vip")
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                Vip
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center h-24 z-40">
          {/* Logo */}
          <div className="flex-shrink-0 mx-auto">
            <img className="h-20 w-auto ml-6" src="/logo.png" alt="Logo" />
          </div>
          {/* Hamburger Menu Button */}
          <button
            className="text-white focus:outline-none mr-2"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Expanded Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed top-24 left-0 w-full bg-zinc-950 z-10 border-b-2 border-zinc-600 h-screen overflow-hidden"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-left py-4 text-zinc-400">
                {[
                  { path: "/", label: "Home", icon: "home" },
                  { path: "/#rewards", label: "Rewards", icon: "trophy" },
                  {
                    path: "/#challenges",
                    label: "Challenges",
                    icon: "clipboard-list",
                  },
                  { path: "/#video-bar", label: "Videos", icon: "video" },
                  {
                    path: "/leaderboard",
                    label: "Leaderboard",
                    icon: "chart-line",
                  },
                  {
                    path: "/vip/csgoempire",
                    label: "Vip CSGOEmpire",
                    icon: "empirelogo.png", // Adiciona a imagem correspondente
                  },
                  {
                    path: "/vip/shuffle",
                    label: "Vip Shuffle",
                    icon: "shufflelogo.png", // Adiciona a imagem correspondente
                  },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => {
                      setMobileMenuOpen(false);

                      // Se o link for para uma âncora (seção), redireciona para a Home antes de rolar
                      if (link.path.startsWith("/#")) {
                        navigate("/"); // Redireciona para a Home

                        setTimeout(() => {
                          const anchorId = link.label.toLowerCase();
                          const element = document.getElementById(anchorId);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 300);
                      } else {
                        navigate(link.path);
                      }
                    }}
                    className={`flex items-center px-3 py-2 rounded-md text-lg mx-6 my-1 ${
                      location.pathname === link.path ||
                      (link.path === "/" && location.pathname === "/") ||
                      (link.path.startsWith("/") &&
                        isActive(link.label.toLowerCase()))
                        ? link.path === "/vip/csgoempire"
                          ? "bg-[#eab30d] text-white" // Cor para o link do CSGOEmpire
                          : link.path === "/vip/shuffle"
                          ? "bg-[#8337d8] text-white" // Cor para o link do Shuffle
                          : "bg-red-600 text-white"
                        : "hover:text-white"
                    }`}
                  >
                    {/* Substituir ícone por imagem para links VIP */}
                    {link.path.includes("/vip") ? (
                      <img
                        src={`/${link.icon}`}
                        alt={link.label}
                        className="w-6 h-6 mr-2" // Define o tamanho da imagem
                      />
                    ) : (
                      <i className={`fas fa-${link.icon} mr-2`}></i>
                    )}
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;
