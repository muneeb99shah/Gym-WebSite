import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export default function HeaderData(props) {
  return (
    <li className="nav-item">
      <Link
        to={props.RouteLinks}
        className="nav-link"
        smooth={true}
        duration={500}
      >
        {props.name}
      </Link>
    </li>
  );
}
