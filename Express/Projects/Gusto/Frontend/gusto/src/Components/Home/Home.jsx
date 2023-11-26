import React from 'react'
import './Home.css'

const Home = () => {
  return (

    // main contents
    <section className='home-main' id='home-main'>
        <div className='home-text'>
            <h1>Meet, <span>Eat &</span><br />Enjoy The true <br />taste</h1>
            <button className='h-btn'>Explore Menu </button>
            <button className='h-btn2'>Order Now</button>            
        </div>
        <div className='home-img'>
            <img src="/img/hero.png" alt="" />
        </div>

  
    </section>

    
  )
}

export default Home