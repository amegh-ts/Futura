import React from 'react'

const Body = () => {
    return (
        <div>
            <section className="section collection">
                <div className="title">
                    <span>COLLECTION</span>
                    <h2>Our Top Collection</h2>
                </div>
                <div className='collection-filter'>
                    <button className='collection-button'>All Collection</button>
                    <button className='collection-button'>Men</button>
                    <button className='collection-button'>Woman</button>
                    <button className='collection-button'>Kids</button>
                </div>
            </section>

        </div>
    )
}

export default Body