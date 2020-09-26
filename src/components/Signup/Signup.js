import React, { Component } from "react";
import styles from "./Signup.module.css";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    phone_number: "",
  };
  onChangeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  onChangeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  onChangePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  onChangePhoneNumberHandler = (event) => {
    this.setState({ phone_number: event.target.value });
  };
  render() {
    return (
      <div className={styles.signup}>
        <div class="container">
          <div class="col-xs-12  col-sm-6 col-sm-offset-3">
            <div class="panel">
              <div class="panel-heading">
                <center>
                  <h4>Sign Up</h4>
                </center>
              </div>
              <div class="panel-body">
                <form action="#" method="POST">
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      id="name"
                      required
                      name="name"
                      onChange={this.onChangeNameHandler}
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter Valid Email"
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                      onChange={this.onChangeEmailHandler}
                      name="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password (min. 6 character)"
                      id="password"
                      minlength="6"
                      required
                      name="password"
                      onChange={this.onChangePasswordHandler}
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone_number">Phone Number:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Valid Phone Number (Ex. 8448444853)"
                      id="phone_number"
                      required
                      name="phone"
                      onChange={this.onChangePhoneNumberHandler}
                    />
                  </div>
                  <button class="btn btn-block">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
