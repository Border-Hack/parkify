import React, { Component } from "react";
import styles from "./Parks.module.css";
import Park from "./Park/Park";
import Modal from "./../UI/Modal/Modal";
import Aux from "./../../hoc/Auxiliary/Auxiliary";
import Book from "./../Book/Book";
import axios from "axios";
import Spinner from "./../UI/Spinner/Spinner";

class Parks extends Component {
  state = {
    loading: true,
    bookingOpen: false,
    city: "New York",
    parks: "",
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/v1/parks?city=${this.state.city}`)
      .then((res) => {
        const parks = res.data.data.parks.map((p) => (
          <Park
            key={p.name}
            safe={p.isSafe}
            url={p.imageCover}
            name={p.name}
            limit={p.limit}
            peopleVisited={p.noOfPeopleVisited}
            click={this.onClickBookHandler}
            sanitizedAt={p.sanitizedAt}
            safety={((p.limit - p.noOfPeopleVisited) / p.limit) * 100}
          />
        ));
        this.setState({ parks: parks, loading: false });
      })
      .catch((err) => console.log(err));
  }
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
        {this.state.loading ? <Spinner /> : null}
        {!this.state.loading ? (
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
                {this.state.parks}
                {/* <Park
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
                /> */}
              </div>
            </div>
          </Aux>
        ) : null}
      </Aux>
    );
  }
}
export default Parks;
