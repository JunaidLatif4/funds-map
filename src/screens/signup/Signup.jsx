import React from "react";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";

import img1 from "./google.png";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Signup.css";
import Backarrow from "../../components/backarrow/Backarrow";

const Signup = () => {
  // const classes = useStyles();
  return (
    <>
      <div className="signup__container">
        <div className="signup__header">
          <Backarrow />
          <div className="esignin__heading">
            <LockOpenSharpIcon fontSize="large" />
            <span className="signin__text">Sign Up</span>
            <small>
              Not Yet Registered? <Link to="signin">Click here to Sign In</Link>
            </small>
          </div>

          <div className="body">
            <div className="input">
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Entre your Email ID"
                variant="standard"
              />
            </div>

            <div className="signup__or">or</div>

            <div className="signup__google">
              <img className="google__img" src={img1} alt="" />
              <div className="google__text">Continue With Google</div>
            </div>
          </div>
        </div>
        <Button text="DONE" />
      </div>
    </>
  );
};

export default Signup;
