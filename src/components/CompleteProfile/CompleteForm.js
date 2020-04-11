import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { API_URL, CONFIG } from "../../utils/api";
import { updateProfile } from "../../actions/auth";

class CompleteForm extends Component {
  state = {
    username: "",
    names: "",
    dob: "",
    gender: "",
    errors: "",
    success: "",
    errorInput: null,
    loading: false
  };

  inputChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
      errorInput: "",
      errors: "",
      success: ""
    });

  submitProfile = async e => {
    e.preventDefault();

    // name
    if (this.state.username.length < 4) {
      return this.setState({
        errors: "the username must not be less than 4 characters",
        errorInput: "username"
      });
    }

    // names
    if (this.state.names.length < 6) {
      return this.setState({
        errors: "the username must not be less than 6 characters",
        errorInput: "names"
      });
    }

    // dob
    if (this.state.dob === "") {
      return this.setState({
        errors: "Date of birth must not be empty",
        errorInput: "dob"
      });
    }

    // dob
    if (this.state.gender === "") {
      return this.setState({
        errors: "Please select your gender",
        errorInput: "gender"
      });
    }

    this.setState({
      loading: true
    });
    // send the profile

    try {
      await axios.put(
        `${API_URL}/users/profile`,
        {
          username: this.state.username,
          names: this.state.names,
          dob: this.state.dob,
          gender: this.state.gender
        },
        CONFIG
      );

      this.props.updateProfile({
        username: this.state.username,
        names: this.state.names,
        dob: this.state.dob,
        gender: this.state.gender
      });

      this.setState({
        loading: false,
        success: "Profile updated",
        username: "",
        names: "",
        dob: "",
        gender: ""
      });

      this.props.success();
    } catch (error) {
      this.setState({
        loading: false,
        error: "Failed to update profile"
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitProfile}>
        <div className="row border-top border-bottom">
          <div className="col-4 bg-success">vector place</div>

          <div className="col px-5 pt-4 pb-4">
            {this.state.errors !== "" && this.state.errorInput === "" ? (
              <div className="alert alert-danger bounceIn animated">
                {this.state.errors}
              </div>
            ) : null}

            {this.state.success !== "" ? (
              <div className="alert alert-success bounceIn animated">
                {this.state.success}
              </div>
            ) : null}

            <div className="form-group">
              <label htmlFor="username-input">Username</label>
              <input
                type="text"
                className={
                  this.state.errorInput === "username"
                    ? "form-control is-invalid pulse animated"
                    : "form-control "
                }
                id="username-input"
                name="username"
                onChange={this.inputChange}
                disabled={this.state.loading ? true : false}
              />
              {this.state.errorInput === "username" &&
              this.state.errors !== "" ? (
                <div className="text-danger">{this.state.errors}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="names-input">Names</label>
              <input
                type="text"
                className={
                  this.state.errorInput === "names"
                    ? "form-control is-invalid pulse animated"
                    : "form-control "
                }
                id="names-input"
                name="names"
                onChange={this.inputChange}
                disabled={this.state.loading ? true : false}
              />
              {this.state.errorInput === "names" && this.state.errors !== "" ? (
                <div className="text-danger">{this.state.errors}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="dob-input">Date of Birth</label>
              <input
                type="date"
                className={
                  this.state.errorInput === "dob"
                    ? "form-control is-invalid pulse animated"
                    : "form-control "
                }
                id="dob-input"
                name="dob"
                onChange={this.inputChange}
                disabled={this.state.loading ? true : false}
              />
              {this.state.errorInput === "dob" && this.state.errors !== "" ? (
                <div className="text-danger">{this.state.errors}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="gender-input">Gender</label>

              <select
                name="gender"
                className={
                  this.state.errorInput === "gender"
                    ? "form-control is-invalid pulse animated"
                    : "form-control "
                }
                id="gender-input"
                onChange={this.inputChange}
                disabled={this.state.loading ? true : false}
              >
                <option value="">Selct your gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>

              {this.state.errorInput === "gender" &&
              this.state.errors !== "" ? (
                <div className="text-danger">{this.state.errors}</div>
              ) : null}
            </div>

            <div className="pt-3 pb-3 section text-right">
              {this.state.loading ? (
                <button className="btn btn-success" type="button" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Updating Profile...
                </button>
              ) : (
                <button
                  className={
                    !this.state.username.length < 4 &&
                    !this.state.names.length < 6 &&
                    this.state.dob !== ""
                      ? "btn btn-success"
                      : "btn btn-secondary"
                  }
                  type="submit"
                >
                  Update Profile
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=" pt-3 px-4 text-center pb-2 text-secondary">
          for more settings to to the profile
        </div>
      </form>
    );
  }
}

CompleteForm.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  success: PropTypes.func
};

export default connect(null, { updateProfile })(CompleteForm);
