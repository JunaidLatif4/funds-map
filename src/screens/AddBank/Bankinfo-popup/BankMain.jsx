import React, { useState, useEffect } from "react";
import "./Bankinfo.css";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/button/Button";
import BottomSlide from "../../../components/bottom-slide/BottomSlide";
import BSHeader from "../../profile/components/bs-header/BSHeader";
import Bankinfo from "./BankInfo";
import Bankdata from "../Bankinfo-data/Bankdata";
import BankSuccess from "../Banksuccess/bsuccess"
import { ifsc_validator, otp_generate, bank_validator, bank_save } from "../../../api/profile"

const BankMain = ({ bank, setBank, step, setStep }) => {
  const [ifsc, setIfsc] = useState("")
  const [accountnumber, setAccountnumber] = useState("")
  const [data_for_step2, setdata_for_step2] = useState({})
  const [validationkey, setValidationkey] = useState(null)
  const [bankres, setbankres] = useState(null)
  const [ifsc_res, setifsc_res] = useState(null)

  const [otp, setOtp] = useState("")
  let data_for_step3 = {}

  const handleStep1 = async () => {

    let bank = await bank_validator(ifsc, accountnumber)
    setbankres(bank)
    if (bank.error) {
      alert("error in bank validation1")
    }
    else {
      setValidationkey(bank.data.data.validationKey)
      console.log(bank)
      let otp = await otp_generate(validationkey, ifsc, accountnumber)
      if (otp.error) {
        alert("error in otp generate")
      }
      else {
        console.log(otp)
        setdata_for_step2({ ac: accountnumber, bankName: bank.data?.data?.bankName, bankBranch: bank.data?.data?.branch, accountHolderName: bank.data?.data?.accountHolderName, validationkey: validationkey, ifsc: ifsc })
        console.log(data_for_step2)
        setStep("step2")
      }
    }
  }


  const handel_ifsc = async (val) => {

    setIfsc(val)

    if (val?.length == 11) {
      let ifsc_v = await ifsc_validator(val)
      if (ifsc_v.error) {
        alert("error in ifsc validation2")
      }
      else {
        setifsc_res(ifsc_v?.data?.data)
        console.log(ifsc_v)
      }
    }
  }

  const handleStep2 = async () => {
    let save_Account = await bank_save(otp, validationkey, bankres.data?.data?.accountHolderName, bankres.data?.data?.bankName, accountnumber, ifsc)
    console.log(save_Account)
    if (save_Account.error) {
      alert("error in save bank")
    } else {
      setStep("step3")
    }

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
        {step == "step1" && <Bankinfo setIfsc={setIfsc} setAccountnumber={setAccountnumber} ifsc={ifsc} handel_ifsc={handel_ifsc} ifsc_res={ifsc_res} />}
        {step == "step2" && <Bankdata data_for_step2={data_for_step2} setOtp={setOtp} />}
        {step == "step3" && <BankSuccess data_for_step3 />}

        {step == "step1" && <Button click={() => handleStep1()} text="VERIFY BANK ACCOUNT" />}
        {step == "step2" && <Button click={() => handleStep2()} text="ADD BANK ACCOUNT" />}
        {step == "step3" && <Button click={() => handleStep3()} text="DONE" />}
      </BottomSlide>
    </>
  );
};

export default BankMain;
