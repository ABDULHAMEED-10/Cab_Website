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
              At Aylestone, we are dedicated to providing safe, reliable, and
              efficient transportation solutions, ensuring every journey is
              comfortable and punctual. With our team of experienced drivers and
              a commitment to exceptional service, we make reaching your
              destination effortless.
            </p>
            <p>
              Our professional drivers and modern fleet guarantee you arrive
              safely and on time, every time. Experience the difference with our
              unwavering focus on outstanding customer care and reliability.
            </p>
          </div>
        </div>
        {/* Second */}

        <div className="about" id="About-Us">
          <div className="about_left">
            <h1>Download Our App!</h1>
            <p>
              You can conveniently access our app on the Play Store or App
              Store, allowing you to effortlessly book a ride. Additionally, our
              app offers a pre-booking feature to help you plan your future
              journeys with ease.
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
