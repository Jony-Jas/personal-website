import React, { Component } from "react";
import "./Content.css";
import Section1 from "./content/Section1";
import Section2 from "./content/Section2";
import Section3 from "./content/Section3";
import Section4 from "./content/Section4";
import ThemeSwitcher from "./content/ThemeSwitcher";

export default class Content extends Component {
  render() {
    return (
      <div className="main">
        <ThemeSwitcher />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    );
  }
}
