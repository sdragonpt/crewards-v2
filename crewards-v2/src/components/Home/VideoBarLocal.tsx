import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const VideoBarLocal: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragging, setDragging] = useState(false);

  // API keys
  const API_KEYS = [
    import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY1,
    import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY2,
    import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY3,
    import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY4,
    import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY5,
    import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY6,
    import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY7,
  ];

  const channelId = import.meta.env.VITE_REACT_APP_YOUTUBE_CHANNEL_ID;

  const fetchVideos = async () => {
    let data = null;

    for (let i = 0; i < API_KEYS.length; i++) {
      const API_KEY = API_KEYS[i];
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&maxResults=20`
        );
        if (response.ok) {
          data = await response.json();
          setVideos(data.items); // Success
          break; // Stops
        } else if (response.status === 403) {
          console.warn(`API key ${i + 1} returns error 403. Try next key...`);
          continue; // Goes to the next key
        } else {
          console.error(`Error getting videos: ${response.statusText}`);
          return; // Other errors
        }
      } catch (error) {
        console.error(`API key ${i + 1} fail with error:`, error);
        continue; // Goes to the next key
      }
    }

    if (!data) {
      console.error("Every key fail.");
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

  // Handlers para toque
  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    const startX = touch.clientX;
    const scrollLeft = videoContainerRef.current?.scrollLeft || 0;

    const handleTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].clientX - startX;
      if (videoContainerRef.current) {
        videoContainerRef.current.scrollLeft = scrollLeft - x;
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
      className="relative min-h-screen flex flex-col justify-center bg-[#0E0E0E] lg:pb-8 lg:pt-16 pb-20"
    >
      <span className="flex text-left items-center absolute top-[3vw] md:top-[7vw] left-[6%] md:left-[12%] font-workSans">
        <img
          src="/icons/star.png"
          alt="Imagem do botão"
          className="w-8 h-8 object-contain mr-2"
        />
        <p className="text-[8vw] md:text-[2vw] font-workSans text-white z-20 font-bold">
          Highlights
        </p>
      </span>
      <div
        {...handlers}
        ref={videoContainerRef}
        className="relative bg-[#191919] rounded-xl p-2 mx-6 md:max-w-[80%] 2xl:max-w-[70%] z-10 md:mt-20 md:left-1/2 md:transform md:-translate-x-1/2"
        style={{ height: "auto", overflow: "hidden" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart} // Adiciona o handler de toque
      >
        <div
          className="flex space-x-4"
          style={{ cursor: "grab", justifyContent: "flex-start" }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="min-w-[300px] 2xl:min-w-[380px] flex flex-col rounded-lg p-4"
              onMouseDown={handleMouseDown}
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
  );
};

export default VideoBarLocal;
