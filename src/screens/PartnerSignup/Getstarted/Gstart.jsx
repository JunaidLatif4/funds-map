import React from "react";
import { Link } from "react-router-dom";
import "./Gstart.css"

const Gstart = () => {
  return (
    <>
      <div className="gstart__container">
        <div className="gstart__header">
          <div className="gstart__heading">
            Let's get&nbsp;<Link>Started</Link>
          </div>
          <p className="header__para">
           Watch this 5 minute video to get upto pace
          </p>
        </div>

        <video src=""></video>
      </div>
    </>
  );
};

export default Gstart;
