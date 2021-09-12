import React, { Component } from "react";
import "./Header.css";
import Logo from "../img/j_logo@2x.png";
import Msglogo from "../img/message_logo@2x.png";

export default class Header extends Component {
  openLinkMail = () => {
    window.open("mailto:jonyjasjonyjas@gmail.com");
  };
  openLinkLogo = () => {
    window.location.href = "/profile";
  };
  render() {
    return (
      <div data-aos="">
        <div className="main_div">
          <div className="ui header-1">
            <div id="circle_1" data-aos="fade-down" data-aos-duration="1000"></div>
            <div id="rectangle_1" data-aos="fade-down" data-aos-duration="1000"></div>
            <div id="circle_2" data-aos="fade-down" data-aos-duration="1000"></div>
          </div>
          <div className="ui header-2">
            <div id="circle_3" data-aos="fade-down" data-aos-duration="1000"></div>
            <div id="rectangle_2" data-aos="fade-down" data-aos-duration="1000"></div>
            <div id="circle_4" data-aos="fade-down" data-aos-duration="1000"></div>
          </div>
          <div className="ui header-3" data-aos="fade-down" data-aos-duration="1000">
            <img
              className="img-logo"
              alt="logo"
              src={Logo}
              onClick={this.openLinkLogo}
            />
            <div id="rectangle_3">
              <h1 className="topic">My Profile</h1>
            </div>
            <img
              className="img-msglogo"
              alt="logo"
              src={Msglogo}
              onClick={this.openLinkMail}
            />
          </div>
        </div>
      </div>
    );
  }
}
