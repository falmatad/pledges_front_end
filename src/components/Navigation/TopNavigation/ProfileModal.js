import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProfilePicture from "./Profile.png";

const ProfileModal = props => {
  return (
    <Fragment>
      <section
        className="modal-backdrop bg-transparent "
        onClick={() => props.close()}
      ></section>
      <div className="profile-modal zoomIn animated faster">
        <div
          className="arrow fadeIn animated delay-6ms"
          style={{ background: "#0161c7" }}
        ></div>
        <section
          style={{ background: "#0161c7" }}
          className="text-center text-white pb-3 profile-section"
        >
          <button
            className="btn btn-sm"
            style={{ position: "absolute", right: "8px", top: "7px" }}
            onClick={() => props.close()}
          >
            Close
          </button>
          <div className="img-containner">
            <img src={ProfilePicture} alt="Proile" />
          </div>

          <h2 className="h5 mt-2 mb-1">{props.user.username}</h2>
          <span className="badge badge-primary shadow-lg px-2">
            {props.user.email}
          </span>
          <br />
          <span className="badge badge-success px-2">
            {props.position.title}/{props.position.title}
          </span>
        </section>

        <div className="px-3 pt-3">
          <Link
            to="/profile"
            className="btn btn-outline-primary btn-block mb-2"
          >
            Edit Profile
          </Link>
          <button
            className="btn btn-danger btn-block"
            onClick={() => props.logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
};

ProfileModal.propTypes = {
  logout: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

export default ProfileModal;
