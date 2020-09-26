import React, { Component } from "react";
import styles from "./Login.module.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  onChangeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  onChangePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div className={styles.login}>
        <div className="container">
          <div className="col-xs-12  col-sm-6 col-sm-offset-3">
            <div className="panel">
              <div className="panel-heading">
                <center>
                  <h4>Login</h4>
                </center>
              </div>
              <div className="panel-body">
                <form action="#" method="POST">
                  <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                      name="email"
                      onChange={this.onChangeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      id="password"
                      minlength="6"
                      required
                      name="password"
                      onChange={this.onChangePasswordHandler}
                    />
                  </div>
                  <button className="btn btn-block">Login</button>
                </form>
              </div>
              <div className="panel-footer">
                <div>
                  Don't have an account?
                  <submit className="btn btn-link">
                    Click here to Sign Up
                  </submit>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
