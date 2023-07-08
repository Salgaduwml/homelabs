import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flexCenter hero-wrapper">
      <div className="overlay" />
      <div className="flexCenter paddings innerWidth hero-Container">
        <div className="flexColCenter hero-text-wraper">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover Most
              <br />
              Suitable Property
            </motion.h1>
          </div>
          <div className="flexStart search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={200} end={278} duration={4} />
                <span className="plus-icon">+</span>
              </span>
              <span className="secondaryText">Properties</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={100} end={180} duration={4} />
                <span className="plus-icon">+</span>
              </span>
              <span className="secondaryText">Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={28} />
                <span className="plus-icon">+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
