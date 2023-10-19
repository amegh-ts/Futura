import React from 'react';

const Details = ({ productDetails }) => {
    if (!productDetails) {
        return <div>No product details available.</div>;
    }

    return (
        <div>
            <div className='deatils-main'>
                <div className='details-card'>
                    <div className='details-card-image'>
                        <img src={productDetails.thumbnail} alt={productDetails.name} />
                    </div>
                    <div className='details-card-content'>
                        <h2>{productDetails.title}</h2>
                        <h2>{productDetails.description}</h2>
                        <span>Price: {productDetails.price} MRP {productDetails.mrp}</span>
                        <div>
                            <button>Add to cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
