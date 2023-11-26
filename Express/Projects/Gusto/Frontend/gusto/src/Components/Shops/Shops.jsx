import React from 'react'
import './Shops.css'
import { IoHeartOutline } from "react-icons/io5";

const Shops = () => {
    return (
        <section className='shops'>
            <div className="shops-main">
                <div className="shops-text">
                    <h4>Our Shops</h4>
                    <h2>Lets Check Popular Products</h2>
                </div>

                <div className="shops-contents">
                    <div className="content-cards">
                        <img src="img/p1.png" alt="" />
                        <h3>Blueberry Honey</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="card-text">
                            <div className="card-price">
                                <h6>$21.00</h6>
                            </div>
                            <div className="card-btn">
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="card-icons">
                            <IoHeartOutline className='heart-icon'/>
                        </div>
                    </div>

                    <div className="content-cards">
                        <img src="img/p2.png" alt="" />
                        <h3>Blueberry Honey</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="card-text">
                            <div className="card-price">
                                <h6>$21.00</h6>
                            </div>
                            <div className="card-btn">
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="card-icons">
                            <IoHeartOutline className='heart-icon'/>
                        </div>
                    </div>

                    <div className="content-cards">
                        <img src="img/p3.png" alt="" />
                        <h3>Blueberry Honey</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="card-text">
                            <div className="card-price">
                                <h6>$21.00</h6>
                            </div>
                            <div className="card-btn">
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="card-icons">
                            <IoHeartOutline className='heart-icon'/>
                        </div>
                    </div>

                    <div className="content-cards">
                        <img src="img/p4.png" alt="" />
                        <h3>Blueberry Honey</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="card-text">
                            <div className="card-price">
                                <h6>$21.00</h6>
                            </div>
                            <div className="card-btn">
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="card-icons">
                            <IoHeartOutline className='heart-icon'/>
                        </div>
                    </div>
                </div>
                <div className="shops-btn">
                    <button className='h-btn'>All Products</button>
                </div>
            </div>
        </section>
    )
}

export default Shops