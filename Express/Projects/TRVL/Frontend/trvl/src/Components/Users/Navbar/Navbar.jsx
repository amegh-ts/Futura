import React from 'react'
import './Navbar.css'
import { GiFlamer } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";


const Navbar = () => {
    return (
        <div className='navbar-main'>
            <div className="nav-logo">
                <GiFlamer />
                <h2>TRVL</h2>
            </div>
            <div className="nav-menu">
                <ul>
                    <li className="nav-list">Home</li>
                    <li className="nav-list">Gallery</li>
                    <li className="nav-list">Contact</li>
                    <li className="nav-list">About Us</li>
                </ul>
                <IoCloseCircleOutline className='icon nav-menu-close' />
            </div>
            <button className='nav-menu-login btn'>Login</button>
            <CgMenuGridO className='icon ' />
        </div>
    )
}

export default Navbar