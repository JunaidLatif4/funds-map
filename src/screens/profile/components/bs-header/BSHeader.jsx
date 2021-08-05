import React from "react";
import "./BSHeader.css";
import CloseIcon from "@material-ui/icons/Close";

const BSHeader = ({ text, setCloseBSlider }) => {
  return (
    <div className="bottom__slide_header">
      <span className="bsh__text">{text ? text : "Add Phone"}</span>
      <CloseIcon className="bsh__icon" onClick={() => setCloseBSlider(true)} />
    </div>
  );
};

export default BSHeader;
