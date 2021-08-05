import React, { useState, useEffect } from "react";
import "./AddPhone.css";
import BottomSlide from "../../../../components/bottom-slide/BottomSlide";
import Checkbox from "@material-ui/core/Checkbox";
import BSHeader from "../bs-header/BSHeader";
import Button from "../../../../components/button/Button";
import whatsapp from "../../../../Assets/imgs/whatsapp.svg";
import Check from "../../../../Assets/imgs/check.svg";
import OtpInput from "react-otp-input";

const AddPhone = () => {
  const [box, setBox] = useState("success");
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState(false);
  const [secs, setSecs] = useState(15);
  const [checked, setChecked] = useState(true);
  const [closeBSlider, setCloseBSlider] = useState(false);

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
      {!closeBSlider && (
        <BottomSlide closeBSlider={closeBSlider}>
          <BSHeader
            text={box == "whatsapp" && "Stay updated on WhatsApp"}
            setCloseBSlider={setCloseBSlider}
          />
          <div className="add__phone_body">
            <div className="ap__inner_body">
              {box === "mobile" && (
                <>
                  <span>Enter your cell phone number</span>
                  <input type="text" />
                </>
              )}
              {box === "otp" && (
                <>
                  <span className="ap__otp_subtitle">
                    Enter OTP sent to you via SMS on 99325487958
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
            <Button text="DONE" />
          </div>
        </BottomSlide>
      )}
    </>
  );
};

export default AddPhone;
