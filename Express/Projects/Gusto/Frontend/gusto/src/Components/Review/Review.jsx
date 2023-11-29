import React from 'react'
import './Review.css'
import { IoStar } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

const Review = () => {
    return (
        <section className='review'>
            <div className="review-main">
                <div className="review-text">
                    <h4>Our Customers</h4>
                    <h2>Clients Review About Our Food</h2>
                </div>

                <div className="review-contents">
                    <div className="review-card">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, recusandae incidunt. Harum, nam distinctio.</p>
                        <div className="review-card-child">
                            <div className="review-card-img">
                            <LazyLoadImage src="/img/r1.jpg" alt="" effect="blur" />
                            </div>
                            <div className="review-card-text">
                                <h4>David Bombal</h4>
                                <h5>Food Blogger</h5>
                                <div className='review-rating'>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review-card">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, recusandae incidunt. Harum, nam distinctio.</p>
                        <div className="review-card-child">
                            <div className="review-card-img">
                            <LazyLoadImage src="/img/r2.jpg" alt="" effect="blur" />
                            </div>
                            <div className="review-card-text">
                                <h4>David Bombal</h4>
                                <h5>Food Blogger</h5>
                                <div className='review-rating'>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review-card">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, recusandae incidunt. Harum, nam distinctio.</p>
                        <div className="review-card-child">
                            <div className="review-card-img">
                            <LazyLoadImage src="/img/r3.jpg" alt="" effect="blur" />
                            </div>
                            <div className="review-card-text">
                                <h4>David Bombal</h4>
                                <h5>Food Blogger</h5>
                                <div className='review-rating'>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                    <IoStar className='rating-stars'/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Review