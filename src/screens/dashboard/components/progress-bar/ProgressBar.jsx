import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress__bar">
      <div className="progress__text">
        <span className="pt__demand">{progress}% Demand</span>
        <span className="pt__thresh">
          <span className="thresh__text">Threshold</span>
          <span className="thresh__bar">|</span>
        </span>
      </div>
      <div className="progress__wrap">
        <div className="progress__rate" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
