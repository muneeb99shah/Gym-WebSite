import React from "react";
import coupleImg from "../../assets/images/couple.png";
import "./discount.css";
export default function Discount() {
  return (
    <>
      <section className="discount-section">
        <div className="discount-container">
          <div className="discount-text">
            <h1>Get Expert Training Session Today</h1>
            <div className="discount-offer">
              <div className="clipShap">
                <h3>30%</h3>
                <h3>off</h3>
                <p>New Members Registration</p>
              </div>
              <div className="features">
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    Weekly Class Schedule
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Modern Equipment
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Modern Equipment
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Student Free Access
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="discount-img">
            <img src={coupleImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
