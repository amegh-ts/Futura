import React from 'react'
import './Portfolio.css'
import profile from './Assets/profileicon.png'
import profilecard from './Assets/profilecard.png'
import contactcard from './Assets/contactcard.png'
import line from './Assets/line.svg'
import mail from './Assets/mail.svg'
import phone from './Assets/phone.svg'
import location from './Assets/location.svg'
import download from './Assets/download.svg'
import phmoon from './Assets/phmoon.svg'

import {IoHome} from 'react-icons/io5'
import {IoIosPaper} from 'react-icons/io'
import {BiSolidBriefcase} from 'react-icons/bi'
import {BiSolidContact} from 'react-icons/bi'

import { FaFacebookF } from 'react-icons/fa'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import HomeContent from './HomeContent'
import ResumeContent from './ResumeContent'
import WorkContent from './WorkContent'
import ContactContent from './ContactContent'



function Portfolio() {
    
    const [activeTab, setActiveTab] = useState(0);  // 0 for Home, 1 for Resume, 2 for Work, 3 for Contact

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    return (
        <div className='main_body'>
            <header className='header-container'>
                <div class="header-header">
                    <div>
                        <h1>Kratos</h1>
                    </div>
                    <div class="header-logo"></div>
                    <img
                        src={phmoon}
                        alt="phmoon8923"
                        class="header-phmoon"
                    />
                </div>
            </header>
            <div className='content_body'>
                <div className='b_left'>
                    <div className="profiledetails-container">
                        <div className="profiledetails-profiledetails">
                            <img
                                src={profilecard}
                                alt="profilecard8916"
                                className="profiledetails-profilecard"
                            />
                            <img
                                src={contactcard}
                                alt="contactcard8960"
                                className="profiledetails-contactcard"
                            />
                            <img
                                src={profile}
                                alt="profilepicture8917"
                                className="profiledetails-profilepicture"
                            />
                            <div className="profiledetails-name">
                                <span className="profiledetails-text">
                                    <span>Kratos</span>
                                </span>
                            </div>
                            <div className="profiledetails-careerdetails">
                                <span className="profiledetails-text02">
                                    <span>FullStack Developer</span>
                                </span>
                            </div>
                            <div className="profiledetails-socialmediaicons">
                                <button className='profiledetails-facebook'>
                                    <FaFacebookF />
                                </button>

                                <div className="profiledetails-linkedin">
                                    <BiLogoLinkedin />
                                </div>
                                <div className="profiledetails-twitter">
                                    <BsTwitter />
                                </div>
                                <div className="profiledetails-github">
                                    <AiFillGithub />
                                </div>
                            </div>
                            <div className="profiledetails-phone-group">
                                <img
                                    src={line}
                                    alt="Line12718"
                                    className="profiledetails-line1"
                                />
                                <div className="profiledetails-phone">
                                    <div className="profiledetails-phone1">
                                        <img
                                            src={phone}
                                            alt="gridiconsphone2711"
                                            className="profiledetails-gridiconsphone"
                                        />
                                    </div>
                                    <div className="profiledetails-phonedetails">
                                        <div className="profiledetails-phone2">
                                            <span className="profiledetails-text04"><span>Phone</span></span>
                                        </div>
                                        <span className="profiledetails-text06">
                                            <span>+91********96</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="profiledetails-email-group">
                                <img
                                    src={line}
                                    alt="Line32720"
                                    className="profiledetails-line3"
                                />
                                <div className="profiledetails-email-details">
                                    <div className="profiledetails-email">
                                        <img
                                            src={mail}
                                            alt="mdiemailopenoutline278"
                                            className="profiledetails-mdiemailopenoutline"
                                        />
                                    </div>
                                    <div className="profiledetails-email-details1">
                                        <div className="profiledetails-email1">
                                            <span className="profiledetails-text08"><span>Email</span></span>
                                        </div>
                                        <span className="profiledetails-text10">
                                            <span>am******2@gmail.com</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="profiledetails-location">
                                <div className="profiledetails-location1">
                                    <div className="profiledetails-location2">
                                        <img
                                            src={location}
                                            alt="ionlocationoutline275"
                                            className="profiledetails-ionlocationoutline"
                                        />
                                    </div>
                                    <div className="profiledetails-locationdetails">
                                        <div className="profiledetails-location3">
                                            <span className="profiledetails-text12">
                                                <span>Location</span>
                                            </span>
                                        </div>
                                        <span className="profiledetails-text14">
                                            <span>Pantheerankave, Calicut</span>
                                        </span>
                                    </div>
                                </div>
                                <img
                                    src={line}
                                    alt="Line42721"
                                    className="profiledetails-line4"
                                />
                            </div>
                            <div >
                                <button className='profiledetails-download-details'>
                                    <img
                                        src={download}
                                        alt="materialsymbolsdownload2934"
                                        className="profiledetails-materialsymbolsdownload"
                                    />
                                    <span className="profiledetails-text16">
                                        <span>Download Resume</span>
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='b_right'>
                    <div class="nav-bar-container">
                        <div class="nav-bar-nav-bar">
                            <div class="nav-bar-navcard">
                                <button onClick={() => handleTabClick(0)} className={`nav-bar-rectangle10 ${activeTab === 0 ? 'selected-button' : ''}`}>
                                    <IoHome className='nav-bar-icon'/>
                                    <span class="nav-bar-text">Home</span>
                                </button>
                                <button onClick={() => handleTabClick(1)} className={`nav-bar-rectangle10 ${activeTab === 1 ? 'selected-button' : ''}`}>
                                    <IoIosPaper className='nav-bar-icon'/>
                                    <span class="nav-bar-text"><span>Resume</span></span>
                                </button>
                                <button onClick={() => handleTabClick(2)} className={`nav-bar-rectangle10 ${activeTab === 2 ? 'selected-button' : ''}`}>
                                    <BiSolidBriefcase className='nav-bar-icon'/>
                                    <span class="nav-bar-text"><span>Work</span></span>
                                </button>
                                <button onClick={() => handleTabClick(3)} className={`nav-bar-rectangle10 ${activeTab === 3 ? 'selected-button' : ''}`}>
                                    <BiSolidContact className='nav-bar-icon'/>
                                    <span class="nav-bar-text"><span>Contact</span></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                    {activeTab === 0 && <div><HomeContent/></div>}
                {activeTab === 1 && <div><ResumeContent/></div>}
                {activeTab === 2 && <div><WorkContent/></div>}
                {activeTab === 3 && <div><ContactContent/></div>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio