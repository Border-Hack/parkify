import React from "react";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <h3>Who are we?</h3>
            <p>
              Nowadays in the time of Covid and social distancing, staying
              healthy is as important as ever. We are the group of young
              technocrats who came up with an idea of finding places to
              exercise, is all that much more challenging. We are here to
              provide a solution according to your aspects.
            </p>
            <p>
              Our app provides a map-based view of parks near you, and displays
              the current number of park visitors vs. the recommended capacity
              to maintain proper social distancing. When you need to get out for
              a walk or run, you can quickly glance at the map to determine
              which park is the least crowded, and the safest for you to enjoy.
            </p>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <h3>Who choose us?</h3>
            <p>
              We provide with a predominant way to control and manage your
              safety with ease of accessing for multiple users.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-xs-offset-1 col-sm-4 col-sm-offset-0">
            <h3>Contact Us</h3>
            <p>
              <span>Email:</span> training@example.com
            </p>
            <p>
              <span>Mobile:</span> +91-8448444853
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
