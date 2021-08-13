import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";

import watsapp from "../../Assets/imgs/whatsapp.svg";
import Phone from "material-ui-phone-number";
import Checkbox from "@material-ui/core/Checkbox";
import { ToastContainer, toast } from "react-toastify";

import "./Notify.css";
import Backarrow from "../../components/backarrow/Backarrow";
import { add_mobile, whoami } from "../../api/auth";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const Notify = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(true);
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const stateToken = useSelector((state) => state.user.token);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleNum = (value) => {
    console.log(value);
    setMobile(value);
  };
  const getNum = async () => {
    console.log("running..");
    console.log(stateToken);

    setLoading(true);
    const myData = await whoami(stateToken);
    if (myData.error) {
      setLoading(false);
      toast.error(myData.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const code = mobile.slice(0, 3);
      const num = mobile.slice(3).replace("-", "");
      const username = myData.data.data.username;
      const data = { countryCode: code, mobileNo: num, username, checked };
      console.log(data);
      const added = await add_mobile(data, stateToken);
      if (added.error) {
        setLoading(false);
        toast.error(added.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setLoading(false);
        toast.success("Success!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  // const classes = useStyles();
  return (
    <>
      <div className="notify__container">
        <div className="notify__header">
          <Backarrow />
        </div>
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
              style={{ width: "100%" }}
              value={mobile}
              onChange={handleNum}
            />
            <div className="Notify__confirm">
              <div className="notify__checkbox">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  checked={checked}
                  onChange={handleChange}
                />
              </div>
              <div className="confirm_line">
                I wish to recieve WhatsApp updates
              </div>
            </div>

            <div className="body__para">
              We are extremely serious about confidentiality of your
              information, and we shall never share it with anyone without your
              consent.
            </div>

            <div
              className="notify__skip"
              onClick={() => history.push("/signin")}
            >
              Skip
            </div>
          </div>
        </div>

        <Button text="DONE" loading={loading} click={getNum} />
      </div>
    </>
  );
};

export default Notify;
