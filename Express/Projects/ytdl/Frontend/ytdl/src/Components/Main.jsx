// Main.js
import React, { useState } from 'react';
import { musicDl } from './ApiCalls';

const Main = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await musicDl({ videoUrl });
  
      if (!result) {
        setError('Download failed. Please try again.');
        return;
      }
  
      const blob = new Blob([result.data], { type: 'audio/mpeg' });
  
      // Extract filename from the response headers
      let videoTitle = 'download';
      const contentDispositionHeader = result.headers && result.headers['content-disposition'];
      if (contentDispositionHeader) {
        const match = contentDispositionHeader.match(/filename="(.+?)"/);
        if (match) {
          videoTitle = match[1];
        }
      }
  
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      
      // Ensure the filename is URI-encoded to handle special characters
      link.download = `${encodeURIComponent(videoTitle)}.mp3`;
      
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
      <form onSubmit={handleSubmit}>
        <label>
          YouTube Video URL:
          <input type="text" value={videoUrl} onChange={handleInputChange} />
        </label>
        <button type="submit">Download MP3</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Main;
