import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const MainLoading = ({ loading }) => {
  if (loading) {
    return (
      <div className="modal-backdrop bg-primary fadeIn pt-5 animated text-center text-white">
        <div
          className="pulse animated infinite  mt-5 pt-5"
          style={{ width: "300px", margin: "auto", textAlign: "center" }}
        >
          <span
            className="spinner-border spinner-border-lg"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
        <h1 className="h4 mt-4 mx-0 my-0">Loading...</h1>
      </div>
    );
  }
  return null;
};

MainLoading.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loading: state.auth.loading
});

export default connect(mapStateToProps)(MainLoading);
