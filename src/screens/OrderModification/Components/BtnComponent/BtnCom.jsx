import React from "react";
import "./BtnCom.css";

const BtnCom = () => {
  return (
    // <div className="reqfund__component">
    //   <div className="reqfund__left"></div>
    //   <div className="reqfund__right">
    //     <p style={{ fontWeight: "bolder" }} className="reqfund__first">
    //       Add Rs. 40,235
    //     </p>
    //     <div className="reqfund">to complete this order modification</div>
    //   </div>
    // </div>

    <div className="om__comp__container">
      <div className="comp__left"></div>
      <div className="comp__right">
        <p style={{ fontWeight: "bolder" }} className="comp__para1">
          Add Rs. 40,235
        </p>
        <p className="comp__para2">to complete this order modification</p>
      </div>
    </div>
  );
};

export default BtnCom;
