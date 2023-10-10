import React, { useEffect, useState } from 'react';
import './Home.css';
import navimg1 from './Assets/navimg2.svg';
import { BsCart3 } from 'react-icons/bs';
import Body from './Body';
import { useDispatch } from 'react-redux';
import { cartProducts } from '../Redux/ApiRedux';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch=useDispatch()
    const [count, setCartCount] = useState(0);

   

    const CartCount = (product) => {
        setCartCount(count + 1);
        console.log(`Product added to cart with ID: ${product.id}`);
        dispatch(cartProducts((product)))

        localStorage.setItem('cartCount', count + 1);  //save the cart count to local
    };

    useEffect(()=>{
        const savedCount = parseInt(localStorage.getItem('cartCount')) || 0;
        setCartCount(savedCount);
    },[])

    window.onbeforeunload = () => {
        localStorage.clear();
    };

    return (
        <div className="main">
            <div className="main-div">
                <div className='navbar-navbar'>
                    <div className="navbar-container">
                        <img src={navimg1} alt="flipkart095e08113" className="navbar-flipkart095e081" />
                        <Link to={'/cartpage'}>
                        <span>
                            <BsCart3 className="navbar-headercarteed1501" />
                        </span>
                        </Link>
                        
                        
                        <span className="navbar-text">
                            <span>Items :</span>
                        </span>
                        <span className="navbar-text2">{count}</span>
                    </div>
                </div>

                <div className="main-body">
                    <Body CartCount={CartCount} />
                </div>
            </div>
        </div>
    );
};

export default Home;
