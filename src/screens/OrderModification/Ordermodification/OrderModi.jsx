import React from "react";
import "./OrderModi.css";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/imgs/upload.svg";
import TextField from "@material-ui/core/TextField";

const OrderModi = () => {
  return (
    <>
      <div className="ordermod__container">
        <div className="ordermod__heading">
          Order <Link>Modificatoin</Link>
        </div>
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
          <div className="ordermod__third">2-way quotes</div>
        </div>

        <div className="ordermod__body">
          <div className="ordermod__bodytitle">Order modification</div>
          <div className="ordermod__inputs" style={{ display: "flex" }}>
            <div className="ordermod__input1">
              <TextField
                style={{ marginRight: "15px" }}
                id="outlined-basic"
                placeholder="10000"
                variant="standard"
              />
              <p className="om_para">No. of Shares</p>
            </div>
            <div className="ordermod__input2">
              <TextField
                id="outlined-basic"
                placeholder="254"
                variant="standard"
              />
              <p className="om_para">Limit Price/Share(Rs.)</p>
            </div>
          </div>

          <div
            className="ordermod__validity"
            style={{ display: "flex", marginTop: "30px" }}
          >
            <div className="validity__title">Order Validity</div>

            <div className="validity__days">
              <select name="" id="">
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
              </select>
            </div>
            <div className="validity__years">
              <select name="" id="">
                <option value="">Days</option>
                <option value="">Months</option>
                <option value="">Years</option>
              </select>
            </div>
          </div>

          <div className="ordermod__valbody">
            Your order shall be valid until 31st May 2021 until 15:00 or until
            you cancel the order, whichever is earlier.
          </div>
        </div>

        <div className="ordermod__footer">
          Un-filled order qty is less than asked modification. please enter a
          quantity greater than 657.
        </div>
      </div>
    </>
  );
};

export default OrderModi;
