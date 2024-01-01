import React from 'react';
import bg1 from '../Assets/Videos/grass.mp4';
import bg2 from '../Assets/Videos/cereal.mp4';
import bg3 from '../Assets/Videos/rain.mp4';
import { AiOutlineSwapRight } from "react-icons/ai";

const videoSources = [bg1, bg2, bg3];

const getRandomVideoSource = () => {
  const randomIndex = Math.floor(Math.random() * videoSources.length);
  return videoSources[randomIndex];
};





const Home = () => {
  const randomVideoSource = getRandomVideoSource();

  return (
    <div className='home-main'>
      <div className="home-bg">
        <video src={randomVideoSource} autoPlay loop muted></video>
      </div>
      <div className="home-content">
        <h1>Unloack your Travel dreams with us</h1>
        <p>Discover the world's most adventurous nature. Life is so short for a trip.</p>
        <button >Get started <AiOutlineSwapRight className='icon'/></button>
      </div>

      <div className="popular-places">
        <div className="contents">
            <h3>Popular places</h3>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
