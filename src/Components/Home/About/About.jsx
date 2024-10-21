import React from "react";
import "./About.css";
import about_logo from "../../../assets/Pictures/About1.jpeg";
import download_image from "../../../assets/Pictures/online-taxi-booking.png";
import download_icon from "../../../assets/Icons/playstore.png";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-text" id="About-Us">
          <h1>About Us</h1>
        </div>
        <div className="about">
          <div className="about_left">
            <img className="about_img" src={about_logo} alt="" />
          </div>
          <div className="about_right">
            <h3 className="C-name">Aylestone Taxis</h3>
            <h1>Your Destination, Our Commitment</h1>

            <p>
              At Aylestone Taxis, we are dedicated to provide safe, reliable,
              and efficient transportation solutions, ensuring every ride is
              comfortable and punctual. With our team of experienced drivers and
              a commitment to exceptional service, we make getting to your
              destination a breeze.
            </p>
            <p>
              Our professional drivers and modern fleet ensure you reach your
              destination safely and on time, every time. Experience the
              difference with our commitment to outstanding customer care and
              reliability.
            </p>
          </div>
        </div>
        {/* Second */}

        <div className="about" id="About-Us">
          <div className="about_left">
            <h1>Download Our App!</h1>
            <p>
              You can easily access our app from playstore or appstore, where
              you can easily book a ride. It also provides pre-booking feature
              for your future plans.
            </p>

            <div className="download">
              <button className="btn1">
                Download App
                <img className="about_img" src={download_icon} alt="" />
              </button>
            </div>
          </div>
          <div className="about_right download-img">
            <img className="about_img" src={download_image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
