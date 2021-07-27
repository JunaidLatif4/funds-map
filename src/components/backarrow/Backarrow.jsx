import React from "react";
import "./Backarrow.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Backarrow = () => {
  return (
    <>
      <div className="backarrow">
        <ArrowBackIcon className="backarrow__icon" />
      </div>
    </>
  );
};

export default Backarrow;
