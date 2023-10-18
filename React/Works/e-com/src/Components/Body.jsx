import React, { useEffect, useState } from 'react'
import { apiData } from './API/api';


const Body = () => {
    const [state, setState] = useState([]);
    const [filteredState, setFilteredState] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        async function api() {
            try {
                setState(apiData);
                setFilteredState(apiData)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }


        }
        api()
        console.log(state);
    }, [])

    const handleClick=(filter)=>{
        setActiveFilter(filter);
        if (filter==='All') {
            setFilteredState(state);
        } else{
            const filtered=state.filter(item=>item.category.toLowerCase()===filter.toLowerCase());
            setFilteredState(filtered);
        }
    }
    return (
        <div>
            <section className="section collection">
                <div className="title">
                    <span>COLLECTION</span>
                    <h2>Our Top Collection</h2>
                </div>
                <div className='collection-filter'>
                <button onClick={() => handleClick('All')} className={`collection-button ${activeFilter === 'All' ? 'active' : ''}`}>All Collection</button>
                    <button onClick={() => handleClick('Dress')} className={`collection-button ${activeFilter === 'Dress' ? 'active' : ''}`}>Dress</button>
                    <button onClick={() => handleClick('Electronics')} className={`collection-button ${activeFilter === 'Electronics' ? 'active' : ''}`}>Electronics</button>
                    <button onClick={() => handleClick('Beauty')} className={`collection-button ${activeFilter === 'Beauty' ? 'active' : ''}`}>Beauty & Health</button>
                    <button onClick={() => handleClick('Jewelleri')} className={`collection-button ${activeFilter === 'Jewelleri' ? 'active' : ''}`}>Jewelleri</button>
                </div>
            </section>



            <div >
                <div className='b-card-container'>
                    {filteredState.map(item => (
                        <div key={item.id} className="card-items">
                            <img src={item.thumbnail} alt={item.name} className='card-image'/>
                            <div className="card-item-details">
                                <span className='card-item-title'>{item.title}</span>
                                <span className='card-item-description'>{item.description} </span>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Body