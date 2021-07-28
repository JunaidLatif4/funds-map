import React from "react";
import "./PhoneSignin.css";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";

import Phone from "material-ui-phone-number";

import phone from "../../Assets/imgs/phone.svg";
const PhoneSignin = ({ setWithEmail, mobile, setMobile }) => {
  const handleChange = (value) => {
    setMobile(value);
  };
  return (
    <div className="phone__signin">
      <div className="psignin__heading">
        <img src={phone} alt="Error" className="signin__img" />
        <span className="signin__text">Sign In</span>
        <small>
          Not Yet Registered? <Link to="/signup">Click here to Sign Up</Link>
        </small>
      </div>
      <div className="psignin__form">
        <label className="signin__label">Signin with phone number</label>
        <Phone
          variant="standard"
          defaultCountry={"in"}
          regions={"asia"}
          style={{ width: "100%" }}
          value={mobile}
          onChange={handleChange}
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
