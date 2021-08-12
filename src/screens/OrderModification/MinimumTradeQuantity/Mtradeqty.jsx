import React from "react";
import "./Mtradqty.css";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/imgs/upload.svg";
import TextField from "@material-ui/core/TextField";
import info from "../../../Assets/imgs/info.svg";
import backarrow from "../../../Assets/imgs/backarrow.svg";
import Button from "../../../components/button/Button";
import Checkbox from "@material-ui/core/Checkbox";
import BuyerInfo from "../Components/BuyInfo/BuyerInfo";

const Mtradeqty = () => {
  return (
    <>
      <div className="tradeqty__container">
        <BuyerInfo />
        <div className="tq__bottom__header">
          <img
            style={{ width: "20px", height: "20px" }}
            src={backarrow}
            alt="Error"
          />
          <p className="tq__para">Back</p>
        </div>
        <div className="tq__body">
          <div className="tq__body__heading">
            Minimum trade <Link>quantity</Link>
          </div>

          <div className="tq__body__para">
            You've placed an order for xxxx shares, but it is possible that we
            may be able to fulfil your order with multiple transactions. Please
            let us know what shall be the minimum quantity that you are willing
            to transact per transaction.
          </div>
          <Link style={{ fontSize: "11px" }}>Learn More</Link>

          <div className="tq__input">
            <TextField
              style={{ width: "50%" }}
              id="outlined-basic"
              placeholder="XXXXXX"
              variant="standard"
            />
            <p className="tq__bottom__para1">Minimum qty per transaction</p>
            <p className="tq__bottom__para1">
              Enter Quantity between xxxx and xxxx.
            </p>
            <p
              style={{ color: "red", marginTop: "3px" }}
              className="tq__bottom__para1"
            >
              Minimum quantity can not be higher than 30% of your total quantity
            </p>
          </div>
          <div className="psignup__confirm">
            <div className="psignup__checkbox">
              <Checkbox
                style={{ color: "green" }}
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
            <div className="Psignup__confirmline">I agree to the T&C</div>
          </div>
        </div>
      </div>
      <Button text="CONFIRM" />
    </>
  );
};

export default Mtradeqty;
