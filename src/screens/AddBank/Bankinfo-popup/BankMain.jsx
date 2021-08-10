import React, { useState, useEffect } from "react";
import "./Bankinfo.css";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/button/Button";
import BottomSlide from "../../../components/bottom-slide/BottomSlide";
import BSHeader from "../../profile/components/bs-header/BSHeader";
import Bankinfo from "./BankInfo";
import Bankdata from "../Bankinfo-data/Bankdata";
import BankSuccess from "../Banksuccess/bsuccess"
import { ifsc_validator, otp_generate, bank_validator } from "../../../api/profile"

const BankMain = ({ bank, setBank, step, setStep }) => {

  const [ifsc, setIfsc] = useState("")
  const [accountnumber, setAccountnumber] = useState("")
  const [otp, setOtp] = useState("")

  const handleStep1 = async () => {
    let validationkey;
    let res = await ifsc_validator(ifsc)
    if (res.error) {
      alert("")
    }
    else {
      let res = await bank_validator(ifsc, accountnumber)
      if (res.error) {
        alert("")
      }
      else {
        let res = await otp_generate(validationkey, ifsc, accountnumber)
        if (res.error) {
          alert("")
        }
      }
    }
    console.log(res)
  }

  const handleStep2 = () => {
    setStep("step3")
  }


  const handleStep3 = () => {
    setStep("step1")
  }



  return (
    <>
      <BottomSlide closeBSlider={bank}>
        <BSHeader
          text="Add Bank"
          setCloseBSlider={() => setBank(false)}
        />
        {step == "step1" && <Bankinfo setIfsc={setIfsc} setAccountnumber={setAccountnumber} />}
        {step == "step2" && <Bankdata />}
        {step == "step3" && <BankSuccess />}

        {step == "step1" && <Button click={() => handleStep1()} text="VERIFY BANK ACCOUNT" />}
        {step == "step2" && <Button click={() => handleStep2()} text="ADD BANK ACCOUNT" />}
        {step == "step3" && <Button click={() => handleStep3()} text="DONE" />}
      </BottomSlide>
    </>
  );
};

export default BankMain;
