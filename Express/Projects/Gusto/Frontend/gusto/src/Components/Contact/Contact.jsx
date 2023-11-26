import React from 'react'
import './Contact.css'
import { IoLogoFacebook, IoLogoTwitter, IoLogoGithub, IoLogoGoogle, IoPhonePortraitOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact-main'>
                <div className="contact-container">
                    <div className="contact-img">
                        <div className="img-one">
                            <img src="img/f1.png" alt="" />
                        </div>
                        <div className="img-one">
                            <img src="img/f2.png" alt="" />
                        </div>
                    </div>

                    <div className="contact-text">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolore doloremque praesentium ipsum, quia commodi eaque quas ea similique vitae cupiditate fugiat error. Sequi, cumque libero voluptas impedit porro odio!</p>
                        <div className="contact-social">
                            <IoLogoFacebook className='social-icons' />
                            <IoLogoTwitter className='social-icons' />
                            <IoLogoGithub className='social-icons' />
                            <IoLogoGoogle className='social-icons' />
                        </div>
                    </div>

                    <div className="contact-details">
                        <div className="detail-item">
                            <FaLocationDot className='di-icon' /><span>  Pantheerankave, Calicut-19</span>
                        </div>
                        <div className="detail-item">
                            <IoPhonePortraitOutline className='di-icon' /><span>  +91 7485632712</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact