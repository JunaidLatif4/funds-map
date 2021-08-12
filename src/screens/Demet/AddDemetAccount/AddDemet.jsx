import React from "react";
import "./AddDemet.css";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/button/Button";
import { delete_demat } from "../../../api/profile";

const AddDemet = ({ setOtp, demat_response }) => {
  return (
    <>
      <div className="bankinfo__container">
        <div className="userInfo__container">
          <div className="first__info">
            <div className="info__key">Depository :</div>
            <p className="info__value">&nbsp;{demat_response.depository}</p>
          </div>
          <div className="first__info">
            <div className="info__key">DP Name :</div>
            <p className="info__value">
              &nbsp;{demat_response.firstHolderName}
            </p>
          </div>
          <div className="first__info">
            <div className="info__key">Demat A/c :</div>
            <p className="info__value">
              &nbsp;{demat_response.depositoryId}
              {demat_response.clientId}
            </p>
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
              I confirm that the above demat account belongs to me.
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
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDemet;
