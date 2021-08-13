import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import "./AddBtn.css";

const AddBtn = ({ text, click, setBank, setDemat, disabledStyle }) => {
  return (
    <div className="add__btn" onClick={click}>
      <Link
        className="add__btn_iconbox"
        style={disabledStyle}
        onClick={
          text == "Add Bank"
            ? () => {
                setBank(true);
                setDemat(false);
              }
            : () => {
                setDemat(true);
                setBank(false);
              }
        }
      >
        <AddCircleOutlineIcon style={disabledStyle} className="add__btn_icon" />
      </Link>
      {text == "Add Bank" && (
        <div
          style={disabledStyle}
          onClick={() => {
            setBank(true);
            setDemat(false);
          }}
          className="add__btn_text"
        >
          {text}
        </div>
      )}
      {text == "Add Demat Account" && (
        <div
          style={disabledStyle}
          onClick={() => {
            setDemat(true);
            setBank(false);
          }}
          className="add__btn_text"
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default AddBtn;
