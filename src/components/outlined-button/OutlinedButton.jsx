import React from "react";
import "./OutlinedButton.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const OutlinedButton = ({ text, click, loading }) => {
  return (
    <button className="obtn__container" onClick={click}>
      {loading ? <CircularProgress className="loading" /> : text}
    </button>
  );
};

export default OutlinedButton;
