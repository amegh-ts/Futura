import React from 'react'
import womanincart from './Assets/woman-in-cart.png'
import Body from './Body';



const Home = () => {



  return (
    <div>
        <div>
                <div className="banner">
                    <div className='banner-content'>
                        <h1>fash<span className="i">i</span>on</h1>
                        <div>
                            <button className='banner-button'>Explore Now!</button>
                        </div>
                    </div>
                    <div className='banner-image'>
                        <img src={womanincart} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Body />
            </div>
    </div>
  )
}

export default Home

