import React from "react";
import "./OrderModi.css";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/imgs/upload.svg";
import TextField from "@material-ui/core/TextField";
import info from "../../../Assets/imgs/info.svg";
import BuyerInfo from "../Components/BuyInfo/BuyerInfo";

const OrderModi = () => {
  return (
    <>
      <div className="ordermod__container">
        <div className="ordermod__heading">
          Order <Link>Modificatoin</Link>
        </div>
        <BuyerInfo />

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
              <p className="om_para">
                Limit Price/Share(Rs.)
                <div className="om__thirdimg">
                  <img className="om__thirdimg" src={info} alt="" />
                </div>
              </p>
            </div>
          </div>

          <div
            className="ordermod__validity"
            style={{ display: "flex", marginTop: "30px" }}
          >
            <div className="validity__title">Order Validity</div>

            <div className="validity__days">
              <select style={{ border: "none" }} name="" id="">
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
                <option value="">25</option>
              </select>
            </div>
            <div className="validity__years">
              <select style={{ border: "none" }} name="" id="">
                <option value="">Days</option>
                <option value="">Months</option>
                <option value="">Years</option>
              </select>
            </div>
          </div>

          <div className="om__validity__para">
            <div className="om__thirdimg">
              <img className="om__validity__img" src={info} alt="" />
            </div>
            What is Order Validity?
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

      <div className="ordermod__btns">
        <button className="ordermod__btn1">MODIFY ORDER</button>
        <button className="ordermod__btn2">CANCEL ORDER</button>
      </div>
    </>
  );
};

export default OrderModi;
