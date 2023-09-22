import React from 'react'
import workcard from './Assets/resumecard.png'
import line2 from './Assets/line2.svg'
import recthomd from './Assets/rect1.png'
import recthomd2 from './Assets/rect1 img.png'
import rect2 from './Assets/rect2.png'
import rect2img from './Assets/rect2 img.png'
import rect3 from './Assets/rect3.png'
import rect3img from './Assets/rect3 img.png'
import rect4 from './Assets/rect4.png'
import rect4img from './Assets/rect4 img.png'
import rect5 from './Assets/rect5.png'
import rect5img from './Assets/rect5 img.png'

function WorkContent() {
  return (
    <div>
        <div className="work-section-container">
        <div className="work-section-work-section">
          <img
            src={workcard}
            alt="PortfolioCard1043"
            className="work-section-portfolio-card"
          />
          <div className="work-section-workheading">
            <div className="work-section-frame3">
              <span className="work-section-text"><span>Works</span></span>
            </div>
            <img
              src={line2}
              alt="Line51043"
              className="work-section-line5"
            />
          </div>
          <div className="work-section-porfolio-cards">
            <div className="work-section-uiux-card">
              <img
                src={recthomd}
                alt="Rectangle171375"
                className="work-section-rectangle17"
              />
              <img
                src={recthomd2}
                alt="Rectangle201396"
                className="work-section-rectangle20"
              />
              <span className="work-section-text02"><span>Rental</span></span>
              <span className="work-section-text04"><span>UI/UX</span></span>
            </div>
            <div className="work-section-web-development-card">
              <img
                src={rect2}
                alt="Rectangle161375"
                className="work-section-rectangle16"
              />
              <img
                src={rect2img}
                alt="Rectangle211396"
                className="work-section-rectangle21"
              />
              <span className="work-section-text06"><span>IdeaFlow</span></span>
              <span className="work-section-text08">
                <span>Web Development</span>
              </span>
              
            </div>
            <div className="work-section-blog-card">
              <img
                src={rect3}
                alt="Rectangle181376"
                className="work-section-rectangle18"
              />
              <img
                src={rect3img}
                alt="Rectangle221396"
                className="work-section-rectangle22"
              />
              <span className="work-section-text10"><span>NEXT.js</span></span>
              <span className="work-section-text12"><span>Blog</span></span>
            </div>
            <div className="work-section-mentorship-card">
              <img
                src={rect4}
                alt="Rectangle191376"
                className="work-section-rectangle19"
              />
              <img
                src={rect4img}
                alt="Rectangle241396"
                className="work-section-rectangle24"
              />
              <span className="work-section-text14"><span>Tech Mentor</span></span>
              <span className="work-section-text16"><span>Mentorship</span></span>
            </div>
            <div className="work-section-app-development-card">
              <img
                src={rect5}
                alt="Rectangle151375"
                className="work-section-rectangle15"
              />
              <img
                src={rect5img}
                alt="Rectangle201396"
                className="work-section-rectangle201"
              />
              <span className="work-section-text18">
                <span>Smart Bank App</span>
              </span>
              <span className="work-section-text20">
                <span>App Development</span>
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkContent