import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API_URL, CONFIG } from "../../utils/api";

class ChangePassword extends Component {
  state = {
    currentPassword: "",
    newPasssword: "",
    reNewPassword: "",
    validatedPassword: false,
    currentPasswordEmpty: false,
    validations: {
      smallLetter: false,
      upperCase: false,
      number: false,
      special: false
    },
    errors: "",
    success: "",
    loading: false,
    passwordFocuss: false,
    regex: {
      capitalLetter: /[A-Z]/,
      smallLetter: /[a-z]/,
      number: /[0-9]/,
      specialCharacter: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      other: ""
    }
  };

  submitData = async e => {
    e.preventDefault();
    if (this.state.currentPassword === this.state.newPasssword) {
      return this.setState({
        errors: "the new password and the new password must not be the same"
      });
    }
    try {
      if (
        this.state.validations.smallLetter &&
        this.state.validations.special &&
        this.state.validations.upperCase &&
        this.state.validations.number &&
        this.state.newPasssword.length >= 8 &&
        this.state.newPasssword === this.state.reNewPassword &&
        this.state.currentPassword !== ""
      ) {
        // alert("passsword submitted");
        this.setState({ loading: true });
        await axios.put(
          `${API_URL}/auth/password`,
          {
            new_password: this.state.newPasssword,
            password: this.state.currentPassword
          },
          CONFIG
        );

        this.setState({
          currentPassword: "",
          newPasssword: "",
          reNewPassword: "",
          validatedPassword: false,
          currentPasswordEmpty: false,
          validations: {
            smallLetter: false,
            upperCase: false,
            number: false,
            special: false
          },
          errors: "",
          success: "Password Updated!",
          loading: false,
          passwordFocuss: false
        });

        this.props.success();
      }
    } catch (error) {
      this.setState({
        loading: false,
        errors: error.response.data.msg
      });
    }
  };

  inputFocuss = e => {
    if (e.target.name === "newPasssword") {
      this.setState({
        passwordFocuss: true
      });
    } else {
      this.setState({
        passwordFocuss: false
      });
    }
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (this.state.currentPassword === "") {
      this.setState({
        currentPasswordEmpty: true
      });
    }

    if (this.state.currentPassword !== "") {
      this.setState({
        currentPasswordEmpty: false
      });
    }
    // check for the new password validation
    if (e.target.name === "newPasssword") {
      let validationsReturn = {
        smallLetter: false,
        upperCase: false,
        number: false,
        special: false
      };

      if (this.state.regex.smallLetter.test(e.target.value)) {
        validationsReturn.smallLetter = true;
      } else {
        validationsReturn.smallLetter = false;
      }

      // 2. Cppital character
      if (this.state.regex.capitalLetter.test(e.target.value)) {
        validationsReturn.upperCase = true;
      } else {
        validationsReturn.upperCase = false;
      }

      // 3. number
      if (this.state.regex.specialCharacter.test(e.target.value)) {
        validationsReturn.special = true;
      } else {
        validationsReturn.special = false;
      }

      // 3. number
      if (this.state.regex.number.test(e.target.value)) {
        validationsReturn.number = true;
      } else {
        validationsReturn.number = false;
      }

      this.setState({
        validations: { ...validationsReturn }
      });
    }
  };

