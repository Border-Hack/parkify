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
  onClickBookHandler = (name) => {
    this.setState({ bookingOpen: true, name: name });
  };
  confirmBookHandler = (slot) => {
    this.setState({ bookingOpen: false });
    console.log("Parked booked for", slot);
  };
  render() {
    return (
      <Aux>
        <Modal
          show={this.state.bookingOpen}
          modalClosed={this.bookCancelHandler}
        >
          <Book name={this.state.name} confirm={this.confirmBookHandler} />
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
              limit={10}
              peopleVisited={4}
              click={this.onClickBookHandler}
              sanitizedAt={new Date().toLocaleTimeString()}
              safety={(6 / 10) * 100}
            />
            <Park
              safe={false}
              url={
                "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
              }
              name="park2"
              peopleVisited={8}
              limit={15}
              click={this.onClickBookHandler}
              sanitizedAt={new Date().toLocaleTimeString()}
              safety={(7 / 15) * 100}
            />
            <Park
              safe={true}
              url={
                "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
              }
              name="park3"
              peopleVisited={1}
              limit={4}
              click={this.onClickBookHandler}
              sanitizedAt={new Date().toLocaleTimeString()}
              safety={(3 / 4) * 100}
            />
          </div>
        </div>
      </Aux>
    );
  }
}
export default Parks;
