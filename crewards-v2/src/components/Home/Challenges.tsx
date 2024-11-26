import React, { useRef, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface Challenge {
  id: string;
  title: string;
  provider: string;
  description: string;
  thumbnail: string;
  rewardValue: string;
  rewardImage: string;
  glowColor: string;
}

const Challenges: React.FC = () => {
  // List of challenges
  const challenges: Challenge[] = [
    {
      id: "hacksaw-slayers-inc-96",
      title: "Slayers Inc",
      provider: "Hacksaw Gaming",
      description: "First to hit 750x with minimum $0.20 bet",
      thumbnail: "slayers.png",
      rewardValue: "150.00",
      rewardImage: "usd.png",
      glowColor: "rgba(186, 215, 1, 0.5)",
    },
    {
      id: "hacksaw-six-six-six-96",
      title: "SixSixSix",
      provider: "Hacksaw Gaming",
      description: "First to hit 666x with minimum $0.20 bet",
      thumbnail: "six.png",
      rewardValue: "125.00",
      rewardImage: "usd.png",
      glowColor: "rgba(254, 1, 33, 0.5)",
    },
    {
      id: "nolimit-apocalypse",
      title: "Apocalypse",
      provider: "No Limit",
      description: "First to hit 888x with minimum $0.20 bet",
      thumbnail: "apocalypse.png",
      rewardValue: "175.00",
      rewardImage: "usd.png",
      glowColor: "rgba(51, 177, 26, 0.5)",
    },
    {
      id: "originals/keno",
      title: "Keno",
      provider: "Shuffle",
      description: "First to hit 500x with minimum $0.20 bet",
      thumbnail: "keno.png",
      rewardValue: "100.00",
      rewardImage: "usd.png",
      glowColor: "rgba(252, 142, 1, 0.5)",
    },
  ];

  const challengesContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
    setDragging(false);
    const startX = event.clientX;
    const scrollLeft = challengesContainerRef.current?.scrollLeft || 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - startX;
      if (challengesContainerRef.current) {
        challengesContainerRef.current.scrollLeft = scrollLeft - x;
        setIsDragging(true);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // New functions for touch events
  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    const startX = touch.clientX;
    const scrollLeft = challengesContainerRef.current?.scrollLeft || 0;

    const handleTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].clientX - startX;
      if (challengesContainerRef.current) {
        challengesContainerRef.current.scrollLeft = scrollLeft - x;
        setDragging(true);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleClick = (gameId: string) => {
    if (!isDragging && !dragging) {
      window.open(`https://shuffle.com/games/${gameId}`, "_blank");
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped Left"),
    onSwipedRight: () => console.log("Swiped Right"),
    trackMouse: true,
  });

  useEffect(() => {
    if (location.hash === "#challenges") {
      const element = document.getElementById("challenges");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div
      id="challenges"
      className="relative md:min-h-screen custom-min-h-1 flex flex-col items-center justify-center bg-[#0E0E0E] font-workSans"
    >
      <div className="w-[68%]  md:mt-[6vw]">
        <div className="flex items-center">
          <img
            src="/icons/trophy.png"
            alt="Imagem do botão"
            className="w-5 h-5 object-contain mr-2"
          />
          <span className="font-bold font-workSans text-base text-white text-[1.2vw]">
            Challenges
          </span>
        </div>
        <div
          {...handlers}
          ref={challengesContainerRef}
          className="flex justify-between mt-6"
          style={{ height: "full", width: "auto", overflow: "hidden" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart} // Add touch event handler
        >
          <div
            className="flex space-x-4"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              justifyContent: "flex-start",
            }}
          >
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="flex flex-col rounded-xl bg-[#191919] md:w-[18%]"
                onMouseDown={handleMouseDown}
                onClick={() => handleClick(challenge.id)}
              >
                <img
                  src={challenge.thumbnail}
                  alt={challenge.title}
                  className="rounded-3xl w-auto transition-transform transform hover:scale-105 p-4"
                />
                <div className="px-4">
                  <p className="text-white font-bold text-base">
                    {challenge.title}
                  </p>
                  <p className="text-[#B2B2B2] font-medium text-sm">
                    {challenge.provider}
                  </p>
                  <p className="text-[#B2B2B2] font-semibold text-sm mt-4">
                    CHALLENGE
                  </p>
                  <p className="text-[5vw] md:text-sm font-normal text-white text-left min-w-[40vw] md:min-w-0">
                    {challenge.description}
                  </p>
                  <div className="mt-1 mb-4">
                    <p className="text-[#B2B2B2] font-semibold text-sm mt-4">
                      REWARD
                    </p>
                    <div className="flex items-center">
                      <img
                        src={challenge.rewardImage}
                        alt="Reward"
                        className="w-4 h-4 mr-1"
                      />
                      <span className="text-base font-semibold text-white ml-1">
                        ${challenge.rewardValue}
                      </span>
                    </div>
                  </div>
                  <hr className="border-[#3F3F3F] mb-6" />
                  <img
                    src="/logo4.png"
                    alt="Shuffle Logo"
                    className="w-28 object-contain mb-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
