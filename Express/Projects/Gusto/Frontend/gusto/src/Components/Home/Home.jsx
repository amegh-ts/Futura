import React from 'react'
import './Home.css'

const Home = () => {
    return (

        // main contents
        <body>
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
            <body className='container'>
                    <div className="container-box">
                        <img src="/img/c1.png" alt="" />
                        <h3>11:00 am - 8:00 pm</h3>
                        <p>Working Hours</p>
                    </div>

                    <div className="container-box">
                        <img src="/img/c2.png" alt="" />
                        <h3>Pantheerankave, Calicut-19</h3>
                        <p>Get Direction</p>
                    </div>

                    <div className="container-box">
                        <img src="/img/c3.png" alt="" />
                        <h3>+91 8945712567</h3>
                        <p>Call Us Now</p>
                    </div>
                </body>
        </body>

    )
}

export default Home