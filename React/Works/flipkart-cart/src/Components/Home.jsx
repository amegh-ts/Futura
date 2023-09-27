import React from 'react'
import './Home.css'
import navimg2 from './Assets/navimg1.svg'
import navimg1 from './Assets/navimg2.svg'
import cardimg1 from './Assets/card-img-1.png'
import cardimg2 from './Assets/card-img-2.png'

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

                <div className="card-container">
                    <div className="card-card">
                        <span className="card-text">1</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1"><span>vegies</span></span>
                        <span className="card-text3"><span>Price : $20</span></span>
                        <button className='card-add-to-cart-button'>
                            <span className="card-text5">Add To Cart</span>
                        </button>

                    </div>

                    <div className="card-card">
                        <span className="card-text">2</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1"><span>vegies</span></span>
                        <span className="card-text3"><span>Price : $20</span></span>
                        <button className='card-add-to-cart-button'>
                            <span className="card-text5">Add To Cart</span>
                        </button>
                    </div>

                    <div className="card-card">
                        <span className="card-text">3</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1"><span>vegies</span></span>
                        <span className="card-text3"><span>Price : $20</span></span>
                        <button className='card-add-to-cart-button'>
                            <span className="card-text5">Add To Cart</span>
                        </button>
                    </div>

                    <div className="card-card">
                        <span className="card-text">4</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1"><span>vegies</span></span>
                        <span className="card-text3"><span>Price : $20</span></span>
                        <button className='card-add-to-cart-button'>
                            <span className="card-text5">Add To Cart</span>
                        </button>
                    </div>

                    <div className="card-card">
                        <span className="card-text">5</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1"><span>vegies</span></span>
                        <span className="card-text3"><span>Price : $20</span></span>
                        <button className='card-add-to-cart-button'>
                            <span className="card-text5">Add To Cart</span>
                        </button>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default Home