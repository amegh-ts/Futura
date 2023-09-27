import React from 'react'
import './Home.css'
import navimg2 from './Assets/navimg1.svg'
import navimg1 from './Assets/navimg2.svg'
import Body from './Body'


const Home = () => {
    return (
        <div className='main'>
            <div className='main-div'>

                {/******************* navbar ******************/}
                <div className="navbar-container">
                    <div className="navbar-navbar">
                        <img
                            src={navimg1}
                            alt="flipkart095e08113"
                            className="navbar-flipkart095e081"
                        />
                        <img
                            src={navimg2}
                            alt="headercarteed150115"
                            className="navbar-headercarteed1501"
                        />
                        <span className="navbar-text"><span>Items :</span></span>
                        <span className="navbar-text2">0</span>
                    </div>
                </div>

                {/*************************** cards body *****************************/}

                <div className='main-body'>
                    <Body/>
                </div>






            </div>
        </div>
    )
}

export default Home