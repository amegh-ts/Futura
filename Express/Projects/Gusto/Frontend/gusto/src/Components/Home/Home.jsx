import React from 'react'
import './Home.css'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <section className='home-main' id='home-main'>
        <div className='home-text'>
            <h1>Meet, <span>Eat &</span><br />Enjoy The true <br />taste</h1>
            <li>Explore Menu <span><IoArrowForwardCircleOutline /></span></li>
            <li>Order Now</li>
        </div>
        <div className='home-img'>
            <img src="/img/hero.png" alt="" />
        </div>
    </section>
  )
}

export default Home