import React, { Component } from "react";
import styles from "./MyBooking.module.css";
import Aux from "./../../../hoc/Auxiliary/Auxiliary";

class Park extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.park}>
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h4>{this.props.name}</h4>
            </div>
            <div className="panel-body" style={{ padding: 0 }}>
              <img src={this.props.url} alt="park" className={styles.image} />
            </div>
            <div className="panel-footer">
              <button disabled className="btn btn-warning btn-block">
                Booked Successfully
              </button>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}
export default Park;
