import React from 'react'
import aboutmecard from './Assets/resumecard.png'
import line2 from './Assets/line2.svg'
import phone1 from './Assets/phone1.svg'
import phone2 from './Assets/phone2.svg'
import email1 from './Assets/email1.svg'
import email2 from './Assets/email2.svg'
import email3 from './Assets/email3.svg'

function ContactContent() {
  return (
    <div>
        <div className="contact-section-container">
        <div className="contact-section-contact-section">
          <img
            src={aboutmecard}
            alt="AboutMeCard1044"
            className="contact-section-about-me-card"
          />
          <div className="contact-section-contact-heading">
            <div className="contact-section-contact">
              <span className="contact-section-text"><span>Contact</span></span>
            </div>
            <img
              src={line2}
              alt="Line51044"
              className="contact-section-line5"
            />
          </div>
          <div className="contact-section-phonecard">
            <div className="contact-section-phone">
              <div className="contact-section-group">
                <img
                  src={phone1}
                  alt="Vector1085"
                  className="contact-section-vector"
                />
                <img
                  src={phone2}
                  alt="Vector1085"
                  className="contact-section-vector1"
                />
              </div>
            </div>
            <span className="contact-section-text02"><span>Phone:</span></span>
            <span className="contact-section-text04">
              <span>+9183******96</span>
            </span>
            <span className="contact-section-text06">
              <span>+9192******90</span>
            </span>
          </div>
          <div className="contact-section-email-card">
            <div className="contact-section-fluentemojihighcontrastemail">
              <div className="contact-section-group1">
                <img
                  src={email1}
                  alt="Vector1085"
                  className="contact-section-vector2"
                />
                <img
                  src={email2}
                  alt="Vector1085"
                  className="contact-section-vector3"
                />
                <img
                  src={email3}
                  alt="Vector1085"
                  className="contact-section-vector4"
                />
              </div>
            </div>
            <span className="contact-section-text08"><span>Email:</span></span>
            <span className="contact-section-text10">
              <span>am*****02@gmail.com</span>
            </span>
          </div>
          <div className="contact-section-contactform">
            <div className="contact-section-description">
              <span>
              I am always open to discussing new projects, opportunities in tech world,
partnerships and more so mentorship. 
              </span>
            </div>
            <div className="contact-section-form">
              <input type="text" className='form-input' placeholder='Name'/>
              <input type="email" className='form-input' placeholder='Email'/>
              <textarea name="Message" className='form-input' cols="30" rows="6" placeholder='Message' ></textarea>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContent