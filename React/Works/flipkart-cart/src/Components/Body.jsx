import React from 'react'
import cardimg1 from './Assets/card-img-1.png'
import cardimg2 from './Assets/card-img-2.png'

const Body = () => {
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

                    <div className="card-card">
                        <span className="card-text">2</span>
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

                    <div className="card-card">
                        <span className="card-text">3</span>
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

                    <div className="card-card">
                        <span className="card-text">4</span>
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

                    <div className="card-card">
                        <span className="card-text">5</span>
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