import React from 'react'
import './Accordion.scss'
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Accordion = ({ title, desc, active, setActive }) => {
    return (
        <div className='accordion-container'>
            <span className={(active === title ? 'activeTitle' : "") + "title" + "flex"}>
                {title}
                <span>
                    <IoArrowDownCircleOutline className='icon' />
                </span>
            </span>
            <p className='description'>
                {desc}
            </p>
        </div>
    )
}

export default Accordion