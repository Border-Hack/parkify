import React, { Component } from "react";
import styles from "./Park.module.css";
import Aux from "./../../../hoc/Auxiliary/Auxiliary";

class Park extends Component {
  state = {
    name: this.props.name,
    address: this.props.address,
  };
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
          <div className={panelClass.join(" ")}>
            <div className="panel-heading">
              <h4>{this.props.name}</h4>
            </div>
            <div className="panel-body" style={{ padding: 0 }}>
              <img src={this.props.url} alt="park" className={styles.image} />
              <div className={styles.info}>
                <div>People visited : {this.props.peopleVisited}</div>
                <div>Limit : {this.props.limit}</div>
                <div>Sanitized at : {this.props.sanitizedAt}</div>
                <div>Safety : {this.props.safety.toFixed(1)}%</div>
              </div>
            </div>
            <div className="panel-footer">
              <button
                onClick={() =>
                  this.props.click(this.props.name, this.props.address)
                }
                className={btnClass.join(" ")}
                disabled={!this.props.safe}
              >
                {this.props.safe ? "Book" : "Not Safe"}
              </button>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}
export default Park;
