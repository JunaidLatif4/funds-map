import React, { useEffect, useState } from "react";
import "./DropCard.css";
import redDot from "../../../../Assets/imgs/red-dot.svg";
import downarrow from "../../../../Assets/imgs/downarrow.svg";
import IndentityInfo from "../indentity-info/IndentityInfo";
import AddBtn from "../add-btn/AddBtn";
import Completed from "../completed/Completed";
import AddedBank from "../../../AddBank/AddedBanks/AddedBank";
import AddedDemet from "../../../Demet/AddedDemet/AddedDemet";

const DropCard = ({
  icon,
  text,
  body,
  setIdty,
  data,
  setBank,
  setDemat,
  open,
  basicInfo,
  banks,
  demats,
  disabled,
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    open && setShow(true);
  }, []);
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
        {body === "identity" && <IndentityInfo data={data} setIdty={setIdty} />}
        {body === "completed" && <Completed basicInfo={basicInfo} />}
        {body === "bank" && (
          <div>
            <AddedBank banks={banks} />
            <AddBtn
              text="Add Bank"
              setBank={setBank}
              setDemat={setDemat}
              disabledStyle={
                disabled ? { color: "grey", pointerEvents: "none" } : null
              }
            />
          </div>
        )}
        {body === "demat" && (
          <div>
            <AddedDemet demats={demats} />{" "}
            <AddBtn
              text="Add Demat Account"
              setBank={setBank}
              setDemat={setDemat}
              disabledStyle={
                disabled ? { color: "grey", pointerEvents: "none" } : null
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DropCard;
