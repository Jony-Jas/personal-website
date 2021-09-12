import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Model.css";
import Loader from "./Loader";

const Modal = ({ closeModal, data, title, bgLogo }) => {
  const [load, setLoad] = useState(true);
  const func = () => {
    if (load) {
      return "block";
    } else {
      return "none";
    }
  };
  const isLoaded = () => {
    setLoad(false);
  };
  const list = () => {
    return data.map((dataList, index) => {
      return (
        <React.Fragment key={index}>
          <div className="massive ui list" style={{ marginTop: "0" }}>
            <div className="item modalLists">
              <img
                alt="logoImg"
                className="ui image listIcon"
                src={dataList.img}
                onLoad={isLoaded}
              ></img>
              <div className="content" style={{ width: "80%" }}>
                <br />
                <b className="header">{dataList.content.Name}</b>
                <p
                  dangerouslySetInnerHTML={{
                    __html: dataList.content.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      style={{ position: "fixed" }}
      onClick={closeModal}
    >
      <div
        className="ui standard modal visible active"
        style={{ overflowX: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <i className="close icon" onClick={closeModal}></i>
        <div className="ui center aligned header">
          <h1>{title}</h1>
        </div>
        <div
          className="content modalbg"
          style={{
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          <div
            className="ui active inverted dimmer"
            style={{ display: func() }}
          >
            <Loader />
          </div>
          {list()}
          <img alt="" className=" bgIcon" src={bgLogo}></img>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
