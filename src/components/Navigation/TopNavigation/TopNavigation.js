import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileModal from "./ProfileModal";
import Applications from "./Applications";
import ProfilePicture from "./Profile.png";
import { logout } from "../../../actions/auth";

class TopNavigation extends Component {
  state = {
    profileModal: false,
    applicationsModal: false
  };

  toogleApplicationModal = () =>
    this.setState({ applicationsModal: !this.state.applicationsModal });
  toogleProfileModal = () =>
    this.setState({ profileModal: !this.state.profileModal });

  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <div className="top-fixed-navidation">
          {/* Menu and the Logo */}
          <div className="menu-button">
            <button className="menu-top-bars">
              <i className="fa fa-bars" />
            </button>
            <section
              className="logo-button-contents"
              title="Rwanda Pledges Management System"
            >
              <section className="logo-icon" />
              <b className="logo-text align-middle">PMS</b>
            </section>
          </div>

          {/* Search component */}
          <div className="main-search-containner">
            <section className="input-search">
              <button className="search">
                <i className="fa fa-search" />
              </button>
              <input type="search" className="input-search-text" />
              <button className="arrow-bottom">
                <i className="fa fa-angle-down" />
              </button>
            </section>
          </div>

          {/* buttons */}
          <div className="buttons-section">
            <section>
              <button className="btn help-button">
                <i className="fa fa-info-circle" />
              </button>
            </section>

            <section>
              <button
                onClick={this.toogleApplicationModal}
                className="btn apps-buttn"
              >
                <i className="fa fa-th" />
              </button>
            </section>
            <section>
              {/* <button className="btn user-button">
                <i className="fa fa-user-circle" />
              </button> */}
              <img
                onClick={this.toogleProfileModal}
                src={ProfilePicture}
                className="profile-picture"
                alt="Profile"
              />
            </section>
          </div>
          {this.state.profileModal ? (
            <ProfileModal
              user={this.props.auth.user}
              position={{
                title: this.props.auth.district.udp_title,
                location: this.props.auth.district.district_name
              }}
              close={this.toogleProfileModal}
              logout={this.props.logout}
            />
          ) : null}

          {this.state.applicationsModal ? (
            <Applications close={this.toogleApplicationModal} />
          ) : null}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(TopNavigation);
