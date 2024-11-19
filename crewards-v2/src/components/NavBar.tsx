import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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

  const [activeLinkWidth, setActiveLinkWidth] = useState(0);
  const [activeLinkOffset, setActiveLinkOffset] = useState(0);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navLinks = [
    {
      path: "/",
      label: "HOME",
      icon: "/icons/home-roof.png",
      iconActive: "/icons/home-roof-0.png",
      isAnchor: false, // Isso indica que é um link normal de página
    },
    {
      path: "/#rewards", // Usando # para identificar a âncora
      label: "REWARDS",
      icon: "/icons/gift-1.png",
      iconActive: "/icons/gift-1-0.png",
      isAnchor: true, // Indica que é uma seção interna da Home
      anchorId: "rewards", // ID da seção dentro da Home
    },
    {
      path: "/#challenges", // Usando # para identificar a âncora
      label: "CHALLENGES",
      icon: "/icons/trophy.png",
      iconActive: "/icons/trophy-0.png",
      isAnchor: true, // Indica que é uma seção interna da Home
      anchorId: "challenges", // ID da seção dentro da Home
    },
    {
      path: "/#video-bar", // Usando # para identificar a âncora
      label: "VIDEOS",
      icon: "/icons/video.png",
      iconActive: "/icons/video-0.png",
      isAnchor: true, // Indica que é uma seção interna da Home
      anchorId: "videos-bar", // ID da seção dentro da Home
    },
    {
      path: "/vip/csgoempire",
      label: "VIP",
      icon: "/icons/sparkles-two-2.png",
      iconActive: "/icons/sparkles-two-2-0.png",
      isAnchor: false,
    },
    {
      path: "/leaderboard",
      label: "LEADERBOARD",
      icon: "/icons/flag-2.png",
      iconActive: "/icons/flag-2-0.png",
      isAnchor: false,
    },
  ];

  useEffect(() => {
    const activeLinkIndex = navLinks.findIndex((link) => {
      // Verifica se existe um hash na URL
      if (location.hash) {
        // Se houver hash, compara com o anchorId do link
        return location.hash === `#${link.anchorId}`;
      }
      // Caso não tenha hash, usa o pathname
      return link.path === location.pathname;
    });

    if (activeLinkIndex >= 0) {
      const activeLink = linkRefs.current[activeLinkIndex];
      if (activeLink) {
        // Agora garantimos que activeLink não seja null
        setActiveLinkWidth(activeLink.offsetWidth);
        setActiveLinkOffset(activeLink.offsetLeft);
      }
    }
  }, [location.pathname, location.hash]);

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

  const handleSettingsClick = () => {
    if (location.pathname.startsWith("/profile")) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
    } else {
      navigate("/profile"); // Navega para a página do CSGOEmpire
    }
  };

  useEffect(() => {
    // Feche o menu quando a URL mudar para as páginas específicas
    if (
      location.pathname === "/vip/csgoempire" ||
      location.pathname === "/vip/shuffle" ||
      location.pathname === "/leaderboard" ||
      location.pathname === "/profile" ||
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

  // const handleVipClick = () => {
  //   if (location.pathname.startsWith("/vip/")) {
  //     window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
  //   } else {
  //     navigate("/vip/csgoempire"); // Navega para a página do CSGOEmpire
  //   }
  // };

  const handleAnchorClick = (anchorId: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Se já estiver na página home, rola até a âncora diretamente
    if (location.pathname === "/" && location.hash !== `#${anchorId}`) {
      // Atualiza o hash na URL, mas sem recarregar a página
      window.history.pushState(null, "", `/#${anchorId}`);

      setTimeout(() => {
        scrollToElement();
      }, 100);
    } else if (location.pathname === "/leaderboard") {
      // Se estiver na página do leaderboard, navega para a home e depois faz o scroll
      navigate("/");
      setTimeout(() => {
        scrollToElement();
      }, 300); // Atraso para garantir a navegação
    } else if (
      location.pathname === "/vip/csgoempire" ||
      location.pathname === "/vip/shuffle"
    ) {
      // Se estiver em /vip/csgoempire ou /vip/shuffle, vai para a home e depois rola até a âncora
      navigate("/");
      setTimeout(() => {
        // Verifica se a navegação foi concluída antes de rolar para o topo
        const rewardsElement = document.getElementById(anchorId);
        if (rewardsElement) {
          rewardsElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Atraso para garantir a navegação
    } else if (location.pathname.includes("/profile")) {
      // Se estiver em /profile, navega para a home
      navigate("/");
    } else {
      // Se estiver em uma página diferente de "/"
      navigate("/"); // Navega para a Home

      // Após a navegação, rola até o elemento da âncora
      setTimeout(() => {
        scrollToElement();
      }, 300); // Atraso para garantir que a navegação ocorreu antes de rolar
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

  // // Check if the anchor is active
  // const isActive = (anchorId: string) => {
  //   return location.pathname === "/" && location.hash === `#${anchorId}`;
  // };

  const handleLogin = () => {
    setIsLoggedIn(true); // Define isLoggedIn como true ao fazer login
  };

  return (
    <nav className="fixed top-0 w-full bg-[#111418] bg-opacity-100 lg:bg-neutral-900 lg:bg-opacity-15 lg:backdrop-blur-lg lg:py-4 z-30 border-b border-zinc-800">
      <div className="lg:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-48 2xl:px-28">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center h-24 lg:h-16 lg:relative">
          {/* Logo */}
          <div className="flex-shrink-0 lg:mr-4">
            <img
              onClick={handleHomeClick}
              className="h-20 w-auto mx-auto lg:mx-0"
              src="/logo.png"
              alt="Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="relative flex ml-2 justify-start items-center space-x-4 text-base text-[#B2B2B2] font-sans font-semibold">
            <div
              className="absolute top-[-28px] left-0 h-2 bg-cover transition-transform duration-300"
              style={{
                width: `${activeLinkWidth}px`,
                transform: `translateX(${activeLinkOffset}px)`,
                backgroundImage: "url('/Group.png')",
              }}
            ></div>

            {navLinks.map(
              ({ path, label, icon, iconActive, anchorId }, index) => (
                <Link
                  key={index}
                  to={path}
                  onClick={() => {
                    if (path === "/") {
                      // Se estiver em "Home", rola até o topo
                      handleHomeClick();
                    } else {
                      // Para outros links, chama o handleAnchorClick para rolar até a âncora
                      if (anchorId) {
                        handleAnchorClick(anchorId); // Passa anchorId se não for undefined
                      }
                    }
                  }}
                  className={`relative flex items-center px-1 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
                    location.pathname === path ||
                    location.hash === `#${anchorId}` ||
                    (path.startsWith("/vip") &&
                      location.pathname.startsWith("/vip"))
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                  ref={(el) => (linkRefs.current[index] = el)}
                >
                  <img
                    src={
                      location.pathname === path ||
                      location.hash === `#${anchorId}` ||
                      (path.startsWith("/vip") &&
                        location.pathname.startsWith("/vip"))
                        ? iconActive
                        : icon
                    }
                    alt={`${label} Icon`}
                    className="w-5 mr-2"
                  />
                  {label}
                </Link>
              )
            )}
          </div>

          {/* Login */}
          <div className="flex-shrink-0 lg:ml-auto lg:mr-4">
            {isLoggedIn ? (
              <div className="relative flex items-center">
                <Link to="#" className="rounded-md" onClick={handleLogin}>
                  <img
                    src="/logo2.png"
                    alt="User Icon"
                    className="w-10 h-10 mr-2 rounded-full transition-transform duration-300 hover:scale-110 "
                    onClick={() => setOpenProfile((prev) => !prev)}
                  />
                </Link>
                {openProfile && <DropDownProfile toggleLogin={toggleLogin} />}
              </div>
            ) : (
              <Link
                onClick={handleLogin}
                to="#"
                className="font-workSans font-bold flex items-center justify-center text-zinc-500 px-4 py-2 bg-[#21262C] transition-colors duration-300 hover:bg-zinc-700 rounded-xl"
              >
                SIGN IN
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center h-24 z-40">
          {/* Logo */}
          <div className="flex-shrink-0 mx-auto">
            <a onClick={handleHomeClick}>
              <img className="h-20 w-auto ml-6" src="/logo.png" alt="Logo" />
            </a>
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
              className="fixed top-24 left-0 w-full bg-gradient-to-b from-[#111418] to-[#1B1E22] z-10 border-b-2 border-zinc-600 h-screen overflow-hidden"
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
                        <Link
                          to="/profile"
                          onClick={() => {
                            handleSettingsClick(); // Executa a função de clique
                            setMobileMenuOpen(false); // Fecha o menu após clicar em Settings
                          }}
                          className={`cursor-pointer ${
                            location.pathname === "/profile"
                              ? "text-white"
                              : "hover:text-white"
                          }`}
                        >
                          <i className="fas fa-cog mx-2"></i>
                          Settings
                        </Link>
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
                      className="flex items-center px-3 py-2 rounded-md text-lg my-1 bg-red-600 hover:bg-red-700 text-white"
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
