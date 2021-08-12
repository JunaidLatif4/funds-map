import React, { useState, useEffect } from "react";
import Backarrow from "../../../components/backarrow/Backarrow";
import Button from "../../../components/button/Button";
import "./Motp.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";
import phone from "../../../Assets/imgs/phone.svg";
import { otp_mobile_login, otp_sms, whoami } from "../../../api/auth";
import { ToastContainer, toast } from "react-toastify";
import { Phone } from "@material-ui/icons";
import { generate_motp } from "../../../api/auth";
import { mobile_verification, verify_otp } from "../../../api/profile";
import Alert from "../../../components/Alert/Alert";
import { useDispatch, useSelector } from "react-redux";

const Motp = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [viaEmail, setViaEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const [secs, setSecs] = useState(15);
  const [partnerData, setPartnerData] = useState({});
  const history = useHistory();
  const state = location.state ? location.state : {};
  const dispatch = useDispatch();
  const stateToken = useSelector((state) => state.user.token);

  const token = localStorage.getItem("token");

  const gen_otp = async () => {
    console.log("sending otp via sms");
    const sent = await mobile_verification(stateToken);
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
      console.log("otp sent....");
    }
  };

  const otp_login = async () => {
    setLoading(true);
    console.log(otp);
    const responseToken = await verify_otp(otp, stateToken);
    if (responseToken.error) {
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
      console.log(responseToken.data);
      dispatch(responseToken.data.data);
      localStorage.setItem("token", responseToken.data.data);
      history.push("/getstarted");
      setLoading(false);
    }
  };

  const handle_resend = () => {
    setSecs(15);
    gen_otp();
    setResend(false);
    resendTimer();
  };

  const resendTimer = () => {
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
  };

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    setPartnerData(JSON.parse(localStorage.getItem("partner_data")));
    gen_otp();
  }, []);

  return (
    <div className="otp__screen">
      <Alert text="You emailID was verified successfully" />
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
        <div className="Motp__headerimg">
          <img src={phone} alt="Error" className="Motp__img" />
          <div className="Motp__text">Just One Last Step</div>
        </div>
        <h1 className="Motp__heading">
          Mobile Verification{" "}
          <div className="Motp__link">
            <Link>OTP</Link>{" "}
          </div>
        </h1>
        <p className="otp__msg">
          Enter OTP sent to you via SMS on {partnerData.countryCode}
          {partnerData.mobileNumber}
        </p>

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
          <div className="resend__btn" onClick={handle_resend}>
            Re-send OTP
          </div>
        ) : (
          <div className="resend__text">Re-send OTP (After {secs}s)</div>
        )}
      </div>
      <Button text="DONE" loading={loading} click={otp_login} />
    </div>
  );
};

export default Motp;
