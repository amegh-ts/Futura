import React from 'react';
import './Home.css'
import logo from './Assets/logo.png'

function Home() {
  return (
    <div className='main'>
      <div class="navbar">
            <div className='nav_name'>
                <img src={logo} alt="" />
                <h1>Medi care+</h1>
            </div>
            <div className='nav_links'>
                <a href="#">Subscribe</a>
                <a href="#">Contact</a>
                <div className='search'>
                    <input type="text" placeholder='Enter the prompt'/>
                </div>
            </div>
        </div>


    </div>
  );
}

export default Home;
