import React from 'react'
import './Navbar.css'
import { IoPersonCircleSharp } from "react-icons/io5";




const Navbar = () => {
  return (
    <div className='nav-main'>
        <header>
            <div className='nav-logo'>
                <h1>Gusto</h1>
            </div>
            <div className='nav-navigation'>
                <li className='active'>Home</li>
                <li className='active'>About Us</li>
                <li className='active'>About</li>
                <li className='active'>Shop</li>
                <li className='active'>Contact</li>
            </div>
            <div className='nav-buttons'>
                <li></li>
                <li><IoPersonCircleSharp /></li>
            </div>
        </header>
    </div>
  )
}

export default Navbar