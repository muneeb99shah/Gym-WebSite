import React from "react";
import team1 from "../../assets/images/team-1.jpg";
import team8 from "../../assets/images/team-8.jpg";
import "./section-bg.css";
export default function SectionBg() {
  return (
    <>
      <section className="section-bg">
        <div className="section-img-container">
          <div className="section-content">
            <img src={team1} alt="" />
            <div className="text-warp-section">
              <h2>Become A Trainer</h2>
              <p>
                Gymehen an unknown printer took a galley of type and scrambled
                make vived not only five centurpe specimen book.
              </p>
            </div>
          </div>
          <div className="section-content">
            <img src={team8} alt="" />
            <div className="text-warp-section">
              <h2>Become A Trainer</h2>
              <p>
                Gymehen an unknown printer took a galley of type and scrambled
                make vived not only five centurpe specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
