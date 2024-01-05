import React from "react";
import GymTitle from "../../assets/images/gym-text-modified.png";
// import cloud from "../../assets/images/t-cloud.png";
import cloud from "../../assets/images/shape-32.png";
import "./HeroBanner.css";
import { Link } from "react-scroll";

export default function HeroBanner() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-container">
          <div className="hero-text">
            <div className="subtitle">FIND YOUR ENERGY</div>
            <h2 className="hero-title">MAKE YOUR BODY</h2>
            <span className="hero-slogan">FIT & PERFECT</span>
            <p className="hero-description">
              Gymhen an unknown printer took a galley of type and scrambled. It
              has survived nknown printercenturies.
            </p>
            <div className="style-btn">
              <Link to="classes">
                <span>our classs</span>
                {/* <i class="bx bxs-right-arrow-alt"></i> */}
                <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="gym-title-img">
          <img src={GymTitle} alt="gym-tilte-pic" />
        </div>
        <div className="cloud-img">
          <img src={cloud} alt="cloud-pic" />
        </div>
      </section>
    </>
  );
}
