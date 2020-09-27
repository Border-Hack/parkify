import React, { Component } from "react";

class Book extends Component {
  state = {
    slot: "Morning: 6-7 a.m",
  };
  onChangeSlot = (event) => {
    this.setState({ slot: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <center>
              <h4>Confirm Booking</h4>
            </center>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <div>Name: </div>
              <input
                type="text"
                className="form-control"
                value={this.props.name}
                disabled
              />
            </div>
            <div className="form-group">
              <div>Select Slot: </div>
              <select className="form-control" onChange={this.onChangeSlot}>
                <option value="Morning: 6-7 a.m">Morning: 6-7 a.m</option>
                <option value="Morning: 8-9 a.m">Morning: 8-9 a.m</option>
                <option value="Evening: 5-6 p.m">Evening: 5-6 p.m</option>
                <option value="Evening: 6-7 p.m">Evening: 6-7 p.m</option>
              </select>
            </div>
            <button
              onClick={() => this.props.confirm(this.state.slot)}
              className="btn btn-success btn-block"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Book;
