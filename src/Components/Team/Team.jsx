import React from "react";
import "./team.css";
import doumble from "../../assets/images/material-1.png";
import redshap from "../../assets/images/redshap.png";
import { Link } from "react-scroll";
export default function Team() {
  return (
    <>
      <section className="tean-section">
        <div className="team-guid">
          <div className="call-to-action-box">
            <img src={doumble} alt="" />
            <h2 className="action-text">
              We Are Always Provide Best Fitness Service For You
            </h2>
          </div>

          <div className="style-btn action-btn">
            <Link to="contact">
              <span>Join Our Team</span>
              {/* <i class="bx bxs-right-arrow-alt"></i> */}
              <i class="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="red-shap-img">
            <img src={redshap} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
