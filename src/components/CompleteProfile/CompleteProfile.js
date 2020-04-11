import React, { Component } from "react";
import { Link } from "react-router-dom";
import ChangePassword from "../ChangePassword/ChangePassword";
import CompleteForm from "./CompleteForm";
export default class CompleteProfile extends Component {
  state = {
    stage: 1,
    passwordClass: "bounceIn",
    profileClass: "display-none",
    success: false
  };

  success = () => {
    setTimeout(() => {
      this.setState({ success: true });
    }, 800);
  };

  nextSlide = () =>
    this.setState({
      stage: 2,
      passwordClass: "display-none",
      profileClass: "slideInRight"
    });

  prevSlide = () =>
    this.setState({
      stage: 1,
      passwordClass: "slideInLeft",
      profileClass: "display-none"
    });

  render() {
    if (this.state.success) {
      return (
        <React.Fragment>
          <div className="bg-primary ml-n1 " style={{ height: "200px" }}>
            <div className="section text-center text-white">
              <h3 className="h2 pt-3">Welcome!!</h3>
              <h6>Complete your Profile information</h6>
            </div>
          </div>

          <div
            className=" bg-white rounded px-3 py-2 mb-4 zoomIn animated"
            style={{
              margin: "auto",
              marginTop: "-100px",
              minHeight: "400px",
              maxWidth: "740px",
              overflow: " hidden"
            }}
          >
            <h1>success</h1>
            <Link to="/dashboard"> Go to Dashboard </Link>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="bg-primary ml-n1 " style={{ height: "200px" }}>
          <div className="section text-center text-white">
            <h3 className="h2 pt-3">Welcome!!</h3>
            <h6>Complete your Profile information</h6>
          </div>
        </div>

        {/* display the success div */}

        <div
          className=" bg-white rounded px-3 py-2 mb-4"
          style={{
            margin: "auto",
            marginTop: "-100px",
            minHeight: "500px",
            maxWidth: "940px",
            overflow: " hidden"
          }}
        >
          {/* THE ODAL BEGIN */}
          <div
            className="row mx-auto  pt-2"
            style={{ maxWidth: "", margin: "auto !important" }}
          >
            <div className="col" style={{ maxWidth: "75px" }}>
              {this.state.stage === 2 ? (
                <button
                  className="btn btn-lg btn-default fadeIn animated slow"
                  onClick={this.prevSlide}
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              ) : null}
            </div>
            <div className="col-3 text-center">
              <h4 className="h4 mb-n2 color-secondary">Steps</h4>
              <h1 className="display-3">{this.state.stage}/2</h1>
            </div>
            <div className="col">
              <div className="header-title">
                {this.state.stage === 1 ? (
                  <h1>Change Password</h1>
                ) : (
                  <h1>Update the Profile</h1>
                )}

                {/* paragraph */}
                {this.state.stage === 1 ? (
                  <p>
                    The password you are using, is generated ny the server
                    <br /> You need to change it to something you will remember.
                  </p>
                ) : (
                  <p>
                    The password you are using, is generated ny the server
                    <br /> You need to change it to something you will remember.
                  </p>
                )}
              </div>
            </div>
            <div className="col text-right" style={{ maxWidth: "75px" }}>
              {this.state.stage === 1 ? (
                <button
                  className="btn btn-lg btn-default fadeIn animated slow text-secondary"
                  onClick={this.nextSlide}
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              ) : null}
            </div>
          </div>

          <div
            className={`contents-containner ${this.state.passwordClass} animated faster`}
          >
            <div className="row" style={{ minHeight: "357px" }}>
              <div className="col-4 pt-3 pb-3 bg-success">Pasword</div>
              <div className="col py-3 px-5 border-bottom  border-top">
                <div className="section">
                  <ChangePassword
                    success={() => {
                      setTimeout(() => this.nextSlide(), 700);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`contents-containner ${this.state.profileClass} animated faster`}
            style={{ minHeight: "357px" }}
          >
            <CompleteForm success={this.success} />
          </div>

          {this.state.stage === 1 ? (
            <div className="footer footer text-right pt-3 pb-2">
              <button
                className="btn btn-default text-info btn-sm fadeIn animated"
                onClick={this.nextSlide}
              >
                No! i will keep using the current password
              </button>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
