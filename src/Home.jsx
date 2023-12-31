import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";
import image1 from "./assets/events.png";
import image2 from "./assets/wellbeing.png";
import image3 from "./assets/hands.png";
import image4 from "./assets/Contact.png";

function Home() {
  return (
    <div className="home-page">
      <div className="pic-of-the-day">
        <p className="home-text">Picture of the day!</p>
        <div className="upload-button">
          <a className="custom-label" href="/TOS">
            Upload
          </a>
        </div>

        <div className="slider-container">
          <Slider />
        </div>
      </div>
      <a className="button wellbeing-button-home" href="/wellbeingpage">
        <p className="home-text">Well Being</p>
        <img src={image2} className="img" />
      </a>
      <a className="button other1-button" href="/error">
        <p className="home-text">Support</p>
        <img src={image4} className="img" />
      </a>
      <a className="button events-button" href="/error">
        <p className="home-text">Events</p>
        <img src={image1} className="img" />
      </a>
      <a className="button other2-button" href="/report">
        <p className="home-text color-gray">Report</p>
        <img src={image3} className="hands img" />
      </a>
      <Navbar />
    </div>
  );
}

export default Home;
