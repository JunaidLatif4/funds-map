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
  const [data_for_step2, setdata_for_step2] = useState({})

  const [otp, setOtp] = useState("")
  let data_for_step3 = {}

  const handleStep1 = async () => {
    let validationkey;
    let ifsc_v = await ifsc_validator(ifsc)
    if (ifsc_v.error) {
      alert("error in ifsc validation")
    }
    else {
      console.log(ifsc_v)
      let bank = await bank_validator(ifsc, accountnumber)
      if (bank.error) {
        alert("error in bank validation")
      }
      else {
        validationkey = bank.data.data.validationKey
        console.log(bank)
        let otp = await otp_generate(validationkey, ifsc, accountnumber)
        if (otp.error) {
          alert("error in otp generate")
        }
        else {
          console.log(otp)
          setdata_for_step2({ ac: accountnumber, bankName: bank.data.data.bankName, bankBranch: bank.data.data.branch, accountHolderName: bank.data.data.accountHolderName })
          console.log(data_for_step2) //ye dekh idhr ok ha
          setStep("step2")
        }
      }
    }
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
        {step == "step2" && <Bankdata data_for_step2={data_for_step2} />}
        {step == "step3" && <BankSuccess data_for_step3 />}

        {step == "step1" && <Button click={() => handleStep1()} text="VERIFY BANK ACCOUNT" />}
        {step == "step2" && <Button click={() => handleStep2()} text="ADD BANK ACCOUNT" />}
        {step == "step3" && <Button click={() => handleStep3()} text="DONE" />}
      </BottomSlide>
    </>
  );
};

export default BankMain;
