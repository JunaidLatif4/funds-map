import React, { useState } from "react";
import Button from "../../components/button/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Signin.css";
import EmailSignin from "../../components/email-signin/EmailSignin";
import PhoneSignin from "../../components/phone-signin/PhoneSignin";
import Backarrow from "../../components/backarrow/Backarrow";
const Signin = () => {
  const [withEmail, setWithEmail] = useState(true);
  return (
    <div className="signin__container">
      <Backarrow />
      {withEmail ? (
        <EmailSignin setWithEmail={setWithEmail} />
      ) : (
        <PhoneSignin setWithEmail={setWithEmail} />
      )}
      <Button text="Sign In" />
    </div>
  );
};

export default Signin;
