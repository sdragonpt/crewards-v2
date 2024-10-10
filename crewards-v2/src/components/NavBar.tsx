import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropDownProfile from "./DropDownProfile";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [, setActiveLink] = useState<string>("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  // LOGIN
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  const [openProfile, setOpenProfile] = useState(false);

  // Função para alternar o estado de isLoggedIn
  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev); // Alterna o valor de isLoggedIn
    setOpenProfile(false);
  };

  // Home click
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    // Feche o menu quando a URL mudar para as páginas específicas
    if (
      location.pathname === "/vip/csgoempire" ||
      location.pathname === "/vip/shuffle" ||
      location.pathname === "/leaderboard" ||
      location.pathname === "/"
    ) {
      setOpenProfile(false);
    }
  }, [location.pathname]);

  const handleLeaderboardClick = () => {
    if (location.pathname === "/leaderboard") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
    } else {
      navigate("/leaderboard"); // Navega para a página do leaderboard
    }
  };

  const handleVipClick = () => {
    if (location.pathname.startsWith("/vip/")) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
    } else {
      navigate("/vip/csgoempire"); // Navega para a página do CSGOEmpire
    }
  };

  const handleAnchorClick = (anchorId: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname === "/") {
      scrollToElement();
    } else if (location.pathname === "/leaderboard") {
      // Se estiver na página do leaderboard, navega para a home e depois faz o scroll
      navigate("/");
      setTimeout(() => {
        scrollToElement();
      }, 100); // Atraso para garantir a navegação
    } else if (location.pathname.includes("/vip")) {
      // Se estiver em /vip/csgoempire ou /vip/shuffle, navega para a home
      navigate("/");
      setTimeout(() => {
        scrollToElement();
      }, 100); // Atraso para garantir a navegação
    } else {
      scrollToElement(); // Scroll direto para outras rotas
    }
  };

  // Smooth transition to the anchor
  const handleMobileAnchorClick = (anchorId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(anchorId);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100; // Ajuste de 100px para cima
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else if (location.pathname === "/leaderboard") {
      navigate("/"); // Navegar para a home se estiver no leaderboard
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100); // Atraso para garantir a navegação
    } else if (location.pathname.includes("/vip")) {
      navigate("/"); // Navegar para a home se estiver na página VIP
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100); // Atraso para garantir a navegação
    } else {
      const element = document.getElementById(anchorId);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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

  const handleLogin = () => {
    setIsLoggedIn(true); // Define isLoggedIn como true ao fazer login
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
            <div className="ml-10 flex items-center 2xl:space-x-4 2xl:text-lg lg:space-x-2 lg:text-base text-zinc-500 relative">
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
              <a
                onClick={() => handleVipClick()}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  location.pathname.startsWith("/vip")
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                VIP
              </a>
              {isLoggedIn ? (
                <div className="relative flex items-center">
                  <Link to="#" className="rounded-md" onClick={handleLogin}>
                    <img
                      src="/logo2.png"
                      alt="User Icon"
                      className="w-8 h-8 mr-2 rounded-full"
                      onClick={() => setOpenProfile((prev) => !prev)}
                    />
                  </Link>
                  {openProfile && <DropDownProfile toggleLogin={toggleLogin} />}{" "}
                  {/* Passa a função de alternância */}
                </div>
              ) : (
                <Link
                  onClick={handleLogin} // Altera o estado para logged in
                  to="#"
                  className="flex items-center justify-center text-white px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md"
                >
                  <img
                    src="/discordlogo.png"
                    alt="Login Icon"
                    className="w-5 h-5 mr-2"
                  />
                  Sign In
                </Link>
              )}
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
                  {
                    label: "Home",
                    action: handleHomeClick,
                    icon: "home",
                    color: "",
                  },
                  {
                    label: "Rewards",
                    action: () => handleMobileAnchorClick("rewards"),
                    icon: "trophy",
                    color: "",
                  },
                  {
                    label: "Challenges",
                    action: () => handleMobileAnchorClick("challenges"),
                    icon: "clipboard-list",
                    color: "",
                  },
                  {
                    label: "Videos",
                    action: () => handleMobileAnchorClick("video-bar"),
                    icon: "video",
                    color: "",
                  },
                  {
                    label: "Leaderboard",
                    action: handleLeaderboardClick,
                    icon: "chart-line",
                    color: "",
                  },
                  {
                    label: "VIP CSGOEmpire",
                    action: () => navigate("/vip/csgoempire"),
                    icon: "/empirelogo.png",
                    color: "bg-yellow-500 text-white",
                  },
                  {
                    label: "VIP Shuffle",
                    action: () => navigate("/vip/shuffle"),
                    icon: "/shufflelogo.png",
                    color: "bg-purple-500 text-white",
                  },
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      // Se já estiver na página do leaderboard, rola para o topo
                      if (
                        link.label === "Leaderboard" &&
                        location.pathname.includes("/leaderboard")
                      ) {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
                      } else if (
                        link.label === "VIP CSGOEmpire" &&
                        location.pathname.includes("/vip/csgoempire")
                      ) {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
                      } else if (
                        link.label === "VIP Shuffle" &&
                        location.pathname.includes("/vip/shuffle")
                      ) {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
                      } else {
                        link.action(); // Executa a ação normal
                      }

                      setMobileMenuOpen(false); // Fechar o menu após o clique
                    }}
                    className={`flex items-center px-3 py-2 rounded-md text-lg mx-6 my-1 ${
                      location.pathname === "/" && link.label === "Home"
                        ? "text-white"
                        : "hover:text-white"
                    } ${link.color} ${
                      location.pathname.includes(
                        link.label.replace(" ", "").toLowerCase()
                      )
                        ? "bg-opacity-50"
                        : ""
                    }`} // Ativar cor de fundo
                  >
                    {link.icon.startsWith("/") ? (
                      <img
                        src={link.icon}
                        alt={`${link.label} icon`}
                        className="w-5 h-5 mr-2"
                      />
                    ) : (
                      <i className={`fas fa-${link.icon} mr-2`}></i> // Usando Font Awesome para os outros ícones
                    )}
                    {link.label}
                  </button>
                ))}

                {/* Botão de Login */}
                <div className="flex flex-col mt-5 mx-6">
                  <hr className="mb-6 border-zinc-700" />
                  {isLoggedIn ? (
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center text-lg text-white px-2 py-3 bg-zinc-800 rounded-md overflow-hidden">
                        <img
                          src="/logo2.png"
                          alt="User Icon"
                          className="w-6 h-6 mr-2 ml-1 rounded-full"
                        />
                        <span className="mr-8">{username}</span>
                      </li>
                      <li className="hover:text-white">
                        <i className="fas fa-cog mx-2"></i>
                        <a href="#">Settings</a>
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        <i className="fas fa-sign-out-alt mx-2"></i>
                        <a onClick={toggleLogin}>Logout</a>{" "}
                        {/* Chama a função de logout */}
                      </li>
                    </ul>
                  ) : (
                    <button
                      onClick={handleLogin} // Chama a função de login
                      className="flex items-center px-3 py-2 rounded-md text-lg my-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <i className="fas fa-sign-in-alt mr-2"></i>
                      Login
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export const username = "Sérgio";
export default NavBar;
