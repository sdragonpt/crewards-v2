import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const VideoBar: React.FC = () => {
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
          console.warn(
            `API key ${i + 1} returns error 403. Try next key...`
          );
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
    const interval = setInterval(fetchVideos, 6 * 60 * 60 * 1000); // Updated every 6 hours
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchVideos();
  }, []); // Call once when the component mounts

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
      className="relative min-h-screen flex flex-col justify-center bg-[#171414] pb-8 pt-16"
    >
      <div
        className="absolute inset-0 bg-black opacity-70 z-0"
        style={{ backgroundImage: "url('background2.png')" }}
      />
      <h1 className="text-6xl mb-4 font-bold text-white text-center z-10 font-thunder">
        Videos
      </h1>
      <div
        {...handlers}
        ref={videoContainerRef}
        className="relative bg-zinc-700 bg-opacity-10 rounded-xl p-8 mx-6 lg:mx-24 2xl:mx-48 z-10"
        style={{ height: "auto", overflow: "hidden" }}
        onMouseDown={handleMouseDown}
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
