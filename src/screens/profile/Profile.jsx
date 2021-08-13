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
  get_demat,
} from "../../api/profile";
import { useHistory } from "react-router-dom";
import { add_mobile } from "../../api/auth";
import BankMain from "../AddBank/Bankinfo-popup/BankMain.jsx";
import MainDemet from "../Demet/mainDemet";
import VerifyIdentity from "./components/verify-identity/VerifyIdentity.js";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { get_banks } from "../../api/profile";
import { get_stateDemats } from "../../store/Demat";
import { get_stateBanks } from "../../store/Bank";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [addMobile, setAddMobile] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [verifyMobile, setVerifyMobile] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [bank, setBank] = useState(false);
  const [addedBanks, setAddedbanks] = useState([]);
  const [addedDemat, setaddedDemats] = useState([]);
  const [demat, setDemat] = useState(false);
  const [idty, setIdty] = useState(false);
  const [step, setStep] = useState("step1");
  const [stepD, setStepD] = useState("step1");
  const [profileData, setProfileData] = useState([]);
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [box, setBox] = useState({
    open: false,
    type: "mobile",
  });
  const stateToken = useSelector((state) => state.user.token);
  const stateDemat = useSelector((state) => state.demat);
  const stateBank = useSelector((state) => state.bank);

  const get_banks1 = async () => {
    const banks = await get_banks();
    if (banks.error) {
      toast.error(banks.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log(banks);
      dispatch(get_stateBanks(banks?.data.data));
      setAddedbanks(banks.data?.data);
    }
  };

  const get_demat1 = async () => {
    const addeddemat = await get_demat();
    if (addeddemat.error) {
      toast.error(addeddemat.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log(addeddemat);
      setaddedDemats(addeddemat.data?.data);
      dispatch(get_stateDemats(addeddemat?.data.data));
    }
  };

  const get_details = async () => {
    const details = await profile_details(stateToken);
    console.log(details);
    if (details.error) {
      toast.error(details.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
        setDisabled(!identityCheckDone);
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
    get_demat1();
  }, []);

  return (
    <div className="profile__screen">
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
        <DropCard
          icon={bankLine}
          text="Bank"
          body="bank"
          setBank={setBank}
          setDemat={setDemat}
          banks={stateBank}
          disabled={disabled}
        />
        <DropCard
          icon={profile}
          text="Demat Details"
          body="demat"
          setDemat={setDemat}
          setBank={setBank}
          demats={stateDemat}
          disabled={disabled}
        />
      </div>
      {disabled && <ErrorBox />}
      {box?.open && (
        <AddPhone
          type={box?.type}
          setAddPhone={setBox}
          addPhone={box?.open}
          username={username}
        />
      )}
      {bank && (
        <BankMain
          get_banks1={get_banks1}
          setBank={setBank}
          bank={bank}
          step={step}
          setStep={setStep}
        />
      )}
      {demat && (
        <MainDemet
          setDemat={setDemat}
          demat={demat}
          stepD={stepD}
          setStepD={setStepD}
          get_demat1={get_demat1}
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
