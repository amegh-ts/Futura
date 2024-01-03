import React from 'react'
import './Accordion.scss'
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Accordion = () => {
    return (
        <div className='accordion-container'>
            <span className='title flex'>
                How do I chose the right place for travel?
                <span>
                    <IoArrowDownCircleOutline className='icon'/>
                </span>
            </span>
            <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum doloribus rerum consequatur corrupti est soluta modi sed aliquam consequuntur dicta.
            </p>
        </div>
    )
}

export default Accordion