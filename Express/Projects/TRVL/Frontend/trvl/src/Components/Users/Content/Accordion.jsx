import React from 'react'
import './Accordion.scss'
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Accordion = ({ title, desc, active, setActive }) => {
    return (
        <div className='accordion-container'>
            <span className='title flex'>
                How do I chose the right place for travel?
                <span>
                    <IoArrowDownCircleOutline className='icon' />
                </span>
            </span>
            <p className='description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eius autem minima voluptas itaque iure, culpa quia odio veritatis? Repudiandae et neque dolor sapiente reiciendis accusantium minima asperiores obcaecati dolorem!
            </p>
        </div>
    )
}

export default Accordion