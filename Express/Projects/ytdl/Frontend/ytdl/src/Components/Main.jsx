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
  
      if (result.success) {
        // Create a Blob from the response data
        const blob = new Blob([result.data], { type: 'audio/mpeg' });
  
        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `${result.filename}.mp3`;
  
        // Trigger a click on the link to start the download
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else {
        setError('Download failed. Please try again.');
      }
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
