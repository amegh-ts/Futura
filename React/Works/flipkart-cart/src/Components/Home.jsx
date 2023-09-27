import React, { useState } from 'react';
import './Home.css';
import navimg1 from './Assets/navimg2.svg';
import { BsCart3 } from 'react-icons/bs';
import Body from './Body';
import { useDispatch } from 'react-redux';
import { cartProducts } from '../Redux/ApiRedux';

const Home = () => {
    const dispatch=useDispatch()
    const [count, setCartCount] = useState(0);

    const CartCount = (id) => {
        setCartCount(count + 1);
        console.log(`Product added to cart with ID: ${id}`);
        dispatch(cartProducts({id}))
    };

    return (
        <div className="main">
            <div className="main-div">
                <div className='navbar-navbar'>
                    <div className="navbar-container">
                        <img src={navimg1} alt="flipkart095e08113" className="navbar-flipkart095e081" />
                        <span>
                            <BsCart3 className="navbar-headercarteed1501" />
                        </span>
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
