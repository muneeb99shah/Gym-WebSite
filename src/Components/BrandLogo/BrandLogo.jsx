import React from "react";
import "./brandlogo.css";

import logoBrand5 from "../../assets/images/brand-5.png";
import logoBrand6 from "../../assets/images/brand-6.png";
import logoBrand7 from "../../assets/images/brand-7.png";
import logoBrand8 from "../../assets/images/brand-8.png";

import logoBrand9 from "../../assets/images/brand-9.png";
import BrandLogoData from "./BrandLogoData";

export default function BrandLogo() {
  const brandsLogo = [
    {
      id: 1,
      logoImg: logoBrand5,
    },
    {
      id: 2,
      logoImg: logoBrand6,
    },
    {
      id: 3,
      logoImg: logoBrand7,
    },
    {
      id: 4,
      logoImg: logoBrand8,
    },
    {
      id: 5,
      logoImg: logoBrand9,
    },
  ];
  return (
    <>
      <section className="brandlogo-section">
        <div className="logo-container ">
          <div className="log-content ">
            {brandsLogo.map((items) => (
              <BrandLogoData key={items.id} logoImg={items.logoImg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
