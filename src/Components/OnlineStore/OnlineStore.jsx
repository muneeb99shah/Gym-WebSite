import React from "react";
import OnlineStoreCard from "./OnlineStoreCard";
import OnlineStoreData from "./OnlineStoreData";
import "./onlinestore.css";
export default function OnlineStore() {
  return (
    <>
      <section className="online-store-section" id="shop">
        <div className="online-store-container">
          <div className=" title-container">
            <div className="heading-title schedule-heading">
              <div className="subtitle">SHOP ONLINE</div>
              <h2>Our Online Gym Store</h2>
              <p>
                Gymat an unknown printer took a galley of type and scrambled
                make a type specimen book.
              </p>
            </div>
          </div>

          <div className="store-card-container">
            {OnlineStoreData.map((items) => (
              <OnlineStoreCard
                key={items.id}
                cardImg={items.cardImg}
                cardTitle={items.cardTitle}
                cardReview={items.cardReview}
                storePrice={items.storePrice}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
