import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="ui center center aligned header loaderWrapper">
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="loadingTitle">Loading...</h1>
    </div>
  );
}

export default Loader;
