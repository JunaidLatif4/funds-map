import React, { useState } from "react";
import "./DropCard.css";
import redDot from "../../../../Assets/imgs/red-dot.svg";
import downarrow from "../../../../Assets/imgs/downarrow.svg";
import IndentityInfo from "../indentity-info/IndentityInfo";
import AddBtn from "../add-btn/AddBtn";

const DropCard = ({ icon, text, body, setBank, set }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="dropcard__wrapper">
      <div className="dropcard__header">
        <span className="dw__left">
          <img className="dropcard__icon_img" src={icon} />
          <span className="dropcard__text">{text}</span>
        </span>
        <span className="dw__right">
          <img className=" dc__red_dot" src={redDot} />
          <img
            className="dropcard__icon_sm"
            src={downarrow}
            onClick={() => setShow(show ? false : true)}
          />
        </span>
      </div>
      <div
        className="drop__card_body"
        style={{ display: show ? "block" : "none" }}
      >
        {body === "identity" && <IndentityInfo />}
        {body === "bank" && <AddBtn text="Add Bank" click={() => setBank(true)} />}
        {body === "demat" && <AddBtn text="Add Demat Account" click={set} />}
      </div>
    </div>
  );
};

export default DropCard;
