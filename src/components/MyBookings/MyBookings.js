import React from "react";
import styles from "./MyBookings.module.css";
import MyBooking from "./MyBooking/MyBooking";
import Aux from "./../../hoc/Auxiliary/Auxiliary";

const MyBookings = () => {
  return (
    <Aux>
      <div className={`container ${styles.parks}`}>
        <h1>My Bookings</h1>
        <div className={styles.park}>
          <MyBooking
            url={
              "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
            }
            name="park1"
            address="_________"
          />
          <MyBooking
            url={
              "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
            }
            name="park2"
            address="_________"
          />
          <MyBooking
            url={
              "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
            }
            name="park3"
            address="_________"
          />
        </div>
      </div>
    </Aux>
  );
};

export default MyBookings;
