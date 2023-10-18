import React, { useEffect, useState } from 'react'
import './Main.css'
import { BsSearch } from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import navlogo from './Assets/logo.png'
import womanincart from './Assets/woman-in-cart.png'
import Body from './Body';
import 'font-awesome/css/font-awesome.min.css';


const Main = () => {
    const [icon, setIcon] = useState('fa-smile-o');

    const smile = () => {
        setTimeout(() => {
            setIcon('fa-meh-o');
        }, 1000);
        setTimeout(() => {
            setIcon('fa-frown-o');
        }, 2000);
        setTimeout(() => {
            setIcon('fa-smile-o');
        }, 3000);
    };

    useEffect(() => {
        smile();
        const intervalId = setInterval(() => {
            smile();
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='main-div'>
            <header className='nav-bar'>

                <div className='nav-logo'>
                <i id="div1" className={`fa ${icon}`} />

                    <img src={navlogo} alt="" />

                </div>
                <div className='nav-navigation'>
                    <ul className="list">
                        <li><a href="#" className="link">
                            Home</a></li>
                        <li><a href="#" className="link  ">
                            Shop</a></li>
                        <li><a href="#" className="link">
                            Pages</a></li>
                        <li><a href="#" className="link ">
                            About Us</a></li>
                        <li><a href="#" className="link">
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

                    <button className='nav-cart'>
                        <div className='nav-cart-child'>
                            <BsCart3 />
                            <span className='nav-cart-label'>Cart</span>
                        </div>
                        <span>|</span>
                        <div className='nav-cart-child'>
                            <span>10</span>
                        </div>
                    </button>



                    <div className="dropdown">
                        <button className="dropbtn">
                            <div className='nav-cart-child'>
                                <BsPerson />
                                <span className='nav-cart-label'>Profile</span>
                            </div>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>


                </div>
            </header>
            <div>
                <div className="banner">
                    <div className='banner-content'>
                        <h1>fash<span className="i">i</span>on</h1>
                        <div>
                            <button className='banner-button'>Explore Now!</button>
                        </div>
                    </div>
                    <div className='banner-image'>
                        <img src={womanincart} alt="" />
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