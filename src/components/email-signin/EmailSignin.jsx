import React from "react";
import "./EmailSignin.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

import email from "../../Assets/imgs/email.svg"
const EmailSignin = ({ setWithEmail }) => {
  return (
    <div className="email__signin">
      <div className="esignin__heading">
      <img src={email} alt="Error" className="signin__img" />
        <span className="signin__text">Sign In</span>
        <small>
          Not Yet Registered? <Link to="/signup">Click here to Sign Up</Link>
        </small>
      </div>
      <div className="esignin__form">
        {/* <label className="signin__label">Signin with email account</label> */}
        <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Signin with email account"
                variant="standard"
              />
        <strong className="alternate__text">
          Alternatively, Sign in with{" "}
          <Link onClick={() => setWithEmail(false)}>Phone</Link>
        </strong>
      </div>
    </div>
  );
};

export default EmailSignin;
