import React, { Component } from "react";
import "../../styles/login.css";
import SideContents from "./SideContents";
import LoginForm from "./LoginForm";
import RememberPassword from "./RememberPassword";

export default class Login extends Component {
  state = {
    type: "login"
  };

  changeState = () => {
    if (this.state.type === "login") {
      this.setState({ type: "recover" });
    } else {
      this.setState({ type: "login" });
    }
  };

  render() {
    let containner = null;
    if (this.state.type === "login") {
      containner = <LoginForm switch={this.changeState} />;
    } else {
      containner = <RememberPassword switch={this.changeState} />;
    }

    // render the component
    return (
      <div className="login-containner">
        <div className="row mx-0">
          <SideContents type={this.state.type} />
          {containner}
        </div>
      </div>
    );
  }
}
