import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about'>
        <div className="about-main">
            <div className="about-img">
                <img src="/img/about.png" alt="" />
            </div>

            <div className="about-text">
                <h2>Living well begins <br />with eating well</h2>
                <p>Over its history as a food, the main uses of honey are in cooking, baking, desserts, as a spread on bread, as an addition to various beverages such as tea, and as a sweetener in some commercial beverages.<br/><br /> Due to its energy density, honey is an important food for virtually all hunter-gatherer cultures in warm climates, with the Hadza people ranking honey as their favorite food.</p>
                <button className='h-btn'>Explore Menu </button>

            </div>
        </div>
    </section>
  )
}

export default About