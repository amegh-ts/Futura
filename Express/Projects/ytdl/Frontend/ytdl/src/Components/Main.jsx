 // Main.js
import React, { useState } from 'react';
import { musicDl } from './ApiCalls';

const Main = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleDownload = async () => {
    try {
      const result = await musicDl({ videoUrl });

      if (!result) {
        setError('Download failed. Please try again.');
        return;
      }

      // Use the additional information from the response
      const { videoTitle, duration, author, thumbnail } = result;

      console.log('Video Title:', videoTitle);
      console.log('Video Duration:', duration);
      console.log('Video Author:', author);
      console.log('Video Thumbnail:', thumbnail);

      const blob = new Blob([result.data], { type: 'audio/mpeg' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${videoTitle}.mp3`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>YouTube to MP3 Downloader</h1>
      <label>
        YouTube Video URL:
        <input type="text" value={videoUrl} onChange={handleInputChange} />
      </label>
      <button onClick={handleDownload}>Download MP3</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Main;
