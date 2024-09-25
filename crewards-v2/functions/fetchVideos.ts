import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const handler: Handler = async () => {
  const channelId = process.env.VITE_REACT_APP_YOUTUBE_CHANNEL_ID;
  const apiKeys = [
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY1,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY2,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY3,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY4,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY5,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY6,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY7,
  ];

  let videos = null;

  for (const apiKey of apiKeys) {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=20`);
      
      if (response.ok) {
        videos = await response.json();
        break; // Se o fetch for bem-sucedido, sai do loop
      } else {
        console.error(`API key returned error: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching with API key: ${apiKey}`, error);
    }
  }

  if (!videos) {
    return { statusCode: 400, body: JSON.stringify({ error: "Unable to fetch videos." }) };
  }

  return { statusCode: 200, body: JSON.stringify(videos) };
};

export { handler };
