import React, { Component } from "react";
import styles from "./Parks.module.css";
import Park from "./Park/Park";

class Parks extends Component {
  render() {
    return (
      <div className={`container ${styles.parks}`}>
        <h1>Parks</h1>
        <div className={styles.park}>
          <Park
            safe={true}
            url={
              "https://ktar.com/wp-content/uploads/2020/03/playground-city-of-phoenix-parks-and-recreation-department-fb-1.jpg"
            }
            name="park1"
            address="_________"
          />
          <Park
            safe={false}
            url={
              "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/08/parks-1566455734.jpg"
            }
            name="park2"
            address="_________"
          />
          <Park
            safe={true}
            url={
              "https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2019/07/green-park.jpg"
            }
            name="park3"
            address="_________"
          />
        </div>
      </div>
    );
  }
}
export default Parks;
