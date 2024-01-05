import React, { useState } from "react";
import HeaderData from "./HeaderData";
import headerLogo from "../../assets/images/gymat_light-1.png";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  const navbar_items = [
    {
      id: 1,
      name: "home",
      RouteLinks: "",
    },
    {
      id: 2,
      name: "about",
      RouteLinks: "AboutRoute",
    },

    {
      id: 3,
      name: "class",
      RouteLinks: "classes",
    },

    {
      id: 4,
      name: "schedule",
      RouteLinks: "schedule",
    },

    {
      id: 5,
      name: "shop",
      RouteLinks: "shop",
    },
    {
      id: 6,
      name: "contact",
      RouteLinks: "contact",
    },
  ];
  return (
    <header>
      <div className="navbar-container">
        <div className="header-logo">
          <img src={headerLogo} alt="" />
        </div>

        <ul
          className={hamburger ? "nav-link-mobile" : "navbar"}
          onClick={() => setHamburger(false)}
        >
          {navbar_items.map((items) => (
            <HeaderData
              key={items.id}
              name={items.name}
              RouteLinks={items.RouteLinks}
            />
          ))}
        </ul>

        <div
          className="hamburger-menu"
          onClick={() => setHamburger(!hamburger)}
        >
          {hamburger ? (
            <i class="bx bx-x menu-icons close-m"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
    </header>
  );
}
