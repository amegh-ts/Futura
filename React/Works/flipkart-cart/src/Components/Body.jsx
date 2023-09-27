import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Body = ({ CartCount }) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        async function api() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setState(res.data);
        }
        api();
    }, []);

    const datas = state.filter((li) => li.id <= 10);

    return (
        <div>
            <div className="card-container">
                {datas.map((product) => (
                    <div className="card-card" key={product.id}>
                        <span className="card-text">{product.id}</span>
                        <img
                            src={product.thumbnailUrl}
                            alt="grocerygettyf1122"
                            className="card-grocerygettyf1"
                        />
                        <span className="card-text1">{product.title}</span>
                        <button
                            className="card-add-to-cart-button"
                            onClick={() => {
                                CartCount(product);
                            }}
                        >
                            <span className="card-text5">Add To Cart</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
