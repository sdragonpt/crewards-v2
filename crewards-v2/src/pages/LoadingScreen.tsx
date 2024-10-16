import React, { useEffect, useState } from "react";
import "../css/LoadingScreen.css";

const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isLoading) {
      // Waits 1 sec to do the transition
      const timer = setTimeout(() => {
        setOpacity(0);
      }, 1000); // 1 sec

      return () => clearTimeout(timer);
    } else {
      // Reset opacity after load
      setOpacity(1);
    }
  }, [isLoading]);

  return (
    <div
      className="loading-screen z-50"
      style={{ opacity, pointerEvents: isLoading ? 'auto' : 'none' }} // No interaction while still loading
    >
      <img
        className="footer-logo w-32 glow-effect-3"
        src="/logo.png"
        alt="Logo"
      />
    </div>
  );
};

export default LoadingScreen;
