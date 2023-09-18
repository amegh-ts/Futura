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
import aboutmecard from './Assets/aboutmecard.png'


import workicon from './Assets/workicon.svg'
import contacticon from './Assets/contacticon.svg'

import {IoHome} from 'react-icons/io5'
import {IoIosPaper} from 'react-icons/io'
import {BiSolidBriefcase} from 'react-icons/bi'
import {BiSolidContact} from 'react-icons/bi'

import line53 from './Assets/line53.svg'
import codeicon from './Assets/codeicon.svg'
import vector4310 from './Assets/vector4310.svg'
import Vector4311 from './Assets/vector4311.svg'
import Vector4312 from './Assets/vector4312.svg'
import { FaFacebookF } from 'react-icons/fa'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'



function Portfolio() {
    
    const [selectedButton, setSelectedButton] = useState(0); // Initialize with the index of the default selected button

const Click = (Buttonnum) => {
  setSelectedButton(Buttonnum);
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
                                <button onClick={() => Click(0)} className={`nav-bar-rectangle10 ${selectedButton === 0 ? 'selected-button' : ''}`}>
                                    {/* <img
                                        src={homeicon}
                                        alt="Homeicon3354"
                                        class="nav-bar-homeicon"
                                    /> */}
                                    <IoHome className='nav-bar-icon'/>
                                    <span class="nav-bar-text">Home</span>
                                </button>
                                <button onClick={() => Click(1)} className={`nav-bar-rectangle10 ${selectedButton === 1 ? 'selected-button' : ''}`}>
                                    {/* <img
                                        src={resumeicon}
                                        alt="resumeicon3357"
                                        class="nav-bar-resumeicon"
                                    /> */}
                                    <IoIosPaper className='nav-bar-icon'/>
                                    <span class="nav-bar-text"><span>Resume</span></span>
                                </button>
                                <button onClick={() => Click(2)} className={`nav-bar-rectangle10 ${selectedButton === 2 ? 'selected-button' : ''}`}>
                                    {/* <img
                                        src={workicon}
                                        alt="workicon3361"
                                        class="nav-bar-workicon"
                                    /> */}
                                    <BiSolidBriefcase className='nav-bar-icon'/>
                                    <span class="nav-bar-text"><span>Work</span></span>
                                </button>
                                <button onClick={() => Click(3)} className={`nav-bar-rectangle10 ${selectedButton === 3 ? 'selected-button' : ''}`}>
                                    {/* <img
                                        src={contacticon}
                                        alt="contacticon3359"
                                        class="nav-bar-contacticon"
                                    /> */}
                                    <BiSolidContact className='nav-bar-icon'/>
                                    <span class="nav-bar-text"><span>Contact</span></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="about-me-section-container">
                        <div class="about-me-section-about-me-section">
                            <img
                                src={aboutmecard}
                                alt="AboutMeCard2947"
                                class="about-me-section-about-me-card"
                            />
                            <div class="about-me-section-about-meheading">
                                <div class="about-me-section-frame3">
                                    <span class="about-me-section-text">ABOUT ME</span>
                                </div>
                                <img
                                    src={line53}
                                    alt="Line53372"
                                    class="about-me-section-line5"
                                />
                            </div>
                            <div class="about-me-section-about-medetails">
                                <span class="about-me-section-text01">
                                    <span>
                                        Hello there! I'm thrilled to welcome you to my portfolio. I am
                                        a passionate and versatile full-stack developer with a keen interest in exploring the
                                        latest cutting-edge technologies.My journey in the world of web development has been nothing
                                        short of exhilarating, andI constantly strive to enhance my skills and embrace emerging
                                        trends in the industry.
                                    </span>
                                </span>
                            </div>
                            <div class="about-me-section-about-subheading">
                                <span class="about-me-section-text10">What I do!</span>
                            </div>
                            <div class="about-me-section-web-development">
                                <div class="about-me-section-web-development-card">
                                    <div class="about-me-section-web-development-details">
                                        <div class="about-me-section-web-developmentheading">
                                            <img
                                                src={codeicon}
                                                alt="codeicon4310"
                                                class="about-me-section-codeicon"
                                            />
                                            <span class="about-me-section-text12">
                                                <span>Web Development</span>
                                            </span>
                                        </div>
                                        <span class="about-me-section-text14">
                                            <span>
                                                <span>As a developer, I find myself most captivated by the power and flexibility of
                                                NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and
                                                discover innovative ways to create fast,scalable, and user-friendly applications.</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="about-me-section-app-development-section">
                                <div class="about-me-section-app-development-card">
                                    <div class="about-me-section-appdetails">
                                        <div class="about-me-section-app-development-heading">
                                            <div class="about-me-section-app">
                                                <div class="about-me-section-group">
                                                    <img
                                                        src={vector4310}
                                                        alt="Vector4310"
                                                        class="about-me-section-vector1"
                                                    />
                                                </div>
                                            </div>
                                            <span class="about-me-section-text27">
                                                <span>App Development</span>
                                            </span>
                                        </div>
                                        <span class="about-me-section-text29">
                                            <span>
                                                <span>With a focus on user-centric design andcutting-edge technologies, I thrive on
                                                building intuitive and efficient appsthat make a positive impact on people's
                                                lives. Let's turn ideas into reality and shape the future together.</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="about-me-section-uiux-section">
                                <div class="about-me-section-uiux-design-card">
                                    <div class="about-me-section-uiux-details">
                                        <div class="about-me-section-uiu-xheading">
                                            <div class="about-me-section-uxicon">
                                                <div class="about-me-section-group1">
                                                    <img
                                                        src={Vector4311}
                                                        alt="Vector4311"
                                                        class="about-me-section-vector2"
                                                    />
                                                
                                                </div>
                                            </div>
                                            <span class="about-me-section-text42">
                                                <span>UI/UX Designing</span>
                                            </span>
                                        </div>
                                        <span class="about-me-section-text44">
                                            <span>
                                                <span>Crafting visually appealing and intuitive user interfaces that offer a delightful user
                                                experience is something I'm truly fanatic about.</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="about-me-section-mentorship">
                                <div class="about-me-section-tech-mentorship-card">
                                    <div class="about-me-section-mentorshipdetails">
                                        <div class="about-me-section-mentorshipheading">
                                            <img
                                                src={Vector4312}
                                                alt="Mentoricon4311"
                                                class="about-me-section-mentoricon"
                                            />
                                            <span class="about-me-section-text53">
                                                <span>Mentorship</span>
                                            </span>
                                        </div>
                                        <span class="about-me-section-text55">
                                            <span>
                                                <span>I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the
                                                community that has supported me throughout my career.</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio