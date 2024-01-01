import React, { useState } from 'react'
import './Navbar.scss'
import { GiFlamer } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";


const Navbar = () => {
    //  state to track navbar
    const [navbar, setNavbar] = useState("nav-menu");

    const showNavbar = () => {
        setNavbar("nav-menu show-navbar")
    }

    const closeNavbar = () => {
        setNavbar("nav-menu")
    }
    return (
        <div className='navbar'>
            <div className='navbar-main'>
                <div className="nav-logo">
                    <GiFlamer className='icon' />
                    <h1>TRVL</h1>
                </div>
                <div className={navbar}>
                    <ul>
                        <li className="nav-list">Home</li>
                        <li className="nav-list">Gallery</li>
                        <li className="nav-list">Contact</li>
                        <li className="nav-list">About Us</li>
                    </ul>
                    <IoCloseCircleOutline className='icon nav-close-icon' onClick={closeNavbar}/>
                </div>
                <button className='nav-menu-login btn'>Login</button>
                <CgMenuGridO className='icon nav-menu-icon' onClick={showNavbar}/>
            </div>
        </div>
    )
}

export default Navbar