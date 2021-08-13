import React from "react";
import "./BuyerInfo.css";
import { Link } from "react-router-dom";
import img1 from "../../../../Assets/imgs/upload.svg";
import info from "../../../../Assets/imgs/info.svg";

const BuyerInfo = () => {
  return (
    <>
      <div className="ordermod__header">
        <img className="ordermod__img" src={img1} alt="" />

        <div className="ordermod__second">
          <div className="second__heading" style={{ fontWeight: "bold" }}>
            Klaxton Garments
          </div>
          <div className="second__body" style={{ color: " #000000a6" }}>
            <div className="body__one">
              <span style={{ color: "green" }}>BUY</span> | 10,000 @ 254
            </div>
            <div className="body__one">Validity: 28/07/2021</div>
            <div className="body__one">Min. trade Qty: 3000</div>
            <div className="body__one">Order ID: 87123988112398</div>
          </div>
        </div>
        <div className="ordermod__third">
          2-way quotes
          <div className="om__thirdimg">
            <img className="om__thirdimg" src={info} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerInfo;
