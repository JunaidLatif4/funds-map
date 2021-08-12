import React, { useState, useEffect } from "react";
import "./Bankinfo.css";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/button/Button";
import BottomSlide from "../../../components/bottom-slide/BottomSlide";
import BSHeader from "../../profile/components/bs-header/BSHeader";
import Bankinfo from "./Bankinfo";
import Bankdata from "../Bankinfo-data/Bankdata";
import BankSuccess from "../Banksuccess/bsuccess";
import {
  ifsc_validator,
  otp_generate,
  bank_validator,
  bank_save,
} from "../../../api/profile";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const BankMain = ({ bank, setBank, step, setStep }) => {
  const [ifsc, setIfsc] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [data_for_step2, setdata_for_step2] = useState({});
  const [validationkey, setValidationkey] = useState(null);
  const [bankres, setbankres] = useState(null);
  const stateToken = useSelector((state) => state.user.token);

  const [otp, setOtp] = useState("");
  let data_for_step3 = {};

  const handleStep1 = async () => {
    let ifsc_v = await ifsc_validator(ifsc, stateToken);
    if (ifsc_v.error) {
      toast.error("Failed ifsc validation", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log(ifsc_v);
      let bank = await bank_validator(ifsc, accountnumber, stateToken);
      setbankres(bank);
      if (bank.error) {
        toast.error("Bank validation Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setValidationkey(bank.data.data.validationKey);
        console.log(bank);
        let otp = await otp_generate(
          validationkey,
          ifsc,
          accountnumber,
          stateToken
        );
        if (otp.error) {
          toast.error("OTP is not generated", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          console.log(otp);
          setdata_for_step2({
            ac: accountnumber,
            bankName: bank.data?.data?.bankName,
            bankBranch: bank.data?.data?.branch,
            accountHolderName: bank.data?.data?.accountHolderName,
            validationkey: validationkey,
            ifsc: ifsc,
          });
          console.log(data_for_step2);
          setStep("step2");
        }
      }
    }
  };

  const handleStep2 = async () => {
    let save_Account = await bank_save(
      otp,
      validationkey,
      bankres.data?.data?.accountHolderName,
      bankres.data?.data?.bankName,
      accountnumber,
      ifsc,
      stateToken
    );
    console.log(save_Account);
    if (save_Account.error) {
      toast.error("Bank not saved", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setStep("step3");
    }
  };

  const handleStep3 = () => {
    setStep("step1");
  };

  return (
    <>
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
      <BottomSlide closeBSlider={bank}>
        <BSHeader text="Add Bank" setCloseBSlider={() => setBank(false)} />
        {step == "step1" && (
          <Bankinfo setIfsc={setIfsc} setAccountnumber={setAccountnumber} />
        )}
        {step == "step2" && (
          <Bankdata data_for_step2={data_for_step2} setOtp={setOtp} />
        )}
        {step == "step3" && <BankSuccess data_for_step3 />}

        {step == "step1" && (
          <Button click={() => handleStep1()} text="VERIFY BANK ACCOUNT" />
        )}
        {step == "step2" && (
          <Button click={() => handleStep2()} text="ADD BANK ACCOUNT" />
        )}
        {step == "step3" && <Button click={() => handleStep3()} text="DONE" />}
      </BottomSlide>
    </>
  );
};

export default BankMain;
