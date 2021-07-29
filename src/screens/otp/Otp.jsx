import React, { useState, useEffect } from "react";
import Backarrow from "../../components/backarrow/Backarrow";
import Button from "../../components/button/Button";
import "./Otp.css";
import { Link, useLocation } from "react-router-dom";
import OtpInput from "react-otp-input";
import { otp_mail_login, otp_mobile_login } from "../../api/auth";
import { ToastContainer, toast } from "react-toastify";

const Otp = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [viaEmail, setViaEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const email = location.state.email;
  const mobile = location.state.mobile;
  const otp_login = async () => {
    setLoading(true);
    if (viaEmail) {
      const token = await otp_mail_login({ otp, email });
      if (token.error) {
        setLoading(false);
        toast.error(token.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Success!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      }
    } else {
      const num = mobile.slice(3).replace("-", "");
      const token = await otp_mobile_login({ otp, mobile });
      if (token.error) {
        setLoading(false);
        toast.error(token.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Success!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (location.state.type === "email") {
      setViaEmail(true);
    } else {
      setViaEmail(false);
    }
  }, []);
  return (
    <div className="otp__screen">
      <Backarrow />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="opt__body">
        <h1 className="otp__heading">
          Enter <Link>OTP</Link> to Login
        </h1>
        {viaEmail ? (
          <p className="otp__msg">
            Enter OTP sent to you via e-mail on your id {email}
          </p>
        ) : (
          <p className="otp__msg">Enter OTP sent to you via SMS on {mobile}</p>
        )}
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          separator={""}
          inputStyle="opt__box"
          containerStyle="otp__wrapper"
          separator={<span>&nbsp;</span>}
        />
        <div className="resend__text">Re-send OTP (After 13s)</div>
      </div>
      <Button text="Sign In" click={otp_login} loading={loading} />
    </div>
  );
};

export default Otp;
