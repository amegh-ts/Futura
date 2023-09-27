import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const reduxData = useSelector((state) => state.products.productInfo);
  console.log('Redux Data:', reduxData);

  return (
    <div className="cart-main">
      <div className="cart-main-sub">
        <div className="card-container">
          {reduxData.map((product) => (
            <div className="card-card" key={product.id}>
              <span className="card-text">{product.id}</span>
              <img
                src={product.thumbnailUrl}
                alt={`Product ${product.id}`}
                className="card-grocerygettyf1"
              />
              <span className="card-text1">{product.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
