
import React, { useState, useEffect } from 'react';
import './Home.css';
import navimg1 from './Assets/navimg2.svg';
import { BsCart3 } from 'react-icons/bs';
import Body from './Body';
import { useDispatch } from 'react-redux';
import { cartProducts } from '../Redux/ApiRedux';
import { Link } from 'react-router-dom';
import CartPage from './CartPage';

const Home = () => {
    const dispatch = useDispatch()
    const [count, setCartCount] = useState(0);

    const CartCount = (product) => {
        setCartCount(count =>count + 1);
        console.log(`Product added to cart with ID: ${product.id}`);
        dispatch(cartProducts((product)))
    };

    useEffect(() => {
        // Update cart count whenever count changes
        document.querySelector('.navbar-text2').innerText = count;
      }, [count]);

    const [activeTab, setActiveTab] = useState(Home);
    const handleTabClick = view => {
        setActiveTab(view);
    };

    return (
        <div className="main">
            <div className="main-div">
                <div className='navbar-navbar'>
                    <div className="navbar-container">
                        <span onClick={() => handleTabClick('home')}>
                            <img src={navimg1} alt="flipkart095e08113" className="navbar-flipkart095e081" />
                            {/* <Link to={'/cartpage'}> */}
                            <span>
                                <BsCart3 className="navbar-headercarteed1501" />
                            </span>
                            {/* </Link> */}
                        </span>



                        <span className="navbar-text" onClick={() => handleTabClick('cart')}>
                            <span>Items :</span>
                        </span>
                        <span className="navbar-text2">{count}</span>
                    </div>
                </div>

                <div className="main-body">
                {activeTab === 'home' && <Body CartCount={CartCount} />}
                {activeTab === 'cart' && <CartPage/>}
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
