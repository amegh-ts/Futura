import React from 'react'
import './Content.scss'
import { IoLocationOutline, IoCalendarNumberOutline, IoSearchOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";


const Content = () => {
    return (
        <div className='content'>
            <div className='content-main'>
                <div className="content-container">
                    <div className="grid">
                        <span className="flex">
                            <h1>10</h1>
                            <p>world of experience</p>
                        </span>
                        <span className="flex">
                            <h1>2K+</h1>
                            <p>Fine Destination</p>
                        </span>
                        <span className="flex">
                            <h1>10+</h1>
                            <p>Customer Reviews</p>
                        </span>
                        <span className="flex">
                            <h1>4.8</h1>
                            <p>Overall Rating</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="destination-main">
                <div className="destination-container">
                    <div className="destination-title">
                        <span className='dst-red-text'>EXPLORE NOW</span>
                        <h3>Find your dream destination</h3>
                        <p>Fill in the field to find the best spot for your next trip</p>
                    </div>

                    <div className="search-field">
                        <div className="input-field">
                            <IoLocationOutline className='icon' />
                            <input type="text" placeholder='Location' />
                        </div>

                        <div className="input-field">
                            <FaCreditCard className='icon' />
                            <input type="text" placeholder='Price' />
                        </div>

                        <div className="input-field">
                            <input type="date" placeholder='Date' />
                        </div>

                            <button className='btn search-btn'><IoSearchOutline className='icon' />Search</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Content