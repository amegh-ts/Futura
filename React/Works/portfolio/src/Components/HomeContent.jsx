import React from 'react'
import './Portfolio.css'

import line53 from './Assets/line53.svg'
import codeicon from './Assets/codeicon.svg'
import vector4310 from './Assets/vector4310.svg'
import Vector4311 from './Assets/vector4311.svg'
import Vector4312 from './Assets/vector4312.svg'
import aboutmecard from './Assets/aboutmecard.png'

function HomeContent() {
  return (
    <div>
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
  )
}

export default HomeContent