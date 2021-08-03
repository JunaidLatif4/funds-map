import React from "react";
import "./FloatBtn.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const FloatButton = ({ text, click, loading }) => {
  return (
    <button className="fbtn__container" onClick={click}>
      {loading ? <CircularProgress className="loading" /> : text}
    </button>
  );
};

export default FloatButton;
