import React, { Component } from "react";

export default class RememberPassword extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <React.Fragment>
        <div className="col text-center">
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">FORGET PASSWORD</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />

            <button
              className="btn btn-lg btn-primary btn-block mt-3"
              type="submit"
            >
              <h4 className="h4 mx-0 my-0">Reset password</h4>
              <span class="text-sm"> send it to my Email </span>
            </button>
            <button
              className="btn mt-2 btn-lg py-3 btn-default btn-block"
              type="button"
              onClick={() => {
                this.props.switch();
              }}
            >
              Go back to Login
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
