import React from "react";
import Button from "../../components/button/Button";
import EmailIcon from "@material-ui/icons/Email";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Evar.css";
import Backarrow from "../../components/backarrow/Backarrow";

import evar from "../../Assets/imgs/evar.svg"
const Evar = () => {
  return (
    <>
      <div className="Evar__container">
        <div className="Evar__header">
          <Backarrow />
          <img src={evar} alt="Error" className="signin__img" />

          <div className="Evar__heading">Email Verification</div>

          <div className="body">
            <div className="Evar__para1">
              Check your email inbox. We've mailed you an e-mail verification link on your id email@domain.com
            </div>

            <div className="Evar__para2">
              <p className="ptwo1">Didn't receive an email?</p>
              <p className="ptwo2">
                Re-send Email (After 10s) |
                <span className="para2span">{" "}Change Email ID</span>
              </p>
            </div>
          </div>
        </div>
        <Button text="OPEN MAIL" />
      </div>
    </>
  );
};

export default Evar;
