import React, { Component } from "react";
import styles from "./Parks.module.css";
import Park from "./Park/Park";
import Modal from "./../UI/Modal/Modal";
import Aux from "./../../hoc/Auxiliary/Auxiliary";
import Book from "./../Book/Book";

class Parks extends Component {
  state = {
    bookingOpen: false,
  };
  bookCancelHandler = () => {
    this.setState({ bookingOpen: false });
  };
  onClickBookHandler = (name, address) => {
    this.setState({ bookingOpen: true, name: name, address: address });
  };
  confirmBookHandler = (slot) => {
    console.log("Parked booked for", slot);
  };
  render() {
    return (
      <Aux>
        <Modal
          show={this.state.bookingOpen}
          modalClosed={this.bookCancelHandler}
        >
          <Book
            name={this.state.name}
            address={this.state.address}
            confirm={this.confirmBookHandler}
          />
        </Modal>
        <div className={`container ${styles.parks}`}>
          <h1>Parks</h1>
          <div className={styles.park}>
            <Park
              safe={true}
              url={
                "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
              }
              name="park1"
              address="_________"
              click={this.onClickBookHandler}
            />
            <Park
              safe={true}
              url={
                "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
              }
              name="park2"
              click={this.onClickBookHandler}
              address="_________"
            />
            <Park
              safe={true}
              url={
                "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
              }
              name="park3"
              click={this.onClickBookHandler}
              address="_________"
            />
          </div>
        </div>
      </Aux>
    );
  }
}
export default Parks;
