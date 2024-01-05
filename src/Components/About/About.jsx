import React, { useState } from "react";
import "./about.css";
import aboutImg from "../../assets/images/about-2.jpeg";
import CountUp from "react-countup";
// icons
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";
// icons end
export default function About() {
  const [startCount, setStartCount] = useState(false);

  return (
    <>
      <section className="about-section" id="AboutRoute">
        <div className="about-container">
          <div className="about-img">
            <img src={aboutImg} alt="about-pic" />
          </div>
          {/* text */}
          <div className="about-text">
            <div className="subtitle">ABOUT GYMAT</div>
            <h2 className="about-title">
              We Can Give A Shape Of Your Body Here!
            </h2>

            <p className="about-description">
              Gymat an unknown printer took a galley of type and scraey aretea
              mbled it to make a type specimen book. May has survived not only
              five centuries, but also the leap into.
            </p>
            {/* icons */}
            <div className="about-icons">
              <div className="icons-data">
                <i className="icon-info">
                  <GiWeightLiftingUp />
                </i>
                <ScrollTrigger
                  onEnter={() => {
                    setStartCount(true);
                  }}
                  onExit={() => {
                    setStartCount(false);
                  }}
                >
                  <div className="counter-container">
                    <h3 className="counter">
                      {startCount && (
                        <CountUp start={0} end={1500} duration={3} delay={0} />
                      )}
                    </h3>
                    <span className="plus-symbol">+</span>
                  </div>
                </ScrollTrigger>

                <h4>TRAINED PEOPLE</h4>
              </div>
              {/* 2 */}
              <div className="icons-data">
                <i className="icon-info">
                  <FaDumbbell />
                </i>

                <ScrollTrigger
                  onEnter={() => {
                    setStartCount(true);
                  }}
                  onExit={() => {
                    setStartCount(false);
                  }}
                >
                  <div className="counter-container">
                    <h3 className="counter">
                      {startCount && (
                        <CountUp start={0} end={1100} duration={3} delay={0} />
                      )}
                    </h3>
                    <span className="plus-symbol">+</span>
                  </div>
                </ScrollTrigger>

                <h4>MODERN EQUIPMENT</h4>
              </div>
            </div>
            <p className="about-description gym-description">
              Gymat an unknown printer took a galley of type and scraey aretea
              mbled it to make a type specimen book. May has survived not only
              five centuries, but also the leap into.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
