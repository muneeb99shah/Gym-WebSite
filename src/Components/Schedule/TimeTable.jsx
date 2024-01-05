import React from "react";

export default function TimeTable(props) {
  return (
    <>
      {/* <div className="tab-content"> */}
      <ul className="tab-content-list">
        <li class="tab-content-item">
          <span>{props.lable}</span>
          <h3>{props.className}</h3>
        </li>
        <li class="tab-content-item">
          <span>{props.Timelable}</span>
          <h3>{props.timeInfo}</h3>
        </li>
        <li class="tab-content-item">
          <span>{props.TrainerLable}</span>
          <h3>{props.trainerName}</h3>
        </li>
        <li class="tab-content-item">
          <a href={props.tabLinks}>Join Now</a>
        </li>
      </ul>
      {/* </div> */}
    </>
  );
}
