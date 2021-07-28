import React, { useState } from "react";
import Button from "../../components/button/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Signin.css";
import EmailSignin from "../../components/email-signin/EmailSignin";
import PhoneSignin from "../../components/phone-signin/PhoneSignin";
import Backarrow from "../../components/backarrow/Backarrow";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { otp_mail, otp_sms } from "../../api/auth";
const Signin = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [withEmail, setWithEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const signin = async () => {
    setLoading(true);

    if (withEmail) {
      //send otp via email
      const sent = await otp_mail(email);
      if (sent.error) {
        setLoading(false);
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
        history.push({ pathname: "/otp", state: { type: "email", email } });
        setLoading(false);
      }
    } else {
      //send otp via sms
      console.log(mobile);
      const num = mobile.slice(3);
      const sent = await otp_sms(num.replace("-", ""));
      if (sent.error) {
        setLoading(false);
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
        setLoading(false);
      }
    }
  };

  return (
    <div className="signin__container">
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
      {withEmail ? (
        <EmailSignin
          setWithEmail={setWithEmail}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        <PhoneSignin
          setWithEmail={setWithEmail}
          mobile={mobile}
          setMobile={setMobile}
        />
      )}
      <Button text="Sign In" click={signin} loading={loading} />
    </div>
  );
};

export default Signin;
