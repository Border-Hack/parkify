import React, { Component } from "react";
import styles from "./Layout.module.css";
import Aux from "./../../hoc/Auxiliary/Auxiliary";
import { Link } from "react-router-dom";

class Layout extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <Aux>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                data-toggle="collapse"
                className="navbar-toggle"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className={`navbar-brand ${styles.logo}`}>
                <img
                  src="https://www.freelogodesign.org/file/app/client/thumb/d8d5837a-ec49-42f0-b094-e34be16a3511_200x200.png?1601124715306"
                  alt="logo"
                />
                PARKIFY
              </Link>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/about">
                    <div
                      className="glyphicon glyphicon-info-sign"
                      style={{ marginRight: 5 }}
                    ></div>
                    About us
                  </Link>
                </li>

                {this.state.auth ? (
                  <Aux>
                    <li>
                      <Link to="changePassword">
                        <div
                          className="glyphicon glyphicon-cog"
                          style={{ marginRight: 5 }}
                        ></div>
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <button>
                        <div
                          className="glyphicon glyphicon-log-in"
                          style={{ marginRight: 5 }}
                        ></div>
                        Logout
                      </button>
                    </li>
                  </Aux>
                ) : null}

                {!this.state.auth ? (
                  <Aux>
                    <li>
                      <Link to="/signup">
                        <div
                          className="glyphicon glyphicon-user"
                          style={{ marginRight: 5 }}
                        ></div>
                        Sign up
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <div
                          className="glyphicon glyphicon-log-in"
                          style={{ marginRight: 5 }}
                        ></div>
                        Login
                      </Link>
                    </li>
                  </Aux>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
        <footer>
          <div className="container">
            <center>Copyright © Parkify. All Rights Reserved</center>
          </div>
        </footer>
      </Aux>
    );
  }
}
export default Layout;
