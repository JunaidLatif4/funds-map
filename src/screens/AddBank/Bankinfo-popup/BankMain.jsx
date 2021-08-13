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
  test_signin,
} from "../../../api/profile";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const BankMain = ({ bank, setBank, step, setStep, get_banks1 }) => {
  const [ifsc, setIfsc] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [data_for_step2, setdata_for_step2] = useState({});
  const [validationkey, setValidationkey] = useState(null);
  const [bankres, setbankres] = useState(null);
  const [ifsc_res, setifsc_res] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const token = useSelector((state) => state.user.token);

  const [otp, setOtp] = useState("");
  let data_for_step3 = {};

  const handleStep1 = async () => {
    setLoading(true);
    let bank = await bank_validator(ifsc, accountnumber);
    setbankres(bank);
    if (bank.error) {
      toast.error(bank.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    } else {
      setValidationkey(bank.data.data.validationKey);
      console.log(bank);
      let otp = await otp_generate(validationkey, ifsc, accountnumber);
      if (otp.error) {
        toast.error(otp.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
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
        setLoading(false);
        setStep("step2");
      }
    }
  };

  const handel_ifsc = async (val) => {
    setIfsc(val);

    if (val?.length == 11) {
      setLoadingData(true);
      console.log(token);
      let ifsc_v = await ifsc_validator(val, token);
      if (ifsc_v.error) {
        toast.error(ifsc_v.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoadingData(false);
      } else {
        setifsc_res(ifsc_v?.data?.data);
        setLoadingData(false);
        console.log(ifsc_v);
      }
    }
  };

  const handleStep2 = async () => {
    setLoading(true);
    let save_Account = await bank_save(
      otp,
      validationkey,
      bankres.data?.data?.accountHolderName,
      bankres.data?.data?.bankName,
      accountnumber,
      ifsc
    );
    console.log(save_Account);
    if (save_Account.error) {
      setLoading(false);
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
      setLoading(false);
      setStep("step3");
    }
  };

  const handleStep3 = () => {
    get_banks1();
    setStep("step1");
    setBank(false);
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
          <Bankinfo
            setIfsc={setIfsc}
            setAccountnumber={setAccountnumber}
            ifsc={ifsc}
            handel_ifsc={handel_ifsc}
            ifsc_res={ifsc_res}
            loadingData={loadingData}
          />
        )}
        {step == "step2" && (
          <Bankdata data_for_step2={data_for_step2} setOtp={setOtp} />
        )}
        {step == "step3" && <BankSuccess data_for_step3 />}

        {step == "step1" && (
          <Button
            click={() => handleStep1()}
            text="VERIFY BANK ACCOUNT"
            loading={loading}
          />
        )}
        {step == "step2" && (
          <Button
            click={() => handleStep2()}
            text="ADD BANK ACCOUNT"
            loading={loading}
          />
        )}
        {step == "step3" && (
          <Button click={() => handleStep3()} text="DONE" loading={loading} />
        )}
      </BottomSlide>
    </>
  );
};

export default BankMain;
