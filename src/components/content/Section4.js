import React from "react";
import "./Section4.css";
import Modal from "../Model";
import EduLogo from "../../img/edu@2x.png";
import ExpLogo from "../../img/exp@2x.png";
import PrjLogo from "../../img/prj@2x.png";
import CrtLogo from "../../img/crt@2x.png";

import {
  fetchAcademic,
  fetchExperience,
  fetchProjects,
  fetchCertifications,
} from "../../actions";
import { connect } from "react-redux";

class Section4 extends React.Component {
  state = { open: false, data: [], bgLogo: "", title: "" };
  componentDidMount() {
    this.props.fetchAcademic();
    this.props.fetchExperience();
    this.props.fetchProjects();
    this.props.fetchCertifications();
  }

  openModal = () => {
    if (this.state.open) {
      return (
        <Modal
          closeModal={this.closeModal}
          data={this.state.data}
          bgLogo={this.state.bgLogo}
          title={this.state.title}
        />
      );
    } else {
      return null;
    }
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  edu = () => {
    this.setState({
      open: true,
      data: this.props.edu,
      bgLogo: EduLogo,
      title: "Education",
    });
  };

  prj = () => {
    this.setState({
      open: true,
      data: this.props.prj,
      bgLogo: PrjLogo,
      title: "Projects",
    });
  };

  exp = () => {
    this.setState({
      open: true,
      data: this.props.exp,
      bgLogo: ExpLogo,
      title: "Experience",
    });
  };

  crt = () => {
    this.setState({
      open: true,
      data: this.props.crt,
      bgLogo: CrtLogo,
      title: "Certifications",
    });
  };

  render() {
    return (
      <div className="section4">
        <div data-aos="zoom-in">
          <div className="ui header">
            <h1 className="mybg_heading">Background</h1>
          </div>
        </div>
        {/* <div data-aos="zoom-out-up"> */}
          <div className="ui equal width column stackable grid bg_container">
            <div className="column">
              <div className="equal width row">
                <div className="column">
                  <div className="bg_rect_container">
                    <div className="bg_rect-l"></div>
                    <div className="bg_rect-r"></div>
                    <div className="bg_rect" onClick={this.edu}></div>
                    <div className="bg_img"></div>
                    <img alt="" src={EduLogo} />
                    <h1 className="bg_title">Academic Details</h1>
                    <p className="bg_content">
                      Take a look at my academic background and performances in
                      it.
                    </p>

                    <div className="bg_button" onClick={this.edu}>
                      <h3>More..</h3>
                    </div>
                  </div>
                  <br />
                </div>
                <div className="column">
                  <div className="bg_rect_container">
                    <div className="bg_rect-l"></div>
                    <div className="bg_rect-r"></div>
                    <div className="bg_rect" onClick={this.prj}></div>
                    <div className="bg_img"></div>
                    <img alt="" src={PrjLogo} />
                    <h1 className="bg_title">Project Details</h1>
                    <p className="bg_content">
                      Take a look at my personal and group projects.
                    </p>
                    <div className="bg_button" onClick={this.prj}>
                      <h3>More..</h3>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="column">
              <div className="equal width row">
                <div className="column">
                  <div className="bg_rect_container">
                    <div className="bg_rect-l"></div>
                    <div className="bg_rect-r"></div>
                    <div className="bg_rect" onClick={this.exp}></div>
                    <div className="bg_img"></div>
                    <img alt="" src={ExpLogo} />
                    <h1 className="bg_title">Experience Details</h1>
                    <p className="bg_content">
                      Here are my job experience and related experience.
                    </p>
                    <div className="bg_button" onClick={this.exp}>
                      <h3>More..</h3>
                    </div>
                  </div>
                  <br />
                </div>
                <div className="column">
                  <div className="bg_rect_container">
                    <div className="bg_rect-l"></div>
                    <div className="bg_rect-r"></div>
                    <div className="bg_rect" onClick={this.crt}></div>
                    <div className="bg_img"></div>
                    <img alt="" src={CrtLogo} />
                    <h1 className="bg_title">Certification Details</h1>
                    <p className="bg_content">
                      My Licenses & certifications can be viewed here.
                    </p>
                    <div className="bg_button" onClick={this.crt}>
                      <h3>More..</h3>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        {this.openModal()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    edu: Object.values(state.edu),
    exp: Object.values(state.exp),
    prj: Object.values(state.prj),
    crt: Object.values(state.crt),
  };
};

export default connect(mapStateToProps, {
  fetchAcademic,
  fetchExperience,
  fetchProjects,
  fetchCertifications,
})(Section4);
