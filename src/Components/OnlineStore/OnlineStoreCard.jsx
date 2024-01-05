import React from "react";

export default function OnlineStoreCard(props) {
  return (
    <>
      <div className="store-item">
        <div className="carImg">
          <img src={props.cardImg} alt="" />
        </div>

        <div className="card-text-warp">
          <h3>{props.cardTitle}</h3>

          <span>
            <i class={`bx ${props.cardReview}`}></i>
            <i class={`bx ${props.cardReview}`}></i>
            <i class={`bx ${props.cardReview}`}></i>
          </span>

          <span className="price-tags">$ {props.storePrice}</span>
        </div>
      </div>
    </>
  );
}
