import React from "react";
import "./EmailSignin.css";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
const EmailSignin = ({ setWithEmail }) => {
  return (
    <div className="email__signin">
      <div className="esignin__heading">
        <MailOutlineIcon fontSize="large" />
        <span className="signin__text">Sign In</span>
        <small>
          Not Yet Registered? <Link to="/signup">Click here to Sign Up</Link>
        </small>
      </div>
      <div className="esignin__form">
        <label className="signin__label">Signin with email account</label>
        <TextField
          className="esignin__field"
          InputLabelProps={{
            shrink: true,
          }}
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
