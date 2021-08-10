import React, { useState, useEffect } from "react";
import "./Bankinfo.css";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/button/Button";
import BottomSlide from "../../../components/bottom-slide/BottomSlide";
import BSHeader from "../../profile/components/bs-header/BSHeader";
import Bankinfo from "./BankInfo";
import Bankdata from "../Bankinfo-data/Bankdata";
import BankSuccess from "../Banksuccess/bsuccess"

const BankMain = ({ bank, setBank, step, setStep }) => {


  const handleStep1 = () => {
    setStep("step2")
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
        {step == "step1" && <Bankinfo />}
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
