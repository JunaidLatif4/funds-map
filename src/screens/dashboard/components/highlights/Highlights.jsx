import React from "react";
import "./Highlights.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ProgressBar from "../progress-bar/ProgressBar";

const Highlights = () => {
  return (
    <div className="highlights">
      <span className="hl__heading">Highlights</span>
      <div className="hl__list">
        <div className="hl__item">
          <span className="hl__icon">
            <FiberManualRecordIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="hl__text">
            Founded by CEO of RolceRoyce Richard Newman who served for 10 years{" "}
          </span>
        </div>
        <div className="hl__item">
          <span className="hl__icon">
            <FiberManualRecordIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="hl__text">
            Founded by CEO of RolceRoyce Richard Newman who served for 10 years{" "}
          </span>
        </div>
        <div className="hl__item">
          <span className="hl__icon">
            <FiberManualRecordIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="hl__text">
            Founded by CEO of RolceRoyce Richard Newman who served for 10 years{" "}
          </span>
        </div>
        <div className="hl__item">
          <span className="hl__icon">
            <FiberManualRecordIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="hl__text">
            Founded by CEO of RolceRoyce Richard Newman who served for 10 years{" "}
          </span>
        </div>
        <ProgressBar progress="80" />
      </div>
    </div>
  );
};

export default Highlights;
