import React, { useState } from 'react';
import './Accordion.scss';
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Accordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`accordion-container ${isExpanded ? 'activeTitle' : ''}`}>
      {/* <div className='title flex' onClick={toggleAccordion}>
        How do I choose the right place for travel?
        <span>
          <IoArrowDownCircleOutline className={`icon ${isExpanded ? 'rotate' : ''}`} />
        </span>
      </div>
      <p className={`description ${isExpanded ? 'show' : ''}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eius autem minima voluptas itaque iure, culpa quia odio veritatis? Repudiandae et neque dolor sapiente reiciendis accusantium minima asperiores obcaecati dolorem!
      </p> */}
    </div>
  );
};

export default Accordion;
