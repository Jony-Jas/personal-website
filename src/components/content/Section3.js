import React from "react";
import "./Section3.css";
import Badge from "../../img/badge@2x.png";
import ThulirLogo from "../../img/thulir.png";
import SbjLogo from "../../img/sbj.png";
import IitLogo from "../../img/iit.png";

function Section3() {
  return (
    <div className="section3">
      <div data-aos="zoom-in">
        <div className="ui header">
          <h1 className="achieve_title">My Achievements</h1>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="ui center aligned grid container">
          <div className="achieve_container">
            <div className="ui three column stackable grid">
              <div className="column">
                <div className="achieve">
                  <img alt="badge" src={Badge} className="badge" />
                  <div className="achieve_content">
                    <h1 className="header">
                      Synfig Studio 2D Animation Hackathon
                    </h1>
                    <p>
                      Synfig Studio 2D Animation Hackathon is a national-level
                      hackathon conducted by FOSSEE and IIT Bombay. I have
                      participated in it and won a consolation prize of ₹1000.
                    </p>
                  </div>
                  <img alt="logo" src={IitLogo} className="company_logo" />
                </div>
              </div>
              <div className="column">
                <div className="achieve">
                  <img alt="badge" src={Badge} className="badge" />
                  <div className="achieve_content">
                    <h1 className="header">Class Topper</h1>
                    <p>
                      Every year SBJ Vidya Bhavan International school gives a
                      class topper award to the students who outperformed in
                      their class 10. In the year 2018, I won the class topper
                      award.
                    </p>
                  </div>
                  <img alt="logo" src={SbjLogo} className="company_logo" />
                </div>
              </div>
              <div className="column">
                <div className="achieve">
                  <img alt="badge" src={Badge} className="badge" />
                  <div className="achieve_content">
                    <h1 className="header">
                      Thulir-District Level Quiz competition
                    </h1>
                    <p>
                      Thulir Educative organization conducts a quiz competition
                      every year. By the way, In 2017 I have participated and
                      won 1st prize at the zonal level and third prize at the
                      district level quiz competition.
                    </p>
                  </div>
                  <img alt="logo" src={ThulirLogo} className="company_logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
