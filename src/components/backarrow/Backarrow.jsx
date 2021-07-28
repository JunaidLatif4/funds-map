import React from "react";
import "./Backarrow.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Backarrow = () => {
  const history = useHistory();
  return (
    <>
      <div className="backarrow" onClick={() => history.goBack()}>
        <ArrowBackIcon className="backarrow__icon" />
      </div>
    </>
  );
};

export default Backarrow;
