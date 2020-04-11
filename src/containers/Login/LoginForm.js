import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from "../../components/Logo/Logo";
import { login, clearErrors, loginLoading } from "../../actions/auth";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  };

  isEmail = email => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    // clear errors
    if (this.state.errors.length > 0) {
      this.props.clearErrors();
    }
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.clearErrors();

    // check email is not empty
    if (this.state.email === "") {
      return this.setState({
        errors: [...this.state.errors, "The Email must not be empty"]
      });
    }

    // check email is real
    if (!this.isEmail(this.state.email)) {
      return this.setState({
        errors: [...this.state.errors, "The email is not correct"]
      });
    }

    // check email
    if (this.state.password === "" || this.state.password.length < 6) {
      return this.setState({
        errors: [
          ...this.state.errors,
          `The Password must not be empty - or less to 6 (length)`
        ]
      });
    }

    // console.log(this.state);
    this.props.loginLoading();
    this.props.login(this.state.email, this.state.password);
  };
  render() {
    if (!this.props.auth.loading && this.props.auth.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    let DisplayErrors = null;
    if (this.state.errors.length > 0) {
      DisplayErrors = this.state.errors.map((err, i) => (
        <section key={i} className="alert alert-danger bounceIn animated">
          {err}
        </section>
      ));
    }

    return (
      <React.Fragment>
        <div className="col text-center">
          <form className="form-signin " onSubmit={this.formSubmit}>
            <Logo width={72} height={72} className="mb-4 bg-primary" />

            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            {DisplayErrors}
            {this.props.auth.errors.length >= 1 ? (
              <div className="alert alert-danger bounceIn animated">
                {this.props.auth.errors[0].msg}
              </div>
            ) : null}
            <label className="sr-only">Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email address"
              name="email"
              onChange={this.onChange}
              required
              autoFocus={true}
            />
            <label className="sr-only">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.onChange}
              placeholder="Password"
              required
            />
            {this.props.auth.loginLoading ? (
              <button
                className="btn btn-lg btn-primary btn-block mt-3"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                Loading...
              </button>
            ) : (
              <button
                className="btn btn-lg btn-primary btn-block mt-3"
                type="submit"
              >
                Sign in
              </button>
            )}

            <button
              className="btn btn-lg btn-default mt-4"
              type="button"
              onClick={() => {
                this.props.switch();
              }}
            >
              Forget password
            </button>
            <p className="mt-5 mb-3 text-muted">
              © {new Date().getFullYear() !== 2020 ? "2020 - " : ""}
              {new Date().getFullYear()}
            </p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  loginLoading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login, clearErrors, loginLoading })(
  LoginForm
);
