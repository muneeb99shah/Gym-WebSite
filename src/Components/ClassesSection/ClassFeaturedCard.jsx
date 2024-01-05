import React from "react";

export default function ClassFeaturedCard(props) {
  return (
    <>
      <div className="classes-card-content">
        <div class="class-media">
          <div class="class-icon">
            {" "}
            <img src={props.classIcon} alt="icons" />
          </div>
        </div>

        <div class="class-box-content">
          <div class="class-thumbnail">
            <img src={props.classThumbnail} alt="" />
          </div>

          <div class="class-content">
            <h3 class="class-title">{props.classTitle}</h3>
            <p>{props.classDiscription}</p>
          </div>
        </div>
      </div>
    </>
  );
}
