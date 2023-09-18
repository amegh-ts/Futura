import React from 'react'
import resumecard from './Assets/resumecard.png'
import education from './Assets/education.svg'
import education2 from './Assets/education2.svg'
import line2 from './Assets/line2.svg'
import experience1 from './Assets/experience1.svg'
import experience2 from './Assets/experience2.svg'
import experience3 from './Assets/experience3.svg'

function ResumeContent() {
    return (
        <div>

            <div className="resume-section-container">
                <div className="resume-section-resume-section">
                    <img
                        src={resumecard}
                        alt="ResumeCard1041"
                        className="resume-section-resume-card"
                    />
                    <div className="resume-section-resumeheading">
                        <div className="resume-section-resume">
                            <span className="resume-section-text"><span>Resume</span></span>
                        </div>
                        <img
                            src={line2}
                            alt="Line51041"
                            className="resume-section-line5"
                        />
                    </div>
                    <div className="resume-section-education-experience-details">
                        <div className="resume-section-education-experience-heading">
                            <div className="resume-section-educationheading">
                                <div className="resume-section-iconparkoutlinedegreehat">
                                    <div className="resume-section-group">
                                        <img
                                            src={education}
                                            alt="Vector1576"
                                            className="resume-section-vector"
                                        />
                                        <img
                                            src={education2}
                                            alt="Vector1576"
                                            className="resume-section-vector1"
                                        />
                                    </div>
                                </div>
                                <span className="resume-section-text02">
                                    <span>Education</span>
                                </span>
                            </div>
                            <div className="resume-section-experience-heading">
                                <div className="resume-section-humbleiconsbriefcase">
                                    <div className="resume-section-group1">
                                        <img
                                            src={experience1}
                                            alt="Vector1576"
                                            className="resume-section-vector2"
                                        />
                                        <img
                                            src={experience2}
                                            alt="Vector1576"
                                            className="resume-section-vector3"
                                        />
                                        <img
                                            src={experience3}
                                            alt="Vector1576"
                                            className="resume-section-vector4"
                                        />
                                    </div>
                                </div>
                                <span className="resume-section-text04">
                                    <span>Experience</span>
                                </span>
                            </div>
                        </div>
                        <div className="resume-section-moringa-card">
                            <div className="resume-section-rectangle25">
                                <div className="resume-section-moringadetails">
                                    <span className="resume-section-text06">
                                        <span>2020-2021</span>
                                    </span>
                                    <span className="resume-section-text08">
                                        <span>Software Development</span>
                                    </span>
                                    <span className="resume-section-text10">
                                        <span>Moringa School</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="resume-section-masinde-card">
                            <div className="resume-section-rectangle251">
                                <div className="resume-section-university-details">
                                    <span className="resume-section-text12">
                                        <span>2012-2016</span>
                                    </span>
                                    <span className="resume-section-text14">
                                        <span>Disaster Management</span>
                                    </span>
                                    <span className="resume-section-text16">
                                        <span>Masinde Muliro Universiity</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="resume-section-technical-mentor">
                            <div className="resume-section-rectangle252">
                                <div className="resume-section-technicalmentordetails">
                                    <span className="resume-section-text18">
                                        <span>2022 - Present</span>
                                    </span>
                                    <span className="resume-section-text20">
                                        <span>Technical Mentor</span>
                                    </span>
                                    <span className="resume-section-text22">
                                        <span>Moringa School</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="resume-section-village2nation">
                            <div className="resume-section-rectangle253">
                                <div className="resume-section-moringadetails1">
                                    <span className="resume-section-text24">
                                        <span>2021-2022</span>
                                    </span>
                                    <span className="resume-section-text26">
                                        <span>Website Development</span>
                                    </span>
                                    <span className="resume-section-text28">
                                        <span>Village 2 Nation</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume-section-skillssection">
                        <div className="resume-section-workskills-card">
                            <div className='resume-section-workskills-card-sub1'>
                                <h2 className='resume-section-text30'>Work Skills</h2>
                                <div className='skill-button-container'>
                                    <button className='skill-button'>React.js</button>
                                    <button className='skill-button'>HTML</button>
                                    <button className='skill-button'>CSS</button>
                                    <button className='skill-button'>Figma</button>
                                    <button className='skill-button'>JavaScript</button>
                                    <button className='skill-button'>MongoDB</button>
                                    <button className='skill-button'>Git</button>
                                    <button className='skill-button'>Flutter</button>
                                    <button className='skill-button'>AWS</button>

                                </div>
                            </div>
                            <div className='resume-section-workskills-card-sub2'>
                                <h2 className='resume-section-text30'>Soft Skills</h2>
                                <div className='skill-button-container'>
                                    <button className='skill-button'>Time Management</button>
                                    <button className='skill-button'>Mentorship</button>
                                    <button className='skill-button'>Flexibility</button>
                                    <button className='skill-button'>Impeccable Communication</button>
                                    <button className='skill-button'>Research</button>
                                    <button className='skill-button'>Flexibility</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeContent