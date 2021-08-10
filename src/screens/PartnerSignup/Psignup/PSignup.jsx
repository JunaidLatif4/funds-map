import React from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Phone from "material-ui-phone-number";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../../../components/button/Button";
import "./PSignup.css";
import PhoneInput from "react-phone-number-input";
import Switch from "@material-ui/core/Switch";
import "react-phone-number-input/style.css";
import { useState } from "react";
import ToggleBtn from "../../../components/toggle-btn/ToggleBtn";
import { blue, grey, red } from "@material-ui/core/colors";
import Mnumber from "../../../components/Mob-num input/Mnumber";
import { email_verification, partner_signup } from "../../../api/auth";
import { useEffect } from "react";

const PSignup = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    mobileNumber: " ",
    userType: "",
  });
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      countryCode: mobile && mobile.slice(0, 3),
      mobileNumber: mobile && mobile.slice(3),
      userType: checked ? "ORGANISATIONAL_PARTNER" : "INDIVIDUAL_PARTNER",
    }));
  }, [mobile]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = (data) => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.countryCode === "" ||
      data.mobileNumber === ""
    ) {
      alert("All fields are required");
      return false;
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        return true;
      } else {
        alert("invalid Email");
        return false;
      }
    }
  };

  const handlesignup = async () => {
    console.log(data);
    const validated = validate(data);
    if (validated) {
      const response = await partner_signup(data);
      if (response.error) {
        alert(response.error);
      } else {
        localStorage.setItem("token", response.data.data);
        console.log(localStorage.getItem("token"));
        const verification = await email_verification();
        if (verification.error) {
          alert(verification.error);
        } else {
          history.push({
            pathname: "/evar",
            state: { email: data.email },
          });
        }
      }
    }
  };

  return (
    <div className="psignup__wrap">
      <div className="psignup__container">
        <div className="psignup__header">
          <p className="header__para">
            Start your bussiness in under 5 minutes.
          </p>
          <div className="header__heading">
            Sign up as a<Link>Partner</Link>
          </div>
          <div className="psignup__toggle">
            <ToggleBtn checked={checked} setChecked={setChecked} />
            <div
              style={checked ? { color: "grey" } : { color: "#00abff" }}
              className="psignup__p1"
            >
              Individual
            </div>
            <div className="psignup__slash">/</div>
            <div
              style={checked ? { color: "#00abff" } : { color: "grey" }}
              className="psignup__p2"
            >
              Organization
            </div>
          </div>

          <div className="psignup__inputs">
            {checked && (
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Name of your Organization"
                variant="standard"
                onChange={handleChange}
              />
            )}
            <p className="inputs__heading">Enter contact persons's name</p>
            <div className="persons__info">
              <TextField
                style={{ width: "100%", marginRight: "15px" }}
                id="outlined-basic"
                label="First Name"
                variant="standard"
                onChange={handleChange}
                value={data.firstName}
                name="firstName"
              />
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Last Name"
                variant="standard"
                onChange={handleChange}
                value={data.lastName}
                name="lastName"
              />
            </div>
            <p className="inputs__heading">
              Enter contact persons's mobile number
            </p>
            <Mnumber setMobile={setMobile} />
            <div className="psignup__confirm">
              <div className="psignup__checkbox">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
              <div className="Psignup__confirmline">
                Send me WhatsApp messages for important communication
              </div>
            </div>
            <p className="inputs__head">Enter contact persons's Email ID</p>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              // label="Entre your Email"
              variant="standard"
              onChange={handleChange}
              value={data.email}
              name="email"
            />
            <div className="psignup__confirm">
              <div className="psignup__checkbox">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
              <div className="Psignup__confirmline">I agree to the T&C</div>
            </div>
            <small className="psignup__footer">
              Already registered?&nbsp;
              <Link to="signin"> Click here to Sign In</Link>
            </small>
          </div>
        </div>
      </div>
      <Button loading={loading} text="DONE" click={() => handlesignup()} />
    </div>
  );
};

export default PSignup;
