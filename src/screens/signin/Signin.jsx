import React, { useState } from "react";
import Button from "../../components/button/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Signin.css";
import EmailSignin from "../../components/email-signin/EmailSignin";
import PhoneSignin from "../../components/phone-signin/PhoneSignin";
import Backarrow from "../../components/backarrow/Backarrow";
const Signin = () => {
  const signin = () => {};
  const [withEmail, setWithEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <div className="signin__container">
      <Backarrow />
      {withEmail ? (
        <EmailSignin setWithEmail={setWithEmail} email={email} />
      ) : (
        <PhoneSignin setWithEmail={setWithEmail} mobile={mobile} />
      )}
      <Button text="Sign In" onClick={signin} />
    </div>
  );
};

export default Signin;
