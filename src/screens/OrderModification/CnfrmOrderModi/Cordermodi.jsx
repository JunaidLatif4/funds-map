import React, { useState, useEffect } from "react";

import Backarrow from "../../../components/backarrow/Backarrow";
import Button from "../../../components/button/Button";

import "./Cordermodi.css";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

const Cordermodi = () => {
  const [time, settime] = useState(15);

  useEffect(() => {
    setInterval(
      () =>
        settime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            return 0;
          }
        }),
      1000
    );
  }, []);
  return (
    <>
      <div className="otp__screen">
        <div className="opt__body">
          <div className="Motp__heading">
            Confirm
            <Link> &nbsp;order modification</Link>
          </div>
          <p className="otp__msg">
            Enter OTP sent to you via SMS on 99878 76564 and via email on
            email@email.com
          </p>

          <OtpInput
            // value={otp}
            // onChange={(otp) => setOtp(otp)}
            numInputs={5}
            separator={""}
            inputStyle="opt__box"
            containerStyle="otp__wrapper"
            separator={<span>&nbsp;</span>}
            isInputNum="true"
          />

          <div className="resend__text">Re-send OTP (After {time}s)</div>
        </div>
        <Button text="MODIFY ORDER" />
      </div>
    </>
  );
};

export default Cordermodi;
