import React from "react";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";

import watsapp from "./watsapp.png";
import Phone from "material-ui-phone-number";
import Checkbox from '@material-ui/core/Checkbox';


import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Notify.css";
import Backarrow from "../../components/backarrow/Backarrow";
const Notify = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


  // const classes = useStyles();
  return (
    <>
      <div className="signup__container">
        <div className="signup__header">
          <Backarrow />
        </div>

        <div className="notify__section1">
          <div className="sec1__head">
            <p className="sec1__title">Stay updated on</p>
            <img className="sec1__img" src={watsapp} alt="Error" />
          </div>

          <div className="notify__section2">
            <p className="notify__para1">Filtered. quality feed on global</p>
            <p className="notify__para2">
              Private Equity. Startups and Exotic investments
            </p>
          </div>

          <div className="notify__body">
            <div className="body__title">Entre your mobile number</div>
            <Phone
              variant="standard"
              defaultCountry={"in"}
              regions={"asia"}
              //   onlyCountries={['pk']}
              style={{ width: "100%" }}
            />
            <div className="Notify__confirm">
              <div className="notify__checkbox">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
              <div className="confirm_line">
                  I wish to recive WhatsApp updates
              </div>
            </div>

            <div className="body__para">
              We are extremely serious about confidentiality of your
              information, and we shall never share it with anyone without your
              consent.
            </div>

            <div className="notify__skip">Skip</div>
          </div>
        </div>

        <Button text="DONE" />
      </div>
    </>
  );
};

export default Notify;
