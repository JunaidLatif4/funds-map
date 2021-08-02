import React from "react";
import "./Toggle.css";

const Toggle = () => {
  return (
    <div className="toggle__container">
      <span className="toggle__item"></span>
      <span className="toggle__item" style={{ width: "65%" }}></span>
      <span className="toggle__item"></span>
    </div>
  );
};

export default Toggle;
