import React from "react";
import "./footer.css";
import footerLogo from "../../assets/images/gymat_light-1.png";
export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content about-content">
            <h3 className="footer-title">About</h3>

            <p>
              When an unknown printer took galle y of tyand scrambled it to make
              typ nknown pret specimen.
            </p>
            <ul className="footer-items">
              <li className="footer-list">
                <i class="fa-solid fa-location-dot"></i>
                ABC Road Pakistan
              </li>
              <li className="footer-list">
                <i class="fa-solid fa-phone"></i>
                123456789
              </li>
              <li className="footer-list">
                <i class="fa-regular fa-envelope"></i>
                abc@gmail.com
              </li>
            </ul>
          </div>
          <div className="footer-content classes-content">
            <h3 className="footer-title">Our Classes</h3>

            <ul className="footer-items">
              <li className="footer-list">Fitness Classes</li>
              <li className="footer-list">Aerobics Classes</li>
              <li className="footer-list">Power Yoga</li>
              <li className="footer-list">Lean Machines</li>
              <li className="footer-list">Full-Body Strength</li>
            </ul>
          </div>
          <div className="footer-content working-content">
            <h3 className="footer-title">Working Hours</h3>

            <ul className="footer-items">
              <li className="footer-list">Sunday-Monday:</li>
              <li className="footer-list">10.00am-5.00pm</li>
              <li className="footer-list">Saturday:</li>
              <li className="footer-list">9.00am-4.00pm</li>
              <li className="footer-list">Sunday Close</li>
            </ul>
          </div>
          <div className="footer-logo-img">
            <img src={footerLogo} alt="" />
          </div>
          <div className="social-icaons-container">
            <ul className="social-icons-items">
              <li className="socila-icons">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="socila-icons">
                <i class="fa-brands fa-square-instagram"></i>
              </li>
              <li className="socila-icons">
                <i class="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
