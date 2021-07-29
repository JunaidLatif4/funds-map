import React, { useState } from "react";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import img1 from "../../Assets/imgs/google.png";
import img2 from "../../Assets/imgs/lock.svg";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Signup.css";
import Backarrow from "../../components/backarrow/Backarrow";
import { e_verify, signup } from "../../api/auth";

const Signup = () => {
  const history = useHistory();
  // const classes = useStyles();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dummyData = {
    email,
    userType: "ORGANISATIONAL_PARTNER",
  };
  const handleSignup = async () => {
    setLoading(true);
    const res = await signup(dummyData);
    if (res.error) {
      setLoading(false);
      toast.error(res.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log(res.data.data);
      localStorage.setItem("token", res.data.data);
      const verified = await e_verify(res.data.data);
      if (verified.error) {
        setLoading(false);
        toast.error(verified.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        history.push("/evar");
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="signup__container">
        <div className="signup__header">
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

          <div className="signin__heading">
            <img src={img2} alt="Error" className="signin__img" />
            <span className="signin__text">Sign Up</span>
            <small>
              Not Yet Registered? <Link to="signin">Click here to Sign In</Link>
            </small>
          </div>

          <div className="body">
            <div className="input">
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Entre your Email ID"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="signup__or">or</div>

            <div className="signup__google">
              <img className="google__img" src={img1} alt="" />
              <div className="google__text">Continue With Google</div>
            </div>
          </div>
        </div>
        <Button text="DONE" click={handleSignup} loading={loading} />
      </div>
    </>
  );
};

export default Signup;
