import React from "react";
import "./Section2.css";
import Working from "../../img/working@2x.png";
import Apps from "../../img/apps@2x.png";

export default function Section2() {
  return (
    <div className="section2">
      <div className="center aligned header">
        <div data-aos="zoom-in">
          <h1>What I play with?</h1>
        </div>
      </div>
      <div data-aos="fade-up">
        <div className="ui equal width stackable grid">
          <div className="equal center aligned width row section2Container">
            <div className="column working">
              <img alt="working" src={Working} />
            </div>
            <div className="column apps">
              <img alt="appsIcons" src={Apps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
