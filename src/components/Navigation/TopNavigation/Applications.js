import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Applications = props => {
  return (
    <Fragment>
      <section
        className="modal-backdrop bg-transparent"
        onClick={() => props.close()}
      ></section>
      <div className="applications-modal zoomIn animated faster">
        <div className="arrow fadeIn animated faster delay-1s"></div>
        <section className="applications-header-bar text-center text-white pb-3 profile-section">
          <button
            className="btn btn-sm"
            style={{
              position: "absolute",
              right: "8px",
              top: "7px",
              color: "#eee"
            }}
            onClick={() => props.close()}
          >
            Close
          </button>
          <h5 className="h5 m-0 pt-2 pb-0 mb-n1">Applications</h5>
        </section>

        <section className="p-3 bg-light applications-item-containner">
          <Link to="/" onClick={() => props.close()}>
            <div className="shadow-sm bg-white application-item  fadeIn animated delay-1ms">
              <i className="fa fa-flag-checkered"></i>
              <h4>Pillars</h4>
              <p>All the pillars</p>
            </div>
          </Link>

          <Link to="/" onClick={() => props.close()}>
            <div className="shadow-sm bg-white text-warning application-item  fadeIn animated delay-2ms">
              <i className="fa fa-flag"></i>
              <h4>Sector</h4>
              <p>App description</p>
            </div>
          </Link>

          <Link to="/" onClick={() => props.close()}>
            <div className="shadow-sm bg-white text-secondary application-item  fadeIn animated delay-3ms">
              <i className="fa fa-square"></i>
              <h4>Outcome</h4>
              <p>App description</p>
            </div>
          </Link>

          <Link to="/outputs" onClick={() => props.close()}>
            <div className="shadow-sm bg-white application-item  fadeIn animated delay-4ms">
              <i className="fa fa-square-o"></i>
              <h4>Output</h4>
              <p>App description</p>
            </div>
          </Link>

          <Link to="/indicators" onClick={() => props.close()}>
            <div className="shadow-sm bg-white application-item  fadeIn animated delay-5ms">
              <i className="fa fa-user"></i>
              <h4>Indicator</h4>
              <p>App description</p>
            </div>
          </Link>

          <Link to="/" onClick={() => props.close()}>
            <div className="shadow-sm bg-white application-item  fadeIn animated delay-6ms">
              <i className="fa fa-bullseye"></i>
              <h4>Plan</h4>
              <p>App description</p>
            </div>
          </Link>
        </section>
      </div>
    </Fragment>
  );
};

Applications.propTypes = {
  close: PropTypes.func.isRequired
  //   profile: PropTypes.object.isRequired
};

export default Applications;
