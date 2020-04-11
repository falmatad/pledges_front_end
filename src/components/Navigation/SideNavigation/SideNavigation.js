import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class SideNavigation extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <nav className="app-nav transition">
          <button className="action-button btn btn-primary btn-lg">
            <i className="fa fa-plus" />
          </button>

          <div className="nav-main-buttons-containner">
            <NavLink to="/dashboard" className="nav-link">
              <i className="fa fa-home" />
              <b className="nav-link-caption fadeIn animated">Dashboard</b>
            </NavLink>

            <section to="#" className="nav-link">
              <i className="fa fa-bell" />
              <b className="nav-link-caption fadeIn animated">Notification</b>
              <div className="badge-container">
                <span className="badge badge-primary badge-lg transition">
                  15
                </span>
              </div>
            </section>

            <NavLink to="/plans" className="nav-link">
              <i className="fa fa-bullseye" />
              <b className="nav-link-caption fadeIn animated">My Plans</b>
              <div className="badge-container"></div>
            </NavLink>

            <NavLink to="/outputs" className="nav-link">
              <i className="fa fa-bullseye" />
              <b className="nav-link-caption fadeIn animated">Outputs</b>
              <div className="badge-container"></div>
            </NavLink>

            <NavLink to="/millestone" className="nav-link">
              <i className="fa fa-bullseye" />
              <b className="nav-link-caption fadeIn animated">Millestone</b>
              <div className="badge-container"></div>
            </NavLink>

            <NavLink to="/addplan" className="nav-link">
              <i className="fa fa-flag-checkered" />
              <b className="nav-link-caption fadeIn animated">Add plan</b>
            </NavLink>

            <NavLink to="/addindicator" className="nav-link">
              <i className="fa fa-home" />
              <b className="nav-link-caption fadeIn animated">Add indicator</b>
            </NavLink>

            <NavLink to="/complete" className="nav-link">
              <i className="fa fa-home" />
              <b className="nav-link-caption fadeIn animated">Complete Data</b>
              <div className="badge-container">
                <span className="badge badge-secondary">New</span>
              </div>
            </NavLink>

            <NavLink to="/test" className="nav-link">
              <i className="fa fa-home" />
              <b className="nav-link-caption fadeIn animated">Test</b>
              <div className="badge-container">
                <span className="badge badge-warning">New</span>
              </div>
            </NavLink>
          </div>
        </nav>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SideNavigation);
