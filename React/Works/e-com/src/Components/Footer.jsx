import React from 'react'
import logo from './Assets/logo.png'
import { FaFacebookF,FaYoutube } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="row">
                    <div className="col1">
                        <div className="footer-logo">
                            {/* <img src="./images/logo.svg" alt="logo" /> */}
                            <img src={logo} alt="" />
                        </div>
                        <p>
                            Lorem ispum is a placeholder text <br />
                            commonly used as a free text.
                        </p>
                        <div className="footer-icon-div">
                            <div className="footer-icon"><FaFacebookF /></div>
                            <div className="footer-icon"><BsTwitter /></div>
                            <div className="footer-icon"><BsInstagram/></div>
                            <div className="footer-icon"><FaYoutube/></div>
                        </div>
                        <p className="color">
                            Copyrights 2023 <br />
                            @amz
                        </p>
                    </div>
                    <div className="col2">
                        <div className='col2-content'>
                            <h4>Product</h4>
                            <div className='col2-links'>
                                <a href="">Download</a>
                                <a href="">Pricing</a>
                                <a href="">Locations</a>
                                <a href="">Server</a>
                                <a href="">Countries</a>
                                <a href="">Blog</a>
                            </div>
                        </div>
                        <div className='col2-content'>
                            <h4>Category</h4>
                            <div className='col2-links'>
                                <a href="">Men</a>
                                <a href="">Women</a>
                                <a href="">Kids</a>
                                <a href="">Best Seller</a>
                                <a href="">New Arrivals</a>
                            </div>
                        </div>
                        <div className='col2-content'>
                            <h4>My Account</h4>
                            <div className='col2-links'>
                                <a href="">My Account</a>
                                <a href="">Discount</a>
                                <a href="">Returns</a>
                                <a href="">Order History</a>
                                <a href="">Order Tracking</a>
                            </div>
                        </div>
                       
                    </div>
                    <div className='col3'>
                    <div className='col2-content'>
                            <h4>Category</h4>
                            <div className='col2-links'>
                                <a href="">Men</a>
                                <a href="">Women</a>
                                <a href="">Kids</a>
                                <a href="">Best Seller</a>
                                <a href="">New Arrivals</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer