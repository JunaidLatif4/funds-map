import React from "react";
import "./Button.css";
import "../client-partner-menu/ClientPartnerMenu.scss"
import CircularProgress from "@material-ui/core/CircularProgress";

const Button = ({ text, click, loading, wid }) => {
  return (
    <button className={wid ? "btn__container ref_friend" : "btn__container"} onClick={click}>
      {loading ? <CircularProgress className="loading" /> : text}
    </button>
  );
};

export default Button;
