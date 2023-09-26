import React from 'react'
import './Home.css'
import navimg2 from './Assets/navimg1.svg'
import navimg1 from './Assets/navimg2.svg'
import cardimg1 from './Assets/card-img-1.png'
import cardimg2 from './Assets/card-img-2.png'

const Home = () => {
    return (
        <div>
            <div class='main-div'>

                {/******************* navbar ******************/}
                <div class="navbar-container">
                    <div class="navbar-navbar">
                        <img
                            src={navimg1}
                            alt="flipkart095e08113"
                            class="navbar-flipkart095e081"
                        />
                        <img
                            src={navimg2}
                            alt="headercarteed150115"
                            class="navbar-headercarteed1501"
                        />
                        <span class="navbar-text"><span>Items :</span></span>
                        <span class="navbar-text2">0</span>
                    </div>
                </div>

                {/*************************** cards body *****************************/}

                <div class="card-container">
                    <div class="card-card">
                        <span class="card-text">1</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            class="card-grocerygettyf1"
                        />
                        <span class="card-text1"><span>vegies</span></span>
                        <span class="card-text3"><span>Price : $20</span></span>
                        <button class='card-add-to-cart-button'>
                            <span class="card-text5">Add To Cart</span>
                        </button>

                    </div>

                    <div class="card-card">
                        <span class="card-text">2</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            class="card-grocerygettyf1"
                        />
                        <span class="card-text1"><span>vegies</span></span>
                        <span class="card-text3"><span>Price : $20</span></span>
                        <button class='card-add-to-cart-button'>
                            <span class="card-text5">Add To Cart</span>
                        </button>
                    </div>

                    <div class="card-card">
                        <span class="card-text">3</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            class="card-grocerygettyf1"
                        />
                        <span class="card-text1"><span>vegies</span></span>
                        <span class="card-text3"><span>Price : $20</span></span>
                        <button class='card-add-to-cart-button'>
                            <span class="card-text5">Add To Cart</span>
                        </button>
                    </div>

                    <div class="card-card">
                        <span class="card-text">4</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            class="card-grocerygettyf1"
                        />
                        <span class="card-text1"><span>vegies</span></span>
                        <span class="card-text3"><span>Price : $20</span></span>
                        <button class='card-add-to-cart-button'>
                            <span class="card-text5">Add To Cart</span>
                        </button>
                    </div>

                    <div class="card-card">
                        <span class="card-text">5</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            class="card-grocerygettyf1"
                        />
                        <span class="card-text1"><span>vegies</span></span>
                        <span class="card-text3"><span>Price : $20</span></span>
                        <button class='card-add-to-cart-button'>
                            <span class="card-text5">Add To Cart</span>
                        </button>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default Home