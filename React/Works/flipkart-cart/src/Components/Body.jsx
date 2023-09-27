import React, { useEffect, useState } from 'react'
import cardimg1 from './Assets/card-img-1.png'
import cardimg2 from './Assets/card-img-2.png'

const Body = () => {
    const[state, setState]=useState([]);
    useEffect(()=>{
        async function name(params) {
            
        }
    })
  return (
    <div>
        <div className="card-container">
                    <div className="card-card">
                        <span className="card-text">1</span>
                        <img
                            src={cardimg1}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1"><span>vegies</span></span>
                        <span className="card-text3"><span>Price : $20</span></span>
                        <button className='card-add-to-cart-button'>
                            <span className="card-text5">Add To Cart</span>
                        </button>

                    </div>

                    
                </div>
    </div>
  )
}

export default Body