import React from 'react'
import dummy from './Assets/woman-in-cart.png'


const Cart = () => {
    return (
        <div>
            <div className='cart-main-container'>
                <div className='cart-body'>
                    <h2>My Cart</h2>
                    <div className='cart-items'>
                        <div className='cart-item-index'>
                            <h5>1</h5>
                        </div>
                        <div className='cart-item-image'>
                            <img src={dummy} alt="cart-item-image" />
                        </div>

                        <div className='cart-item-details'>
                            <span className='cart-item-title'>Levi's</span>
                            <span className='cart-item-description'>Men 512 Mid Rise Slim Tapered Jeans</span>
                            <span>₹<span>3,315.50</span></span>
                            <div className='cart-item-utils'>

                                <button>Qty: <span>2</span></button>

                                <div className='cart-item-utils-a'>

                                    <span>
                                        <a href="">Delete</a>
                                    </span>
                                    <span>
                                        <a href="">Save for later</a>
                                    </span>
                                    <span>
                                        <a href="">Share</a>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div>djksdjkvjnksvjb</div>
            </div>
        </div>
    )
}

export default Cart