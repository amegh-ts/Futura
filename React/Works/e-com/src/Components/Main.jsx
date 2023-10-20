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
        setActiveNav(index);
    }


    const handleSearch = () => {
        if (searchQuery.trim() === '') {
          // If the search query is empty or consists only of spaces, show all items
          setSearchResults(apiData);
        } else {
          const results = apiData.filter((item) => {
            const lowerCaseQuery = searchQuery.toLowerCase();
            const lowerCaseType = (item.type || '').toLowerCase();
            return (
              (lowerCaseType === 'kids' || lowerCaseType === 'child') ||
              lowerCaseType.includes(lowerCaseQuery) ||
              (item.category || '').toLowerCase().includes(lowerCaseQuery) ||
              (item.title || '').toLowerCase() === lowerCaseQuery
            );
          });
          setSearchResults(results);
        }
        setActiveNav(7); // Make sure that 7 represents the search results page
      };
      

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
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>


                </div>
            </header>

            <div>

                {activeNav === 0 && <Home setActiveNav={setActiveNav} setProductDetails={setProductDetails} />}
                {activeNav === 1 && <Cart />}
                {activeNav === 2 && <Details productDetails={productDetails} />}
                {activeNav === 3 && <Body />}
                {activeNav === 4 && <Collections />}
                {activeNav === 5 && <News />}
                {activeNav === 6 && <About />}
                {activeNav === 7 && <SearchResults searchQuery={searchQuery} searchResults={searchResults} />}



            </div>



        </div>
    )
}

export default Main