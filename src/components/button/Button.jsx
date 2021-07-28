import React from "react";
import "./Button.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Button = ({ text, click, loading }) => {
  return (
    <button className="btn__container" onClick={click}>
      {loading ? <CircularProgress className="loading" /> : text}
    </button>
  );
};

export default Button;
