import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAnchorClick = (anchorId: string) => {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (anchorId: string) => {
    return location.pathname === "/" && location.hash === `#${anchorId}`;
  };

  return (
    <nav className="fixed top-0 w-full bg-neutral-900 bg-opacity-15 backdrop-blur-lg lg:py-4 z-30 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-20 w-auto" src="./logo.png" alt="Logo" />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-lg font-extrabold text-zinc-600">
              <Link
                to="/"
                onClick={handleHomeClick}
                className={`px-3 py-2 rounded-md cursor-pointer ${location.pathname === "/" ? "text-white" : "hover:text-white"}`}
              >
                Home
              </Link>
              <a
                onClick={() => handleAnchorClick("rewards")}
                className={`px-3 py-2 rounded-md cursor-pointer ${isActive("rewards") ? "text-white" : "hover:text-white"}`}
              >
                Rewards
              </a>
              <a
                onClick={() => handleAnchorClick("challenges")}
                className={`px-3 py-2 rounded-md cursor-pointer ${isActive("challenges") ? "text-white" : "hover:text-white"}`}
              >
                Challenges
              </a>
              <a
                onClick={() => handleAnchorClick("video-bar")}
                className={`px-3 py-2 rounded-md cursor-pointer ${isActive("video-bar") ? "text-white" : "hover:text-white"}`}
              >
                Videos
              </a>
              <Link
                to="/leaderboard"
                className={`px-3 py-2 rounded-md cursor-pointer ${location.pathname === "/leaderboard" ? "text-white" : "hover:text-white"}`}
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
