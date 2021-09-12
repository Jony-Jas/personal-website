import React from "react";
import Profile from "../../img/Profile@2x.png";
import CloudIcons from "../../img/cloud-icons@2x.png";
import Design_1 from "../../img/design_1.png";
import SocialMedia from "./SocialMedia";
import "./Section1.css";

function Section1() {
  return (
    <div className="ui grid">
      <div className="ui two column stackable grid section1">
        <div className="column left-1">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h1 className="head">Hello, I'm Jony Jas</h1>
            <h3 className="sub-head">
              WEB DEVELOPER | APP DEVELOPER | UI/UX DESIGNER
            </h3>
            <p className="description">
              💻 I am an ECE Second-year undergrad passionate about software
              development, web development, artificial intelligence, and
              graphics designs. I also have an interest in computer
              architectures, I love exploring new tech stacks and leveraging
              them to build cool stuff.
            </p>
            <SocialMedia />
          </div>
        </div>
        <div className="column right center aligned">
          <div data-aos="fade-left" data-aos-duration="1000">
            <div className="img_container">
              <img className="cloud_icons" alt="cloudIconsDesign" src={CloudIcons} />
              <img className="profile_image" alt="ProfileImage" src={Profile} />
              <img className="design-1" alt="design" src={Design_1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
