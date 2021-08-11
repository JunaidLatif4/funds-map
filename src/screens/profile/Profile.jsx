import React, { useState, useEffect } from "react";
import DropCard from "./components/drop-card/DropCard";
import idCard from "../../Assets/imgs/id-card.svg";
import bankLine from "../../Assets/imgs/bank_line.svg";
import profile from "../../Assets/imgs/profile.svg";
import TopBar from "./components/top-bar/TopBar";
import "./Profile.css";
import ErrorBox from "./components/error-box/ErrorBox";
import AddPhone from "./components/add-phone/AddPhone";
import {
  mobile_verification,
  profile_details,
  verify_otp,
} from "../../api/profile";
import { useHistory } from "react-router-dom";
import { add_mobile } from "../../api/auth";
import BankMain from "../AddBank/Bankinfo-popup/BankMain.jsx";
import MainDemet from "../Demet/mainDemet";
import VerifyIdentity from "./components/verify-identity/VerifyIdentity.js";
import { get_banks } from '../../api/profile'

const Profile = () => {
  const history = useHistory();
  const [addMobile, setAddMobile] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [verifyMobile, setVerifyMobile] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [bank, setBank] = useState(false);
  const [addedBanks, setAddedbanks] = useState([])
  const [demat, setDemat] = useState(false);
  const [idty, setIdty] = useState(false);
  const [step, setStep] = useState("step1");
  const [stepD, setStepD] = useState("step1");
  const [profileData, setProfileData] = useState([]);
  const [username, setUsername] = useState("");
  const [box, setBox] = useState({
    open: false,
    type: "mobile",
  });

  const get_banks1 = async () => {
    const banks = await get_banks();
    if (banks.error) {
      alert("error in getting banks")
    }
    else {
      console.log(banks)
      setAddedbanks(banks.data?.data)
    }
  }

  // const setdemat = (p) => {
  //   console.log("vvv", demat)
  //   setDemat(p)
  // }
  const get_details = async () => {
    const details = await profile_details();
    if (details.error) {
      alert(details.error);
    } else {
      if (details.data) {
        const {
          userName,
          email,
          emailVerified,
          identityCheckDone,
          mobileAdded,
          mobileVerified,
        } = details.data.data;
        setProfileData(details.data.data);
        setUsername(userName);
        setCompleted(identityCheckDone);
      }
    }
  };

  useEffect(() => {
    addMobile &&
      setBox({
        open: true,
        type: "mobile",
      });
    verifyMobile &&
      setBox({
        open: true,
        type: "otp",
      });
  }, [addMobile, verifyMobile]);

  useEffect(() => {
    get_details();
  }, []);

  useEffect(() => {
    get_banks1();
  }, []);

  return (
    <div className="profile__screen">
      <TopBar />
      <div className="profile__header">
        <span className="pf__header_left">Profile</span>
        <span className="pf__header_right">
          <span className="pf__acc_status">Account Status:</span>
          <span className="pf__acc_info">
            Active - Awaiting Profile Completion
          </span>
        </span>
      </div>

      <div className="profile__body">
        <DropCard
          icon={idCard}
          text="identity"
          body={completed ? "completed" : "identity"}
          setIdty={setIdty}
          data={profileData}
          open={true}
          basicInfo={profileData}
        />
        <DropCard icon={bankLine} text="Bank" body="bank" setBank={setBank} setDemat={setDemat} banks={addedBanks} />
        <DropCard icon={profile} text="Demat Details" body="demat" setDemat={setDemat} setBank={setBank} />
      </div>
      <ErrorBox />
      {box?.open && (
        <AddPhone
          type={box?.type}
          setAddPhone={setBox}
          addPhone={box?.open}
          username={username}
        />
      )}
      {bank && (
        <BankMain setBank={setBank} bank={bank} step={step} setStep={setStep} />
      )}
      {demat && (
        <MainDemet
          setDemat={setDemat}
          demat={demat}
          stepD={stepD}
          setStepD={setStepD}
        />
      )}
      {idty && (
        <VerifyIdentity
          setIdty={setIdty}
          idty={idty}
          data={profileData}
          setMobileFlow={setBox}
        />
      )}
    </div>
  );
};

export default Profile;
