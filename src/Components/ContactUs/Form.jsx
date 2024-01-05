import React from "react";

export default function Form(props) {
  return (
    <>
      <div className="tranier-input-form ">
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="tranier-input"
        />
      </div>
    </>
  );
}
