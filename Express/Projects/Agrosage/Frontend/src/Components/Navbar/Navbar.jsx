import React, { useContext } from 'react'
import logo from './Assets/logo.png'
import './navbar.css'
import { ThemeContext } from '../../App';

const NavBar = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);

    const onClickTogleTheme = () => {
        toggleTheme();
    };
    return (
        <div className='nav-bar-main'>
            <div className="nav-bar-container">
                <div className='nav-logo'>
                    <span>
                        <img src={logo} alt="" />
                    </span>
                    <span className='nav-header'>
                        E-Crop

                    </span>

                </div>
                <label className="switch">
                    <input type="checkbox" checked={isDarkMode} onChange={onClickTogleTheme} />
                    <span className="slider round"></span>
                </label>

            </div>

        </div>

    )
}

export default NavBar