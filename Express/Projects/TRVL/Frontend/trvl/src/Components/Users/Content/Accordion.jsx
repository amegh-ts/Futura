import React from 'react'
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Accordion = () => {
    return (
        <div className='acordion-container'>
            <span className='title flex'>
                How do I chose the right place for travel?
                <span>
                    <IoArrowDownCircleOutline />
                </span>
            </span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum doloribus rerum consequatur corrupti est soluta modi sed aliquam consequuntur dicta.
            </p>
        </div>
    )
}

export default Accordion