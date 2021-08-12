import React from "react";
import "./BtnCom.css";

const BtnCom = () => {
  return (
    <div className="reqfund__component">
      <div className="reqfund__left"></div>
      <div className="reqfund__right">
        <p style={{ fontWeight: "bolder" }} className="reqfund__first">
          Add Rs. 40,235
        </p>
        <p className="reqfund__second">to complete this order modification</p>
      </div>
    </div>
  );
};

export default BtnCom;
