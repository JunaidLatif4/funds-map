import React from "react";
import "./Bankdata.css";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/button/Button";

const Bankdata = () => {
  return (
    <>
      <div className="bankinfo__container">
        <div className="userInfo__container">
          <div className="first__info">
            <div className="info__key">Name :</div>
            <p className="info__value">&nbsp;HELLO WORLD</p>
          </div>
          <div className="first__info">
            <div className="info__key">Bank :</div>
            <p className="info__value">&nbsp;Bank of India</p>
          </div>
          <div className="first__info">
            <div className="info__key">A/c :</div>
            <p className="info__value">&nbsp;************1563</p>
          </div>
          <div className="first__info">
            <div className="info__key">Branch :</div>
            <p className="info__value">&nbsp;Front Hoeniman Circle</p>
          </div>
          <div className="psignup__confirm">
            <div className="psignup__checkbox">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
            <div className="Psignup__confirmline">
              I confirm that the above bank account belongs to me.
            </div>
          </div>

          <div className="bankdata__otp">
            <p className="bankdata__otpmsg">
              Enter OTP sent to you via SMS on 9987876564 & via email on email
              before domainlongname@gmail.com
            </p>

            <div style={{ margin: "40px 0" }} className="bankdata__otpinput">
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                placeholder="Enter OTP"
                variant="standard"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Button text="ADD BANK ACCOUNT" /> */}
    </>
  );
};

export default Bankdata;
