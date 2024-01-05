import React from "react";
import quote from "../../assets/images/shape-3.png";
export default function TestimonialSlid(props) {
  return (
    <>
      <div className="testimonial-content-warp">
        <div className="testimonial-thumbnil">
          <img src={props.thumbnil} alt="" />
        </div>
        <div className="testimonial-contents">
          <h3 className="testimonial-title">{props.names}</h3>
          <div className="testimonial-designation">
            <div className="designation-content">
              <span>{props.designation}</span>
              <ul className="rating">
                <li className="star-rate">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li className="star-rate">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li className="star-rate">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li className="star-rate">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li className="star-rate">
                  <i class="fa-solid fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="testimonial-quote">
            <img src={quote} alt="" />
          </div>
        </div>
      </div>
      <p>{props.description}</p>
    </>
  );
}
