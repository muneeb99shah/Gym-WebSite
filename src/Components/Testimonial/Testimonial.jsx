import React from "react";
import "./testimonial.css";
import TestimonialSlid from "./TestimonialSlid";

import testimonialImg from "../../assets/images/testimonial-4.jpg";
import thumbnil from "../../assets/images/testimonial-thumnil.jpg";

export default function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      thumbnil: thumbnil,
      names: "Ketty Mario",
      designation: "Body Builder",
      description:
        " “When an unknown printer took a galley of type and smbled it togtye their make a type specimen book. It has survived not the leap into electronic types remaining essentially”",
    },
  ];

  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-img">
            <img src={testimonialImg} alt="testimonialImg" />
          </div>
          <div className="testimonial-slider">
            <div className="testimonial-item">
              {testimonialData.map((items) => (
                <TestimonialSlid
                  key={items.id}
                  thumbnil={items.thumbnil}
                  names={items.names}
                  designation={items.designation}
                  description={items.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
