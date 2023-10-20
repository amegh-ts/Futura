import React from 'react'
import poster1 from './Assets/poster-1.png'
import poster2 from './Assets/poster-2.png'
import poster3 from './Assets/poster-3.png'
import { Link } from 'react-router-dom';


const Collections = () => {
    return (
        <div>
            <div className='collections-container'>
                <div >
                    <section class="section new-arrival">
                        <div class="title">
                            <span>NEW ARRIVAL</span>
                            <h2 className='collection-head'>Latest Collection</h2>
                        </div>
                    </section>
                </div>
                <div className='collections-card-container'>
                    <div className='collections-card-container-left'>
                        <Link to={'/'}>
                            <div className='cccl1'>
                                <img src={poster1} alt="" />
                                <div className="image-text1">
                                    <span>Electronics &</span>
                                    <span>Accessories</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div className='cccl2'>
                                <img src={poster2} alt="" />
                                <div className="image-text2">
                                    <span>Kids Wear</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='collections-card-container-right'>
                        <Link to={'/'}>
                            <div className='cccr1'>
                                <img src={poster3} alt="" />
                                <div className="image-text3">
                                    <span>2023 Trends</span>
                                    <span>Women's cloathing</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>






            {/* <section class="section new-arrival">
                <div class="title">
                    <span>NEW ARRIVAL</span>
                    <h2>Latest Collection</h2>
                </div>

                <div class="row container">
                    <div class="col col-1">
                        <img src={poster1} alt="" />
                        <h3>
                            2021 Trends <br />
                            Women’s Smart Skirt
                        </h3>
                    </div>
                    <div class="col col-2">
                        <img src={poster2} alt="" />
                        <h3>
                            2021 Trends <br />
                            Women’s Smart Skirt
                        </h3>
                    </div>
                    <div class="col col-3">
                        <img src={poster3} alt="" />
                        <h3>
                            2021 Trends <br />
                            Women’s Smart Shirt <br />
                            <span>Discover More:</span>
                        </h3>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Collections