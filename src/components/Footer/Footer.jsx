import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" width={140} alt="" />
          <p className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </p>
        </div>
        <div className="flexColStart f-middle">
          <h3 className="primaryText">Useful links</h3>
          <a href="#">
            <p className="secondaryText">Property</p>
          </a>
          <a href="#">
            <p className="secondaryText">Services</p>
          </a>
          <a href="#">
            <p className="secondaryText">About Us</p>
          </a>
        </div>
        <div className="flexColStart f-right">
          <h3 className="primaryText">Information</h3>
          <p className="secondaryText">145 New York, FL 5467, USA</p>
          <p className="secondaryText">021 123 145 14</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
