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
                                    <button className='cart-util-button'>Delete</button>
                                    <button className='cart-util-button'>Save for Later</button>
                                    <button className='cart-util-button'>Share</button>
                                </div>

                            </div>
                        </div>
                    </div>
{/* ************************************************* */}

                   

{/* ********************************************* */}
                </div>

                <div className='cart-roundup'>
                    <span className='cart-roundup-count'>Subtotal <span>(1 item) : ₹<span style={{fontWeight:"600"}}>19000</span></span></span>
                    <div>
                        <button className='cart-roundup-button'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart