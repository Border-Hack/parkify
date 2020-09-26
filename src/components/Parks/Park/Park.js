import React, { Component } from "react";
import styles from "./Park.module.css";
import Aux from "./../../../hoc/Auxiliary/Auxiliary";

class Park extends Component {
  render() {
    const panelClass = ["panel"];
    const btnClass = ["btn", "btn-block"];
    if (this.props.safe) {
      panelClass.push("panel-success");
      btnClass.push("btn-success");
    } else {
      panelClass.push("panel-danger");
      btnClass.push("btn-danger");
    }
    return (
      <Aux>
        <div className={styles.park}>
          <div className="panel-heading">
            <h4>{this.props.name}</h4>
          </div>
          <div className="panel-body" style={{ padding: 0 }}>
            <img src={this.props.url} alt="park" className={styles.image} />
            <div className={styles.address}>Address: {this.props.address}</div>
          </div>
          <div className="panel-footer">
            <button className={btnClass.join(" ")} disabled={!this.props.safe}>
              {this.props.safe ? "Book" : "Not Safe"}
            </button>
          </div>
        </div>
      </Aux>
    );
  }
}
export default Park;