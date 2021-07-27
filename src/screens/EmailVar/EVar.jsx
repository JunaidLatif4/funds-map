import React from "react";
import Button from "../../components/button/Button";
import EmailIcon from "@material-ui/icons/Email";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Evar.css";
import Backarrow from "../../components/backarrow/Backarrow";
const Evar = () => {
  return (
    <>
      <div className="Evar__container">
        <div className="Evar__header">
          <Backarrow />
          <div className="icon">
            <EmailIcon />
          </div>
          <div className="Evar__heading">Email Verification</div>

          <div className="body">
            <div className="Evar__para1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              facilis commodi suscipit mollitia
            </div>

            <div className="Evar__para2">
              <p className="ptwo1">Lorem ipsum dolor sit.</p>
              <p className="ptwo2">
                Lorem ipsum dolor sit amet |
                <span className="para2span"> Change Email</span>
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
