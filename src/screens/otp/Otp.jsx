import React, { useState } from "react";
import Backarrow from "../../components/backarrow/Backarrow";
import Button from "../../components/button/Button";
import "./Otp.css";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const [viaEmail, setViaEmail] = useState(false);
  return (
    <div className="otp__screen">
      <Backarrow />
      <div className="opt__body">
        <h1 className="otp__heading">
          Enter <Link>OTP</Link> to Login
        </h1>
        {viaEmail ? (
          <p className="otp__msg">
            Enter OTP sent to you via SMS on +922355489789
          </p>
        ) : (
          <p className="otp__msg">
            Enter OTP sent to you via e-mail on your id example@gmail.com
          </p>
        )}
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={5}
          separator={""}
          inputStyle="opt__box"
          containerStyle="otp__wrapper"
          separator={<span>&nbsp;</span>}
        />
        <div className="resend__text">Re-send OTP (After 13s)</div>
      </div>
      <Button text="Sign In" />
    </div>
  );
};

export default Otp;
