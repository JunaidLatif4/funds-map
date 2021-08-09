import React, { useState, useEffect } from "react";
import "./AddPhone.css";
import BottomSlide from "../../../../components/bottom-slide/BottomSlide";
import Checkbox from "@material-ui/core/Checkbox";
import BSHeader from "../bs-header/BSHeader";
import Button from "../../../../components/button/Button";
import whatsapp from "../../../../Assets/imgs/whatsapp.svg";
import Check from "../../../../Assets/imgs/check.svg";
import OtpInput from "react-otp-input";
import Mnumber from "../../../../components/Mob-num input/Mnumber";
import { mobile_verification, verify_otp } from "../../../../api/profile";
import { add_mobile } from "../../../../api/auth";

const AddPhone = ({ type, username, addPhone, setAddPhone }) => {
  const [box, setBox] = useState(type);
  const [otp, setOtp] = useState();
  const [mobile, setMobile] = useState(null);
  const [resend, setResend] = useState(false);
  const [secs, setSecs] = useState(15);
  const [checked, setChecked] = useState(true);
  const [closeBSlider, setCloseBSlider] = useState(false);
  const add_phone = async () => {
    const data = {
      username: username,
      countryCode: mobile?.slice(0, 3),
      mobileNo: mobile?.slice(3),
    };
    const added = await add_mobile(data);
    if (added.error) {
      alert(added.error);
    } else {
      console.log("number added: " + added.data);
      const generate_otp = await mobile_verification();
      if (generate_otp.error) {
        alert("otp can not be generated");
      } else {
        console.log("otp generated");
        setBox({});
        setSecs(15);
        setBox("otp");
      }
    }
  };

  const otp_verification = async () => {
    console.log("verifying otp");
    const verified = await verify_otp(otp);
    if (verified.error) {
      setBox({});
      console.log(verified.error);
      setBox("wrongotp");
    } else {
      setBox({});
      setBox("whatsapp");
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
  }, [resend]);
  return (
    <>
      {addPhone && (
        <BottomSlide closeBSlider={closeBSlider}>
          <BSHeader
            text={box == "whatsapp" && "Stay updated on WhatsApp"}
            setCloseBSlider={(open) =>
              setAddPhone((preVal) => ({ ...preVal, open: !open }))
            }
          />
          <div className="add__phone_body">
            <div className="ap__inner_body">
              {box === "mobile" && (
                <>
                  <span>Enter your cell phone number</span>
                  <Mnumber setMobile={setMobile} />
                </>
              )}
              {box === "otp" && (
                <>
                  <span className="ap__otp_subtitle">
                    Enter OTP sent to you via SMS on {mobile}
                  </span>
                  <OtpInput
                    value={otp}
                    onChange={(otp) => setOtp(otp)}
                    numInputs={6}
                    separator={""}
                    inputStyle="opt__box_success"
                    containerStyle="otp__wrapper_success"
                    separator={<span>&nbsp;</span>}
                    isInputNum="true"
                  />
                  <div className="ap__resend_box">
                    {resend ? (
                      <span className="ap__resend_btn">Re-send OTP </span>
                    ) : (
                      <span className="ap__resend_text">
                        Re-send OTP (After {secs}s)
                      </span>
                    )}
                    <span className="ap__change_num">
                      | Change mobile number
                    </span>
                  </div>
                </>
              )}
              {box === "wrongotp" && (
                <>
                  <span className="ap__otp_subtitle">
                    Enter OTP sent to you via SMS on 99325487958
                  </span>
                  <OtpInput
                    value={otp}
                    onChange={(otp) => setOtp(otp)}
                    numInputs={6}
                    separator={""}
                    inputStyle="opt__box_error"
                    containerStyle="otp__wrapper_error"
                    separator={<span>&nbsp;</span>}
                    isInputNum="true"
                  />
                  <span className="ap__otp_errtext">
                    Incorrect OTP. Please try again
                  </span>
                  <div className="ap__resend_box">
                    {resend ? (
                      <span className="ap__resend_btn">Re-send OTP </span>
                    ) : (
                      <span className="ap__resend_text">
                        Re-send OTP (After {secs}s)
                      </span>
                    )}
                    <span className="ap__change_num">
                      | Change mobile number
                    </span>
                  </div>
                </>
              )}
              {box === "whatsapp" && (
                <>
                  <img src={whatsapp} className="ap__whatsapp_logo" />
                  <span className="ap__whatsapp_text">
                    Filtered, quality feed on global Private Equity, Startups
                    and Exotic investments
                  </span>
                  <span className="ap__notify_confirm">
                    <span className="ap__notify_checkbox">
                      <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                      />
                    </span>
                    <span className="ap__confirm_text">
                      I wish to recieve WhatsApp updates
                    </span>
                  </span>
                </>
              )}
              {box === "success" && (
                <>
                  <img src={Check} className="ap__whatsapp_logo" />
                  <span className="ap__confirm_text2">
                    Phone number has been added successfully
                  </span>
                </>
              )}
            </div>
            {box === "mobile" && <Button text="DONE" click={add_phone} />}
            {box === "otp" && <Button text="DONE" click={otp_verification} />}
            {box === "wrongotp" && (
              <Button text="DONE" click={otp_verification} />
            )}
            {box === "whatsapp" && (
              <Button
                text="DONE"
                click={() => {
                  setBox("success");
                }}
              />
            )}
            {box === "success" && (
              <Button
                text="DONE"
                click={() =>
                  setAddPhone((preVal) => ({ ...preVal, open: false }))
                }
              />
            )}
          </div>
        </BottomSlide>
      )}
    </>
  );
};

export default AddPhone;
