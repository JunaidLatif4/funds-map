import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import EmailIcon from "@material-ui/icons/Email";
import { Link, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Evar.css";
import Backarrow from "../../components/backarrow/Backarrow";

import evar from "../../Assets/imgs/evar.svg";
const Evar = () => {
  const location = useLocation();
  const [resend, setResend] = useState(false);
  const [secs, setSecs] = useState(15);
  console.log(location);
  console.log(location.state);

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
  return (
    <>
      <div className="Evar__container">
        <div className="Evar__header">
          <Backarrow />
          <img src={evar} alt="Error" className="signin__img" />

          <div className="Evar__heading">Email Verification</div>

          <div className="body">
            <div className="Evar__para1">
              Check your email inbox. We've mailed you an e-mail verification
              link on your id {location.state && location.state.email}
            </div>

            <div className="Evar__para2">
              <p className="ptwo1">Didn't receive an email?</p>
              <p className="ptwo2">
                {!resend ? (
                  `Re-send Email (After ${secs}s)`
                ) : (
                  <Link className="resend_email"> Re-send Email</Link>
                )}
                |
                <Link className="para2span" to="/signup">
                  Change Email ID
                </Link>
              </p>
            </div>
          </div>
        </div>
        <a href="mailto:">
          <Button text="OPEN MAIL" />
        </a>
      </div>
    </>
  );
};

export default Evar;
