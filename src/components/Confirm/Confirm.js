import React, { Component } from "react";
import PropTypes from "prop-types";
import BackDrop from "../../shared/BackDrop/BackDrop";
import { connect } from "react-redux";
import {
  closeConfirm,
  successConfirm,
  failedConfirm
} from "../../actions/confirm";
import axios from "axios";
import { API_URL, CONFIG } from "../../utils/api";

class Confirm extends Component {
  state = {
    times: 0,
    password: "",
    error: "",
    loading: false,
    animation: "bounceIn"
  };

  inputChange = e => this.setState({ password: e.target.value, error: "" });

  confirm = async () => {
    if (this.props.confirm.type === "secured") {
      if (this.state.password === "") {
        this.setState({ error: "The password must not be empty" });
        return true;
      }

      // send the ajax to the stuff
      this.setState({ loading: true });
      try {
        let res = await axios.post(
          `${API_URL}/auth/validate`,
          { password: this.state.password },
          CONFIG
        );

        console.log("API RESPONCE: ", res.data);
        if (res.data.authenticated) {
          //SUCCESS
          this.props.successConfirm(this.props.confirm.actionId);
        } else {
          this.setState({ loading: false });
          this.setState({
            loading: false,
            times: this.state.times + 1,
            animation: "shake",
            error: "Your password is incorect!"
          });

          setTimeout(() => {
            if (this.state.animation === "shake") {
              this.setState({ animation: "" });
            }
          }, 600);
        }

        this.setState({ loading: false });
      } catch (error) {
        this.setState({
          loading: false,
          times: this.state.times + 1,
          animation: "shake",
          error: "Your password is incorect!"
        });

        setTimeout(() => {
          if (this.state.animation === "shake") {
            this.setState({ animation: "" });
          }
        }, 600);
      }
    } else {
      this.props.successConfirm(this.props.confirm.actionId);
    }
  };

  close = () => {
    if (!this.state.loading) {
      this.props.closeConfirm();
    }
  };

  render() {
    if (this.state.times >= 3) {
      this.setState({
        times: 0,
        password: "",
        error: "",
        loading: false,
        animation: "bounceIn"
      });
      this.props.failedConfirm();
    }

    let inputHTML = null;
    const { type, title, body, theme } = this.props.confirm;
    if (type === "secured") {
      inputHTML = (
        <React.Fragment>
          {this.state.error !== "" ? (
            <section className="alert alert-danger mt-3 mb-n1 fadeIn animated">
              {this.state.error}
            </section>
          ) : null}

          <div className="form-group mb-n3 pt-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.inputChange}
            />
          </div>
        </React.Fragment>
      );
    }

    // prevent the modal when the user is not logged in
    if (!this.props.isAuthenticated) {
      return null;
    }

    if (this.props.confirm.active) {
      return (
        <div>
          <BackDrop
            close={
              this.props.confirm.type !== "secured"
                ? this.close
                : () => console.log()
            }
          />
          <div
            className={`modal-dialog modal-md add-task-modal ${this.state.animation} animated fixed-modal`}
            role="document"
          >
            <div className="modal-content">
              <div className={`modal-header bg-${theme}`}>
                <h5 className="modal-title text-white">{title}</h5>
                <button
                  type="button"
                  className="close text-white"
                  aria-label="Close"
                  onClick={() => this.close()}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body px-4 ">
                {body}
                {inputHTML}
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary  px-4 btn-lg"
                  data-dismiss="modal"
                  onClick={() => this.close()}
                >
                  No
                </button>

                {this.state.loading ? (
                  <button
                    className={`btn px-4 btn-lg btn-${theme}`}
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-lg"
                      role="status"
                      aria-hidden="true"
                      style={{
                        display: "-webkit-inline-box",
                        position: "relative",
                        top: "2px"
                      }}
                    ></span>{" "}
                    Checking...
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`btn px-4 btn-lg btn-${theme}`}
                    onClick={this.confirm}
                  >
                    Yes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Confirm.propTypes = {
  closeConfirm: PropTypes.func.isRequired,
  successConfirm: PropTypes.func.isRequired,
  failedConfirm: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  confirm: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  confirm: state.confirm,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  closeConfirm,
  successConfirm,
  failedConfirm
})(Confirm);
