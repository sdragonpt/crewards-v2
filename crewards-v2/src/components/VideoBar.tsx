import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const VideoBar: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragging, setDragging] = useState(false); // Nova variável para controlar o arrasto

  // API from YouTube
  const fetchVideos = async () => {
    const API_KEY = "AIzaSyAFE7xyEwMp_NYdNoFxx9fM4iCdCWiGWGw"; // Adicione sua API Key aqui
    const channelId = "UCq2mL-HDRp-VYTS5Kb2cDJA"; // ID do canal
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&maxResults=10`
    );
    const data = await response.json();
    setVideos(data.items);
  };

  useEffect(() => {
    fetchVideos();
    const interval = setInterval(fetchVideos, 6 * 60 * 60 * 1000); // Atualiza a cada 6 horas
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
    setDragging(false); // Resetando o estado de arrasto
    const startX = event.clientX;
    const scrollLeft = videoContainerRef.current?.scrollLeft || 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - startX;
      if (videoContainerRef.current) {
        videoContainerRef.current.scrollLeft = scrollLeft - x;
        setDragging(true); // Marcando que estamos arrastando
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

  const handleClick = (videoId: string, event: React.MouseEvent) => {
    if (!isDragging && !dragging) {
      // Só abre o link se não for um arrasto
      window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped Left"),
    onSwipedRight: () => console.log("Swiped Right"),
    trackMouse: true,
  });

  return (
    <div id="video-bar" className="relative min-h-screen flex flex-col justify-center bg-[#171414] pb-8 pt-8">
      <div
        className="absolute inset-0 bg-black opacity-70 z-0"
        style={{ backgroundImage: "url('background2.png')" }}
      />
      <h1 className="text-5xl font-bold text-white mb-12 text-center z-10">
        VIDEOS
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
                className="rounded-lg transition-transform transform hover:scale-110" // Adicionada a classe hover
              />
              <h3 className="text-lg font-semibold text-white text-left mt-2">
                {video.snippet.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <img
                    src="pfpic.png"
                    alt={video.snippet.channelTitle}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-white ml-2 font-semibold">
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
