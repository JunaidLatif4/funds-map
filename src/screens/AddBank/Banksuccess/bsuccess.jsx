import React from "react";
import Check from "../../../Assets/imgs/check.svg";
import Button from "../../../components/button/Button";
import "./bsuccess.css";

const bsuccess = () => {
  return (
    <>
      <img src={Check} className="ap__whatsapp_logo" />
      <span className="ap__confirm_text2">
        Bank account has been added successfully
      </span>

      <Button text="DONE" />
    </>
  );
};

export default bsuccess;
