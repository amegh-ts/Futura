import React from 'react'
import './Main.css'
import { BsSearch } from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import navlogo from './Assets/logo.png'
import womanincart from './Assets/woman-in-cart.png'
import Body from './Body';

const Main = () => {
    return (
        <div className='main-div'>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Pacifico:wght@400&amp;display=swap"
                data-tag="font"
            />
            <header className='nav-bar'>
                <div className='nav-logo'>
                    <img src={navlogo} alt="" />
                </div>
                <div className='nav-navigation'>
                    <ul class="list">
                        <li><a href="#" class="link">
                            Home</a></li>
                        <li><a href="#" class="link  ">
                            Shop</a></li>
                        <li><a href="#" class="link">
                            Pages</a></li>
                        <li><a href="#" class="link ">
                            About Us</a></li>
                        <li><a href="#" class="link">
                            Lookups</a></li>
                    </ul>
                </div>
                <div className='nav-search'>
                    <input type="text" placeholder="Search..." className='nav-search-input' />
                    <div className='nav-serch-icon'>
                        <BsSearch />
                    </div>
                </div>
                <div className='nav-end'>
                    <div className='nav-cart'>
                        <div className='nav-cart-child'>
                            <BsCart3 />
                            <span className='nav-cart-label'>Cart</span>
                        </div>
                        <span>|</span>
                        <div className='nav-cart-child'>
                            <span>10</span>
                        </div>
                    </div>
                    <div className='nav-cart2'>
                        <div className='nav-cart-child'>
                            <BsPerson />
                            <span className='nav-cart-label'>Profile</span>
                            <ul class="dropdown">
                                <li><a href="#">Laptops</a></li>
                                <li><a href="#">Monitors</a></li>
                                <li><a href="#">Printers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <div className="banner">
                    <div className="row">
                        <div>
                            <img src={womanincart} alt="" />
                        </div>
                        <div className='banner-content'>
                            <h1>fash<span className="i">i</span>on</h1>
                            <div>
                                <button className='banner-button'>Explore Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Body />
            </div>




        </div>
    )
}

export default Main