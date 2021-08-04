import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import "./AddBtn.css";

const AddBtn = ({ text }) => {
  return (
    <div className="add__btn">
      <Link className="add__btn_iconbox">
        <AddCircleOutlineIcon className="add__btn_icon" />
      </Link>
      <Link className="add__btn_text">{text}</Link>
    </div>
  );
};

export default AddBtn;
