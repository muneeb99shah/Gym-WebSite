import React from "react";
import "./contactus.css";
// import Form from "./Form";
import Form from "./Form";
// import Form from "./Form";
export default function ContactUS() {
  const contactData = [
    {
      id: 1,

      type: "text",
      placeholder: "Enter Your name",
    },
    {
      id: 2,

      type: "email",
      placeholder: "Enter Your Email",
    },
  ];
  return (
    <>
      <section className="contactUS-section" id="contact">
        <div className="contact-container">
          <div className="contact-detail">
            <h2>We are here for help you! To Shape Your Body.</h2>
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic types etting.type
              specimen It has survived not only five centuries, but also the
              type specimen book.
            </p>
            <div className="contact-info-container">
              <div className="info">
                <h3>ABC-City</h3>
                <span>abc Road City</span>
                <span>ABC Country</span>
              </div>
              <div className="info">
                <h3>Opening Hours</h3>
                <span>Mon to Fri: 7:30 am — 1:00 am</span>
                <span>Mon to Fri: 7:30 am — 1:00 am</span>
              </div>
              <div className="info">
                <h3>Information</h3>
                <span>+123456789</span>
                <span>GYM@gmail.com</span>
              </div>
              <div className="info">
                <h3>Follow Us On</h3>
                <ul className="info-list">
                  <li className="info-icons">
                    <i class="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="info-icons">
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li className="info-icons">
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p></p>
          <form action="" className="form-container">
            <div className="form-title ">
              <h2>Leave Us Your Info</h2>
            </div>
            <div>
              {contactData.map((items) => (
                <Form
                  key={items.id}
                  label={items.label}
                  type={items.type}
                  placeholder={items.placeholder}
                />
              ))}
              <div>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Comment"
                  className="tranier-input"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
