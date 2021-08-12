import React, { useState, useEffect } from "react";
import Backarrow from "../../components/backarrow/Backarrow";
import Button from "../../components/button/Button";
import "./Otp.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";
import {
  otp_mail_login,
  otp_mobile_login,
  otp_mail,
  otp_sms,
} from "../../api/auth";
import { ToastContainer, toast } from "react-toastify";
import OutlinedButton from "../../components/outlined-button/OutlinedButton";
import { useDispatch } from "react-redux";
import { signup_user } from "../../store/User";

const Otp = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [viaEmail, setViaEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const [secs, setSecs] = useState(15);
  const history = useHistory();
  const state = location.state ? location.state : {};
  const email = state.email;
  const mobile = state.mobile;

  const resendOtp = async () => {
    if (viaEmail) {
      //send otp via email
      const sent = await otp_mail(email);
      if (sent.error) {
        toast.error(sent.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setResend(false);
        setSecs(15);
      }
    } else {
      console.log("sending otp via sms");
      // send otp via sms
      console.log(mobile);
      const num = mobile.slice(3);
      const sent = await otp_sms(num.replace("-", ""));
      if (sent.error) {
        toast.error(sent.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        history.push({ pathname: "/otp", state: { type: "mobile", mobile } });
      }
    }
  };

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
        dispatch(signup_user(token.data.data));
        localStorage.setItem("token", token.data.data);
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
        dispatch(signup_user(token.data.data));
        localStorage.setItem("token", token.data.data);
        setLoading(false);
      }
    }
  };
  // const timer = () => {
  //  ;
  // };

  useEffect(() => {
    if (state.type === "email") {
      setViaEmail(true);
    } else {
      setViaEmail(false);
    }
    if (!resend) {
      setInterval(
        () =>
          setSecs((secs) => {
            if (secs > 0) {
              return secs - 1;
            } else {
              setResend(true);
              return 0;
            }
          }),
        1000
      );
    }
  }, [resend]);
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
          isInputNum="true"
        />
        {resend ? (
          <div className="resend__btn" onClick={resendOtp}>
            Re-send OTP
          </div>
        ) : (
          <div className="resend__text">Re-send OTP (After {secs}s)</div>
        )}
      </div>
      <Button text="Sign In" click={otp_login} loading={loading} />
    </div>
  );
};

export default Otp;
