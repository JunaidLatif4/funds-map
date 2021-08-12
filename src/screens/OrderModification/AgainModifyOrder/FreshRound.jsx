import React from "react";
import BuyerInfo from "../Components/BuyInfo/BuyerInfo";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/button/Button";
import "./FreshRound.css";

import { Link } from "react-router-dom";

const FreshRound = () => {
  return (
    <>
      <div className="fr__container">
        <div className="fr__header">
          Order <Link>modification</Link>
          <BuyerInfo />
        </div>
        <div className="fr__body">
          <div className="fr__inputs" style={{ display: "flex" }}>
            <div className="fr__input1">
              <TextField
                style={{ marginRight: "15px" }}
                id="outlined-basic"
                placeholder="10000"
                variant="standard"
              />
              <p className="fr_para">Number of shares</p>
            </div>
            <div className="fr__input2">
              <TextField
                id="outlined-basic"
                placeholder="254"
                variant="standard"
              />
              <p className="fr_para">Price per share</p>
            </div>
          </div>

          <div className="fr__conditons">
            <div className="fr__btn1">
              <div className="fr__btn1__left"></div>
              <div className="fr__btn1__right">
                <p className="comp__para1">
                  Placing your order with a higher price per share incerease
                  your chances of getting an allocation. <Link>know more</Link>
                </p>
              </div>
            </div>
            <div className="fr__btn2">
              <div className="fr__btn2__left"></div>
              <div className="fr__btn2__right">
                <p style={{ color: "red" }} className="comp__para1">
                  Orders placed in fresh rounds, can not be cancelled once
                  placed. Only, the price and the price and the quantity of the
                  order can be increased.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button text="MODIFY ORDER" />
    </>
  );
};

export default FreshRound;
