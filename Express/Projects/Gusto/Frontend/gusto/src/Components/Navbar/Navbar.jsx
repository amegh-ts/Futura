import React from 'react'
import './Navbar.css'
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Home from '../Home/Home';


const Navbar = () => {
    return (
        <navbar className='nav-main'>
            <header className='navbar-header' >
                <div className='nav-logo'>
                    <h1>Gusto</h1>
                </div>
                <ul className='nav-navigation'>
                    <li className='active'>Home</li>
                    <li className='active'>About Us</li>
                    <li className='active'>Our Shops</li>
                    <li className='active'>Reviews</li>
                    <li className='active'>Contact</li>
                </ul>
                <div className='nav-icons'>
                    <li><IoCartOutline /></li>
                    <li><IoPersonCircleSharp /></li>
                    <div id='menu-icon'>
                        <RxHamburgerMenu />
                    </div>
                </div>
            </header>
            
            <body className='body-main'>
                <Home/>
            </body>
        </navbar>
    )
}

export default Navbar