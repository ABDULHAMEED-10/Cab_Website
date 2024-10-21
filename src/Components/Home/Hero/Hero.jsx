import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Book_icon from "../../../assets/icons/right-arrow.png";
import Car_img from "../../../assets/Pictures/car3.png";
const Hero = () => {
  return (
    <>
      <div className="hero container col">
        <div className="hero-text">
          <h1 className="name">Aylestone Taxis</h1>
          <h2>Your Local Travel Experts!</h2>
          <p className="des">
            Whether you are catching a flight, heading to a meeting or just
            exploring the town, Aylestone taxis is here to make sure you get
            there in time.
          </p>

          <Link to="/ContactPage">
            <button className="btn1">
              <a href="#contact"></a>Book Now <img src={Book_icon} alt="" />
            </button>
          </Link>
          <div className="col">
            <img className="car_img" src={Car_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
