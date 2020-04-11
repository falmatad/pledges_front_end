import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// Inner components
import Notification from "./Notification/Notification";
import RemainingTime from "./RemainingTime/RemainingTime";
import Plans from "./Plans/Plans";
import { setConfirm } from "../../actions/confirm";

class Dashbard extends Component {
  state = {
    name: "name",
    confirmId: "janvier",
    aconfirmId2: "janvierConfirm3"
  };

  render() {
    console.log(this.props.auth);

    // check if the information is completed
    if (!this.props.auth.loading && this.props.auth.user !== null) {
      if (this.props.auth.user.activated !== 1) {
        return <Redirect to="/complete-profile" />;
      }

      return (
        <div>
          <div className="row mx-3">
            <Notification />
            <RemainingTime />
          </div>
          <Plans />
          <hr />
        </div>
      );
    } else {
      return null;
    }
  }
}
// Dashbard.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth,
  confirm: state.confirm
});

export default connect(mapStateToProps, { setConfirm })(Dashbard);
