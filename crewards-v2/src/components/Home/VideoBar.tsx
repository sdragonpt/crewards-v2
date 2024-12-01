import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const VideoBar: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [, setLoading] = useState<boolean>(false);
  const [, setError] = useState<string | null>(null);

  const fetchVideos = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/.netlify/functions/fetchVideos");
      if (response.ok) {
        const data = await response.json();
        setVideos(data.items);
      } else {
        console.error(`Error fetching videos: ${response.statusText}`);
        setError(`Error fetching videos: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error calling function:", error);
      setError("Error calling function");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    fetchVideos();
    const interval = setInterval(fetchVideos, 6 * 60 * 60 * 1000); // Updated every 6 hours
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
    setDragging(false);
    const startX = event.clientX;
    const scrollLeft = videoContainerRef.current?.scrollLeft || 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - startX;
      if (videoContainerRef.current) {
        videoContainerRef.current.scrollLeft = scrollLeft - x;
        setDragging(true);
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
    const scrollLeft = videoContainerRef.current?.scrollLeft || 0;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const x = touch.clientX - startX;
      if (videoContainerRef.current) {
        videoContainerRef.current.scrollLeft = scrollLeft - x;
      }
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleClick = (videoId: string, _event: React.MouseEvent) => {
    if (!isDragging && !dragging) {
      // if not pulled open
      window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped Left"),
    onSwipedRight: () => console.log("Swiped Right"),
    trackMouse: true,
  });

  useEffect(() => {
    if (location.hash === "#video-bar") {
      const element = document.getElementById("video-bar");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div
      id="video-bar"
      className="relative lg:min-h-screen custom-min-h-1 flex flex-col items-center justify-center bg-[#0E0E0E] font-workSans"
    >
      <div className="w-[68%]">
        <div className="flex items-center">
          <img
            src="/icons/star-1.png"
            alt="Imagem do botão"
            className="md:w-[1.3vw] w-5 object-contain mr-2"
          />
          <span className="font-bold font-workSans text-base text-white md:text-[1.4vw]">
            Highlights
          </span>
        </div>
        <div
          {...handlers}
          ref={videoContainerRef}
          className="relative rounded-xl w-full z-10 py-2 -mx-2 mt-[0.5vw] md:left-1/2 md:transform md:-translate-x-1/2"
          style={{ height: "auto", overflow: "hidden" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart} // Add touch event handler
        >
          <div
            className="flex space-x-4"
            style={{ cursor: "grab", justifyContent: "flex-start" }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="min-w-[18vw] flex flex-col p-4 rounded-lg"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart} // Add touch event handler
                onClick={(event) => handleClick(video.id.videoId, event)}
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="rounded-lg transition-transform transform hover:scale-110"
                />
                <h3 className="text-lg text-white font-semibold text-left mt-2">
                  {video.snippet.title}
                </h3>
                <div className="flex justify-between items-center mt-2 ">
                  <div className="text-sm font-bold text-gray-500">
                    {new Date(video.snippet.publishedAt).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBar;
