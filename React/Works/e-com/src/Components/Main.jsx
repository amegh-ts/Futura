import React, { useEffect, useState } from 'react'
import './Main.css'
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import navlogo from './Assets/logo.png'

import 'font-awesome/css/font-awesome.min.css';
import Home from './Home';
import Cart from './Cart';

export const values=(n1)=>{
    console.log('888888888888888888888',n1);
    var c=n1
return c

}

var abcd=values()
console.log('*/*/*/*/*/*/*',abcd);
const Main = () => {
    const [activeNav, setActiveNav] = useState(0);
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
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    const handleNavigationClick = (index) => {
        setActiveNav(index);
    }
    return (
        <div className='main-div'>
            <header className='nav-bar'>

                <div className='nav-logo' onClick={()=>handleNavigationClick(0)}>
                    <i id="div1" className={`fa ${icon}`} />

                    <img src={navlogo} alt="" />

                </div>
                <div className='nav-navigation'>
                    <ul className="list">
                        <li><a href="#" className="link" onClick={()=>handleNavigationClick(0)}>
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
                    <div className='nav-serch-icon-container'>
                        <FaSearch className='nav-serch-icon' />
                        {/* <i class="fa-sharp fa-solid fa-magnifying-glass fa-xl" style={{color: "#F86F14;"}}></i>                       */}
                    </div>
                </div>
                <div className='nav-end'>

                    <button className='nav-cart' onClick={()=>handleNavigationClick(1)}>
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
                {activeNav===0 && <div><Home /></div>}
                {activeNav===1 && <div><Cart/></div>}
                

                
            </div>



        </div>
    )
}

export default Main