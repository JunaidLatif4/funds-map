import React, { useState, useEffect } from "react";
import "./Bankinfo.css";
import TextField from "@material-ui/core/TextField";

function Bankinfo({
  setIfsc,
  setAccountnumber,
  ifsc,
  handel_ifsc,
  ifsc_res,
  loadingData,
}) {
  return (
    <div className="addbank__container">
      {console.log(ifsc_res)}
      <div className="addbank__header">
        <div className="addbank__left"></div>
        <div className="addbank__right">
          <div className="addbank__boldpara">
            you can only add a bank account that belongs to you.
          </div>
          <div className="addbank__para">
            Either where you are the single holder or in case of a joint account
            you should be the first holder.
          </div>
        </div>
      </div>
      <div className="addbank__body">
        <p className="addbank__bodypara">Entre your bank's IFSC Code</p>
      </div>
      <div className="abank__input">
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          placeholder="IFSC"
          variant="standard"
          onChange={(e) => handel_ifsc(e.target.value)}
        />
      </div>

      {loadingData ? (
        <div>Loading...</div>
      ) : (
        <>
          {" "}
          <div className="input__info">
            <div className="info__title" style={{ fontWeight: "bolder" }}>
              Bank Name:
            </div>
            <p className="title__info">&nbsp;{ifsc_res?.bank}</p>
          </div>
          <div className="input__info">
            <div className="info__title">
              <strong> Branch:</strong>
            </div>
            <p className="title__info">&nbsp;{ifsc_res?.branch}</p>
          </div>
        </>
      )}

      <div className="abank__input2">
        <p
          className="input2__heading"
          style={{ fontSize: "12px", marginTop: "20px" }}
        >
          Account Number
        </p>
        <div className="input2" style={{ marginBottom: "45px" }}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            placeholder="XXXX - XXXX - XXXX - 1234"
            variant="standard"
            onChange={(e) => setAccountnumber(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Bankinfo;
