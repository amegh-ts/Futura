// Main.js
import React, { useState } from 'react';
import { musicDl, showDetails } from './ApiCalls';
import './Main.css';

const Main = () => {
  const [videoUrl, setVideoUrl] = useState('');
  // const [videoDetails, setVideoDetails] = useState(null);

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleDownload = async () => {
    try {
      const result = await musicDl({ videoUrl });

      if (!result) {
        alert('Download failed. Please try again.');
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
      alert('An error occurred. Please try again.');
    }

  };


// const handleDetails = async () => {
//     try {
//       const details = await showDetails({ videoUrl });
//       console.log('Video Details:', details.videoInfo);

//       // Set the videoDetails state to display in the right div
//       setVideoDetails(details.videoInfo);
//     } catch (error) {
//       console.error('Error fetching video details:', error);
//       // Handle the error as needed
//     }
//   };


  return (
    <div>
      <div className="container">
        <div className='left'>
          <h1>YouTube Downloader</h1>

          <input type="text" value={videoUrl} onChange={handleInputChange} placeholder='Paste the url here' />
          <div>
            {/* <button onClick={handleDetails}>Show Details</button> */}
            <button onClick={handleDownload}>Download MP3</button>

          </div>
        </div>
        {/* <div className='right'>
          <div>
            
          </div>

        </div> */}
      </div>
    </div>
  );
};

export default Main;
