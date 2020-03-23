import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class SideNavigation extends Component {
    render() {
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
                  <span className="badge badge-primary badge-lg transition">15</span>
                </div>        
              </section>

              <NavLink to="/millestone" className="nav-link">
                <i className="fa fa-bullseye" />
                <b className="nav-link-caption fadeIn animated">Millestone</b>
                <div className="badge-container">
                </div>        
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
              
            </div>
          </nav>
        )
    }
}
