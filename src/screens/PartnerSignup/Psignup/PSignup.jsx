import React  from "react";
import { Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Phone from "material-ui-phone-number";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../../../components/button/Button";
import "./PSignup.css";
import PhoneInput from "react-phone-number-input";
import Switch from "@material-ui/core/Switch";
import 'react-phone-number-input/style.css'
import { useState } from "react";


const PSignup = () => {
    const [value, setValue] = useState()
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const onChange = (event) =>{
      setValue(event.target.value)
  }
  return (
    <>
      <div className="psignup__container">
        <div className="psignup__header">
          <p className="header__para">
            Start your bussiness in under 5 minutes.
          </p>
          <div className="header__heading">
            Sign up as a<Link>Partner</Link>
          </div>
          {/* <div className="psignup__switch">
            <div className="switch__icon">
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div className="switch__link">
                <Link>Individual</Link>{"/"}
                <Link>Organization</Link>
            </div>
          </div> */}

          <div className="psignup__inputs">
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Name of your Organization"
              variant="standard"
            />
            <p className="inputs__heading">Enter contact persons's name</p>
            <div className="persons__info">
              <TextField
                style={{ width: "100%", marginRight: "15px" }}
                id="outlined-basic"
                label="First Name"
                variant="standard"
              />
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Last Name"
                variant="standard"
              />
            </div>
            <p className="inputs__heading">
              Enter contact persons's mobile number
            </p>
            {/* <Phone
              variant="standard"
              defaultCountry={"in"}
              regions={"asia"}
              style={{ width: "100%" }}
            /> */}
            <PhoneInput
              international
              defaultCountry="IN"
              value={value}
              onChange={setValue}
            />
            <div className="psignup__confirm">
              <div className="psignup__checkbox">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
              <div className="confirm_line">
                Send me WhatsApp messages for important communication
              </div>
            </div>
            <p className="inputs__head">Enter contact persons's Email ID</p>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              // label="Entre your Email"
              variant="standard"
            />
            <div className="psignup__confirm">
              <div className="psignup__checkbox">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
              <div className="confirm_line">I agree to the T&C</div>
            </div>
            <small className="psignup__footer">
              Already registered?&nbsp;<Link to="signin"> Click here to Sign In</Link>
            </small>
          </div>
        </div>
      </div>
      <Button text="DONE" />
    </>
  );
};

export default PSignup;
