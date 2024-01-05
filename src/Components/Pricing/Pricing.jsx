import React from "react";
import "./pricing.css";
import PricingCard from "./PricingCard";
import PricingCardData from "./PricingCardData";
export default function Pricing() {
  return (
    <>
      <section className="pricing-section">
        <div className="pricing-container">
          <div className=" title-container">
            <div className="heading-title schedule-heading">
              <div className="subtitle">PRICING CHART</div>
              <h2>Choose Pricing Package</h2>
              <p>
                Gymat an unknown printer took a galley of type and scrambled
                make a type specimen book.
              </p>
            </div>
          </div>
          <div className="pricing-card-container">
            <div className="pricing-card-content">
              {PricingCardData.map((items) => (
                <PricingCard
                  key={items.id}
                  stander={items.stander}
                  icons={items.icons}
                  listDetail1={items.listDetail1}
                  listDetail2={items.listDetail2}
                  listDetail3={items.listDetail3}
                  listDetail4={items.listDetail4}
                  listDetail5={items.listDetail5}
                  listDetail6={items.listDetail6}
                  price={items.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*


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


*/
