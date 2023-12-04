import React, { useState } from 'react';
import { musicDl } from './ApiCalls';

const Main = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
    console.log('Url====', videoUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Request Payload:', { videoUrl }); // Log the payload
      const result = await musicDl({ videoUrl });
      console.log('Download successful:', result);
      // Provide user feedback, update UI, etc.
    } catch (error) {
      console.log('Error:', error);
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
