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

  return (
    <div
      id="video-bar"
      className="relative min-h-screen flex flex-col justify-center bg-[#1B1E22] lg:pb-8 lg:pt-16 pb-20"
    >
      <div
        className="absolute inset-0 bg-black opacity-50 z-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('background2.png')",
          backgroundSize: "120%", // Ajuste o valor conforme necessário
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <h1 className="text-[14vw] md:text-[4vw] font-base text-white z-20 font-thunder absolute top-[6.6vw] left-1/2 transform -translate-x-1/2">
        VIDEOS
      </h1>
      <div
        {...handlers}
        ref={videoContainerRef}
        className="relative bg-zinc-700 bg-opacity-10 rounded-xl p-8 mx-6 lg:mx-24 2xl:mx-48 z-10"
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
              className="min-w-[300px] 2xl:min-w-[400px] flex flex-col rounded-lg p-4"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart} // Add touch event handler
              onClick={(event) => handleClick(video.id.videoId, event)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="rounded-lg transition-transform transform hover:scale-110"
              />
              <h3 className="text-lg text-white text-left mt-2">
                {video.snippet.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <img
                    src="pfpic.png"
                    alt={video.snippet.channelTitle}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-white ml-2">
                    {video.snippet.channelTitle}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(video.snippet.publishedAt).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoBar;
