import React from "react";
import { Link } from "react-scroll";

export default function PricingCard(props) {
  return (
    <>
      <div className="pricing-card">
        <div className="title-icon">
          <h1>{props.stander}</h1>
          <img src={props.icons} alt="icons" />
        </div>
        <div className="features price-features">
          <ul>
            <li>
              <i class="bx bx-check"></i>
              {props.listDetail1}
            </li>
            <li>
              <i class="bx bx-check"></i>
              {props.listDetail2}
            </li>
            <li>
              <i class="bx bx-check"></i>
              {props.listDetail3}
            </li>
            <li>
              <i class="bx bx-check"></i>
              {props.listDetail4}
            </li>
            <li>
              <i class="bx bx-check"></i>
              {props.listDetail5}
            </li>
            <li>
              <i class="bx bx-check"></i>
              {props.listDetail6}
            </li>
          </ul>
        </div>
        <h4 className="price-tag">
          {`${props.price}`} <sub>/Year</sub>
        </h4>
        <div className="style-btn">
          <Link to="">
            <span> Purchase Now </span>

            <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
