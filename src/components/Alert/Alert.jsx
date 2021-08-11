import React, { useState } from "react";
import "./Alert.css";
import Check from "../../Assets/imgs/check2.svg";
import CloseIcon from "@material-ui/icons/Close";

const Alert = ({ text }) => {
  const [closeAlert, setCloseAlert] = useState(false);
  return (
    <div className="alert__box" style={closeAlert ? { display: "none" } : null}>
      <CloseIcon className="alert__close" onClick={() => setCloseAlert(true)} />
      <img src={Check} className="alert__icon" />
      <span className="alert__text">{text}</span>
    </div>
  );
};

export default Alert;
