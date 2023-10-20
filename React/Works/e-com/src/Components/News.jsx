import React from 'react';
import news1 from './Assets/blog-1.png';
import news2 from './Assets/blog-2.png';
import news3 from './Assets/blog-3.png';

const News = () => {
    return (
        <div>
            <div className='news-container'>
                <div>
                    <section class="section blog">
                        <div class="title">
                            <span>NEWS</span>
                            <h2>Latest Updates</h2>
                        </div>
                    </section>
                </div>

                <div className='news-col'>
                    <div className="news-cards">
                        <div className='news-card-poster'>
                            <img src={news1} alt="" />
                        </div>
                        <div className='news-card-content'>
                            <h3>New Arrivals: Fall Fashion Collection</h3>
                            <div className='lorem-con'> 
                                Explore our latest arrivals, featuring stylish fall fashion trends and wardrobe essentials. Stay in vogue this season!
                            </div>
                        </div>
                    </div>
                    <div className="news-cards">
                        <div className='news-card-poster'>
                            <img src={news2} alt="" />
                        </div>
                        <div className='news-card-content'>
                            <h3>Holiday Shopping Guide</h3>
                            <div className='lorem-con'>
                                Get ready for the holiday season with our ultimate shopping guide. Find the perfect gifts for your loved ones.
                            </div>
                        </div>
                    </div>
                    <div className="news-cards">
                        <div className='news-card-poster'>
                            <img src={news3} alt="" />
                        </div>
                        <div className='news-card-content'>
                            <h3>Sale Alert: Black Friday Deals</h3>
                            <div className='lorem-con'>
                                Don't miss out on our Black Friday sale event. Grab amazing discounts on a wide range of products. Mark your calendar!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