  render() {
    return (
      <div className="px-3 pt-2">
        {this.state.errors !== "" ? (
          <div className="alert alert-danger bounceIn animated">
            {this.state.errors}
          </div>
        ) : null}

        {this.state.success !== "" ? (
          <div className="alert alert-success bounceIn animated">
            {this.state.success}
          </div>
        ) : null}

        <form onSubmit={this.submitData}>
          <div className="form-group">
            <label htmlFor="currentPassword">
              Current Password{" "}
              <span className="text-gray">
                (the password you used to login)
              </span>
            </label>
            <input
              type="password"
              className={
                this.state.currentPasswordEmpty === true
                  ? "form-control is-invalid pulse animated"
                  : "form-control "
              }
              id="currentPassword"
              name="currentPassword"
              onFocus={this.inputFocuss}
              onChange={this.inputChange}
              disabled={this.state.loading ? true : false}
            />
          </div>
          {this.state.currentPasswordEmpty ? (
            <div className="text-danger mb-2 mt-n3">
              Current password must not be empty
            </div>
          ) : null}

          <div className="form-group">
            <label htmlFor="newPasssword">New Password</label>
            <input
              type="password"
              className={
                this.state.validations.smallLetter &&
                this.state.validations.special &&
                this.state.validations.upperCase &&
                this.state.validations.number &&
                this.state.newPasssword.length >= 8
                  ? "form-control is-valid"
                  : "form-control"
              }
              id="newPasssword"
              name="newPasssword"
              onChange={this.inputChange}
              onFocus={this.inputFocuss}
              disabled={this.state.loading ? true : false}
            />

            {this.state.passwordFocuss ? (
              <div className="alert pb-n3 shadow shadow-sm px-3 py-3 bg-dabger">
                <h5>Password hint</h5>
                <ul className="password-check-ul">
                  <li>
                    {this.state.validations.upperCase ? (
                      <i className="fa fa-check-circle text-success"></i>
                    ) : (
                      <i className="fa fa-circle-o text-secondary"></i>
                    )}{" "}
                    <span
                      className={
                        this.state.validations.upperCase
                          ? "active-text"
                          : "deactive-text"
                      }
                    >
                      Include an uppercase character
                    </span>
                  </li>
                  <li>
                    {this.state.validations.smallLetter ? (
                      <i className="fa fa-check-circle text-success"></i>
                    ) : (
                      <i className="fa fa-circle-o text-secondary"></i>
                    )}{" "}
                    <span
                      className={
                        this.state.validations.smallLetter
                          ? "active-text"
                          : "deactive-text"
                      }
                    >
                      Include an lowercase character
                    </span>
                  </li>

                  <li>
                    {this.state.validations.number ? (
                      <i className="fa fa-check-circle text-success"></i>
                    ) : (
                      <i className="fa fa-circle-o text-secondary"></i>
                    )}{" "}
                    <span
                      className={
                        this.state.validations.number
                          ? "active-text"
                          : "deactive-text"
                      }
                    >
                      Include an Number
                    </span>
                  </li>

                  <li>
                    {this.state.validations.special ? (
                      <i className="fa fa-check-circle text-success"></i>
                    ) : (
                      <i className="fa fa-circle-o text-secondary"></i>
                    )}{" "}
                    <span
                      className={
                        this.state.validations.special
                          ? "active-text"
                          : "deactive-text"
                      }
                    >
                      Include a symbol
                    </span>
                  </li>

                  <li>
                    {this.state.newPasssword.length >= 8 ? (
                      <i className="fa fa-check-circle text-success"></i>
                    ) : (
                      <i className="fa fa-circle-o text-secondary"></i>
                    )}{" "}
                    <span
                      className={
                        this.state.newPasssword.length >= 8
                          ? "active-text"
                          : "deactive-text"
                      }
                    >
                      minimum 8 characters
                    </span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="reNewPassword">
              New Password{" "}
              <span className="text-gray">(new password again)</span>
            </label>
            <input
              type="password"
              className={
                this.state.validations.smallLetter &&
                this.state.validations.special &&
                this.state.validations.upperCase &&
                this.state.validations.number &&
                this.state.newPasssword.length >= 8 &&
                this.state.newPasssword === this.state.reNewPassword
                  ? "form-control is-valid"
                  : "form-control"
              }
              id="reNewPassword"
              name="reNewPassword"
              onChange={this.inputChange}
              onFocus={this.inputFocuss}
              disabled={this.state.loading ? true : false}
            />
          </div>
          <section className="text-right">
            {this.state.loading ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                Updating...
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={
                  this.state.validations.smallLetter &&
                  this.state.validations.special &&
                  this.state.validations.upperCase &&
                  this.state.validations.number &&
                  this.state.newPasssword.length >= 8 &&
                  this.state.newPasssword === this.state.reNewPassword &&
                  this.state.currentPassword !== ""
                    ? false
                    : true
                }
              >
                Update password
              </button>
            )}
          </section>
        </form>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  success: PropTypes.func
};

export default ChangePassword;
