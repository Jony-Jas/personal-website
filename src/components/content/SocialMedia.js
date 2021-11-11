import React from "react";
import "./SocialMedia.css";
import ResumeIcon from "../../img/resume-icon@2x.png";

function SocialMedia() {
  return (
    <div className="social-media">
      <div className="ui grid social">
        <div className="ui stackable two column grid">
          <div className="eight wide column">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://firebasestorage.googleapis.com/v0/b/jony-jas.appspot.com/o/Resume%202.pdf?alt=media"
            >
              <img alt="" className="resume-icon" src={ResumeIcon} />
            </a>
          </div>
          <div
            className="sixteen wide column"
            ref={(node) => {
              if (node) {
                if (window.screen.width <= 600) {
                  node.style.setProperty("width", "95vw", "important");
                } else if (
                  window.screen.width >= 768 &&
                  window.screen.width <= 992
                ) {
                  node.style.setProperty("width", "60vw", "important");
                }
              }
            }}
          >
            <div className="ui six column grid" style={{ marginRight: "auto" }}>
              <div className="column" id="socialIcons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/jonyj.dev/"
                  className="in"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
              <div className="column" id="socialIcons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/jony.jas.562"
                  className="fb"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </div>
              <div className="column" id="socialIcons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/jonyjas7"
                  className="tw"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
              <div className="column" id="socialIcons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/jony-jas/"
                  className="gi"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
              <div className="column" id="socialIcons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/jony-jas/"
                  className="li"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="column" id="socialIcons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:jonyjasjonyjas@gmail.com/"
                  className="ma"
                >
                  <i className="far fa-envelope fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
