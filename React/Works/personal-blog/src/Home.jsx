 import React from 'react';
import './Home.css';
import { BsSearch } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';


import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';
import img6 from './Assets/img6.jpg';

function    Home() {
  return (
    <div className='main'>
        <div class="navbar">
            <div className='nav_name'>
                <h3>John Wick</h3>
                <h4>Your Productivity Guru</h4>
            </div>
            <div className='nav_links'>
                <a href="#">Subscribe</a>
                <a href="#">Contact</a>
                <div className='search'>
                    <BsSearch/>
                    <input type="text" placeholder='Enter the prompt'/>
                </div>
            </div>
        </div>

        {/******************** *********************/}
        <div className='body'>
            <div className='bg_body'>
                <div className='bg_body_cont'>
                    <div className='contents'>
                    <h1>Boost Your <br /> Success</h1>
                    <h2>Tips and tools for <br /> a productive mindset</h2>
                    <div className='bg_icons'>
                        <ImFacebook className='bg_icon'/>
                        <BsTwitter className='bg_icon'/>
                        <BiLogoLinkedin className='bg_icon'/>
                        <BsInstagram className='bg_icon'/>
                    </div>
                    </div>
                </div> 
            </div>

            <div className='useless'>
                    <div className='post_main'>
                        <div className='post_nav'>
                            <div className='post_nav1'>
                                <a href="#">All Posts</a>
                                <a href="#">Motivation</a>
                                <a href="#">Success</a>
                                <a href="#">Self Improvement</a>
                            </div>
                            <div className='post_nav2'>
                                <button>Log in / Sign up</button>
                            </div>
                        </div>
                        <div className='container_m'>

                            {/* Left */}

                            <div className='side'>
                                <div className='cards'>
                                    <img className='imgs' src={img1} alt="" />
                                    <div class="card_content">
                                        <p>Aug 13 : 1 min</p>
                                        <h2>3 Things the most resilient people do every day</h2> 
                                        <h4>Resilient people practice daily habits that help them navigate challenges and maintain a positive outlook...</h4> 
                                    </div>
                                </div>
                                <div className='cards'>
                                    <img className='imgs' src={img4} alt="" />
                                    <div class="card_content">
                                        <p>Aug 13 : 1 min</p>
                                        <h2>Do you have impostor syndrome?</h2> 
                                        <h4>Impostor syndrome is a common feeling of self-doubt and inadequacy despite evidence of one's accomplishments...</h4> 
                                    </div>
                                </div>
                                <div className='cards'>
                                    <img className='imgs' src={img6} alt="" />
                                    <div class="card_content">
                                        <p>Aug 13 : 1 min</p>
                                        <h2>How to recharge on low battery workdays</h2> 
                                        <h4>Discover strategies to boost your energy and motivation when you're feeling drained at work...</h4> 
                                    </div>
                                </div>
                            </div>

                            {/* right */}

                            <div className='side'>
                                <div className='cards'>
                                    <img className='imgs' src={img2} alt="" />
                                    <div class="card_content">
                                        <p>Aug 13 : 1 min</p>
                                        <h2>Clues you should stop being a people pleaser</h2> 
                                        <h4>Identify signs that you may be prioritizing others\' needs at the expense of your own well-being...</h4> 
                                    </div>
                                </div>
                                <div className='cards'>
                                    <img className='imgs' src={img3} alt="" />
                                    <div class="card_content">
                                        <p>Aug 13 : 1 min</p>
                                        <h2>How to make faster & better decisions</h2> 
                                        <h4>Learn techniques to improve your decision-making skills and avoid common pitfalls...</h4> 
                                    </div>
                                </div>
                                <div className='cards'>
                                    <img className='imgs' src={img5} alt="" />
                                    <div class="card_content">
                                        <p>Aug 13 : 1 min</p>
                                        <h2>Thinking with visual mind maps</h2> 
                                        <h4>Explore the benefits of using visual mind maps for organizing thoughts and enhancing creativity...</h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <AiOutlineCopyrightCircle/>
                        2035 by Amegh. Powered and secured by AMZ
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Home