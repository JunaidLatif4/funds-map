import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import "./AddBtn.css";

const AddBtn = ({ text, click }) => {
  return (

    <div className="add__btn" onClick={click}>
      <Link className="add__btn_iconbox">
        <AddCircleOutlineIcon className="add__btn_icon" />
      </Link>
      {text == "Add Bank" && <div className="add__btn_text">{text}</div>}
      {text == "Add Demat Account" && <div className="add__btn_text">{text}</div>}
    </div>
  );
};

export default AddBtn;

