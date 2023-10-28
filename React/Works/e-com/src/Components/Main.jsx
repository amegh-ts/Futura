import React, { useEffect, useState } from 'react'
import './Main.css'
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import navlogo from './Assets/logo.png'
import { apiData } from './API/api';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Home';
import Cart from './Cart';
import Details from './Details';
import { useSelector } from 'react-redux';
import Body from './Body';
import Collections from './Collections';
import News from './News';
import About from './About';
import SearchResults from './SearchResults';
import Profile from './Profile';
import Login from './Loginsignup/Login';
import { Link } from 'react-router-dom';

const Main = () => {


    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [activeNav, setActiveNav] = useState(0);
    const [icon, setIcon] = useState('fa-smile-o');
    const [productDetails, setProductDetails] = useState(null);

    const cartItems = useSelector((state) => state.ecomredux.productinfo); // Get cart items from Redux store

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
        if (index !== activeNav) {
            setActiveNav(index);
        }
    }



    const handleSearch = () => {
        // Ensure that the search query is not empty or consists only of spaces
        if (searchQuery.trim() !== '') {
            // Convert the search query to lowercase for case-insensitive search
            const lowerCaseQuery = searchQuery.toLowerCase();

            // Use filter to find items that match the search query
            const results = apiData.filter((item) => {
                const itemTitle = item.title.toLowerCase();
                const itemCategory = item.category.toLowerCase();
                const itemType = item.type.toLowerCase();

                return itemTitle.includes(lowerCaseQuery) || itemCategory.includes(lowerCaseQuery) || itemType.includes(lowerCaseQuery);
            });

            // Update the UI with the search results
            setSearchResults(results);

            // Set the active navigation to the search resultZs page (assuming 7 represents it)
            setActiveNav(7);
        }
    };
// Get the current value from local storage
const currentValue = localStorage.getItem('persist:ecom');

// Parse the JSON value to work with it as an object
const parsedValue = JSON.parse(currentValue);

// Set the "authredux" property to null
parsedValue.authredux = {};

// Convert the modified object back to a JSON string
const modifiedValue = JSON.stringify(parsedValue);

const handleLogout=()=>{
    localStorage.setItem('persist:ecom', modifiedValue);
}





    return (
        <div className='main-div'>
            <header className='nav-bar'>

                <div className='nav-logo' onClick={() => handleNavigationClick(0)}>
                    <i id="div1" className={`fa ${icon}`} />

                    <img src={navlogo} alt="" />

                </div>
                <div className='nav-navigation'>
                    <ul className="list">
                        <li><button className="link" onClick={() => handleNavigationClick(0)}>
                            Home</button></li>
                        <li><button className="link" onClick={() => handleNavigationClick(3)}>
                            Shop</button></li>
                        <li><button className="link" onClick={() => handleNavigationClick(4)}>
                            Collection
                        </button></li>
                        <li><button className="link" onClick={() => handleNavigationClick(5)}>
                            News</button></li>
                        <li><button className="link" onClick={() => handleNavigationClick(6)}>
                            About Us</button></li>
                    </ul>
                </div>
                <div className='nav-search'>
                    <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }} className='nav-search-input' />

                    <div className='nav-serch-icon-container' onClick={handleSearch}>
                        <FaSearch className='nav-serch-icon' />
                        {/* <i class="fa-sharp fa-solid fa-magnifying-glass fa-xl" style={{color: "#F86F14;"}}></i>                       */}
                    </div>
                </div>
                <div className='nav-end'>

                    <button className='nav-cart' onClick={() => handleNavigationClick(1)}>
                        <div className='nav-cart-child'>
                            <BsCart3 />
                            <span className='nav-cart-label'>Cart</span>
                        </div>
                        <span>|</span>
                        <div className='nav-cart-child'>
                            <span>{cartItems.length}</span>
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
                            <a href="profile" onClick={() => handleNavigationClick(8)}>View Profile</a>
                            <Link to={'/login'}><a href="login">Login</a></Link>
                            <a href="home" onClick={() => handleLogout()}>Logout</a>
                        </div>
                    </div>


                </div>
            </header>

            <div>

                {activeNav === 0 && <Home setActiveNav={setActiveNav} setProductDetails={setProductDetails} />}
                {activeNav === 1 && <Cart />}
                {activeNav === 2 && <Details productDetails={productDetails} />}
                {activeNav === 3 && <Body setProductDetails={setProductDetails} setActiveNav={setActiveNav} />}
                {activeNav === 4 && <Collections />}
                {activeNav === 5 && <News />}
                {activeNav === 6 && <About />}
                {activeNav === 7 && <SearchResults searchQuery={searchQuery} searchResults={searchResults} setActiveNav={setActiveNav} setProductDetails={setProductDetails}/>}
                {activeNav === 8 && <Profile />}
                {activeNav === 9 && <Login />}

            </div>



        </div>
    )
}

export default Main