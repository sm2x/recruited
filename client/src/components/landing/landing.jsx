import React from 'react';
import Slider from 'react-slick';
import { connect } from "react-redux";

class Landing extends React.Component {

  renderContent(){
    switch (this.props.auth) {
      case null:
        return (
          <div>
          </div>
        );
      case false:
        return (
          <div className="inner-navigation-div">
            <a className="button-login-google-real" href="/auth/google">Login With Google</a>
          </div>
        );
      default:
        return (
        <div className="inner-nagivation-div">
          <a className="button-login-google-real" href="/api/logout">Logout</a>
        </div>
      );
    }
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };

    return (
      <div className="main-landing-div">
        <div className="session-div-logged-out">
          <div className="carousel">
            <h2 className="preview">Preview</h2>
            <Slider {...settings}>
              <div className="preview-item">
                <h3 className="preview-header">Overall Website</h3>
                <a href="gifs/overall-viewing.gif" target="_blank">
                  <img className="preview-image"
                    src="gifs/overall-viewing.gif" alt="overall"/>
                </a>
              </div>
              <div className="preview-item">
                <h3 className="preview-header">Resume Uploading</h3>
                <a href="gifs/resume-uploading.gif" target="_blank">
                  <img className="preview-image"
                    src="gifs/resume-uploading.gif" alt="uploading"/>
                </a>
              </div>
              <div className="preview-item">
                <h3 className="preview-header">Resume Approving</h3>
                <a href="gifs/resume-checking.gif" target="_blank">
                  <img className="preview-image"
                    src="gifs/resume-checking.gif" alt="approving"/>
                </a>
              </div>
              <div className="preview-item">
                <h3 className="preview-header">Resume Reviewing</h3>
                <a href="gifs/resume-reviewing.gif" target="_blank">
                  <img className="preview-image"
                    src="gifs/resume-reviewing.gif" alt="reviewing"/>
                </a>
              </div>
              <div className="preview-item">
                <h3 className="preview-header">User Page</h3>
                <a href="gifs/user-page.png" target="_blank">
                  <img className="preview-image"
                    src="gifs/user-page.png" alt="user"/>
                </a>
              </div>
            </Slider>
          </div>
          <p className="first-text">
            Start By Doing What Is Necessary,
          </p>
          <p className="second-text">
            Then What Is Possible, And Suddenly
          </p>
          <p className="third-text">
            You Are Doing The Impossible.
          </p>
          <p className="fourth-text">
            Join The Work Force Today!
          </p>
          <button className="button-to-sign-up">{this.renderContent()}</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}


export default connect(mapStateToProps)(Landing);
