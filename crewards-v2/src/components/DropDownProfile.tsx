import React from "react";
import { AnimatePresence, motion } from "framer-motion"; // Importa o motion do framer-motion
import { username } from "./NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface DropDownProfileProps {
  toggleLogin: () => void; // Define a função de alternância como prop
}

const DropDownProfile: React.FC<DropDownProfileProps> = ({ toggleLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    if (location.pathname.startsWith("/profile")) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo
    } else {
      navigate("/profile"); // Navega para a página do CSGOEmpire
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col dropDownProfile overflow-hidden text-base text-zinc-500 bg-[#111418] border-zinc-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col gap-4">
          <li className="flex items-center text-sm text-white px-2 py-3 bg-zinc-800 rounded-md overflow-hidden">
            <img
              src="/logo2.png"
              alt="User Icon"
              className="w-8 h-8 mr-2 ml-1 rounded-full"
            />
            <span className="mr-8">{username}</span>
          </li>
          <li className="cursor-pointer hover:text-white">
            <Link
              to="/profile"
              onClick={() => handleSettingsClick()}
              className={`cursor-pointer transition-colors duration-300 ${
                location.pathname === "/profile"
                  ? "text-white"
                  : "hover:text-white"
              }`}
            >
              <i className="fas fa-cog mx-1"></i> Settings
            </Link>
          </li>
          <li
            className="cursor-pointer transition-colors duration-300 hover:text-white"
            onClick={toggleLogin}
          >
            <i className="fas fa-sign-out-alt mx-1"></i> Logout
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default DropDownProfile;
