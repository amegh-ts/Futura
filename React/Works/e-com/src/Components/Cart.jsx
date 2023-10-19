import React from 'react'
import dummy from './Assets/woman-in-cart.png'
import { useSelector } from 'react-redux';


const Cart = () => {
    const cartItems = useSelector((state) => state.ecomredux.productinfo);
    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <div className='cart-main-container'>
                <div className='cart-body'>
                    <h2>My Cart</h2>
                    <div className='cart-items'>
                    <div className='cart-items'>
                        {cartItems.map((item, index) => (
                            <div className='cart-item' key={index}>
                                <div className='cart-item-image'>
                                    <img src={item.thumbnail} alt={item.name} />
                                </div>
                                <div className='cart-item-details'>
                                    <span className='cart-item-title'>{item.title}</span>
                                    <span className='cart-item-description'>{item.description}</span>
                                    <span>Price: ₹{item.price} MRP {item.mrp}</span>
                                    <div className='cart-item-utils'>
                                        <button>Qty: {item.quantity}</button>
                                        <div className='cart-item-utils-a'>
                                            <button className='cart-util-button'>Delete</button>
                                            <button className='cart-util-button'>Save for Later</button>
                                            <button className='cart-util-button'>Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='cart-roundup'>
                    <span className='cart-roundup-count'>
                        Subtotal <span>({cartItems.length} item) : ₹{calculateTotalPrice(cartItems)}
                    </span></span>
                    <div>
                        <button className='cart-roundup-button'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
 </div>
    )
}

export default Cart