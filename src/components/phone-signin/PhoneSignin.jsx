import React from "react";
import "./PhoneSignin.css";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
const PhoneSignin = ({ setWithEmail }) => {
  return (
    <div className="phone__signin">
      <div className="psignin__heading">
        <MailOutlineIcon fontSize="large" />
        <span className="signin__text">Sign In</span>
        <small>
          Not Yet Registered? <Link to="/signup">Click here to Sign Up</Link>
        </small>
      </div>
      <div className="psignin__form">
        <label className="signin__label">Signin with phone number</label>
        <TextField
          className="esignin__field"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <strong className="alternate__text">
          Alternatively, Sign in with{" "}
          <Link onClick={() => setWithEmail(true)}>Email</Link>
        </strong>
      </div>
    </div>
  );
};

export default PhoneSignin;
