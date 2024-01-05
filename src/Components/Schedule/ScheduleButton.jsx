import React from "react";

export default function ScheduleButton(props) {
  return (
    <li className="tab-items">
      <button
        className={`tab-link ${props.isActive ? "active" : "activeTab"}`}
        onClick={props.onClick}
      >
        {props.weekName}
      </button>
    </li>
  );
}
