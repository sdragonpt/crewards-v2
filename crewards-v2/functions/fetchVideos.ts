// functions/fetchVideos.ts

import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const handler: Handler = async (event) => {
  const channelId = process.env.VITE_REACT_APP_YOUTUBE_CHANNEL_ID;
  const apiKeys = [
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY1,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY2,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY3,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY4,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY5,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY6,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY7,
    // Adicione mais chaves se necessário
  ];

  let responseBody = null;

  for (const apiKey of apiKeys) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=20`
      );

      if (res.ok) {
        responseBody = await res.json();
        break; // Sai do loop se a chamada for bem-sucedida
      }
    } catch (error) {
      console.error(`Error fetching videos with API key:`, error);
    }
  }

  if (!responseBody) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Unable to fetch videos." }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
};

export { handler };
