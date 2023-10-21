import React from 'react'
import womanincart from './Assets/woman-in-cart.png'
import Body from './Body';
import { Link} from 'react-scroll';
import Footer from './Footer';



const Home = ({ setActiveNav, setProductDetails }) => {
    // const cartCount = (itemId) => {
    //     console.log(`Item with ID ${itemId} clicked in Home component.`);
    // };
    return (
        <div>
            <div>
                <div className="banner">
                    <div className='banner-content'>
                        <h1>fash<span className="i">i</span>on</h1>
                        <div>
                            <Link to="title" smooth={true} duration={500}>
                            <button className='banner-button'>Explore Now!</button>
                            </Link>
                            
                        </div>
                    </div>
                    <div className='banner-image'>
                        <img src={womanincart} alt="" />
                    </div>
                </div>
            </div>
            <div>
            <Body setActiveNav={setActiveNav} setProductDetails={setProductDetails} />
                {/* <Body onCartClick={cartCount}  /> */}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home

