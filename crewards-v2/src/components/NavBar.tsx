import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [, setActiveLink] = useState<string>("");

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
  }

  // Smooth transition to the anchor
  const handleAnchorClick = (anchorId: string) => {
    if (location.pathname === "/leaderboard") {
      setTargetAnchor(anchorId);
      navigate("/");
    } else if (location.pathname === "/") {
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
    <nav className="fixed top-0 w-full bg-neutral-900 bg-opacity-15 backdrop-blur-lg lg:py-4 z-30 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-20 w-auto" src="./logo.png" alt="Logo" />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-lg text-zinc-500 relative">
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
