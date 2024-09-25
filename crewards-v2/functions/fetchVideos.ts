import { Handler } from '@netlify/functions';

const handler: Handler = async () => {
  const API_KEYS = [
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY1,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY2,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY3,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY4,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY5,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY6,
    process.env.VITE_REACT_APP_YOUTUBE_API_KEY7,
  ];
  
  const channelId = process.env.VITE_REACT_APP_YOUTUBE_CHANNEL_ID;
  let data = null;

  for (let i = 0; i < API_KEYS.length; i++) {
    const API_KEY = API_KEYS[i];

    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&maxResults=20`);
      if (response.ok) {
        data = await response.json();
        break;
      } else {
        console.error(`API key ${i + 1} failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error(`API key ${i + 1} encountered an error:`, error);
    }
  }

  if (!data) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Unable to fetch videos.' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };