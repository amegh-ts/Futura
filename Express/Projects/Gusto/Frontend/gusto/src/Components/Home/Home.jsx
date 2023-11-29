import React from 'react';
import './Home.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the CSS for blur effect


const Home = () => {
    return (
        <body>
            <section className='home-main' id='home-main'>
                <div className='home-text'>
                    <h1>Meet, <span>Eat &</span><br />Enjoy The true <br />taste</h1>
                    <button className='h-btn'>Explore Menu </button>
                    <button className='h-btn2'>Order Now</button>
                </div>
                <div className='home-img'>
                <LazyLoadImage src="/img/hero.png" alt="" effect="blur" />
                </div>
            </section>

            <div className='container'>
                <div className="container-box">
                    <LazyLoadImage src="/img/c1.png" alt="" effect="blur" />

                    <h3>11:00 am - 8:00 pm</h3>
                    <p>Working Hours</p>
                </div>

                <div className="container-box">
                    <img src="/img/c2.png" alt="" loading="lazy" />
                    <LazyLoadImage src="/img/hero.png" alt="" effect="blur" />

                    <h3>Pantheerankave, Calicut-19</h3>
                    <p>Get Direction</p>
                </div>

                <div className="container-box">
                    <img src="/img/c3.png" alt="" loading="lazy" />
                    <LazyLoadImage src="/img/hero.png" alt="" effect="blur" />

                    <h3>+91 8945712567</h3>
                    <p>Call Us Now</p>
                </div>
            </div>
        </body>
    )
}

export default Home;
