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

const Profile = () => {
  const history = useHistory();
  const [addMobile, setAddMobile] = useState(false);
  const [verifyMobile, setVerifyMobile] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [box, setBox] = useState({
    open: true,
    type: "mobile",
  });

  const get_details = async () => {
    const details = await profile_details();
    if (details.error) {
      alert(details.error);
    } else {
      const {
        userName,
        email,
        emailVerified,
        identityCheckDone,
        mobileAdded,
        mobileVerified,
      } = details.data.data;
      setUsername(userName);
      if (!emailVerified) {
        history.push({
          pathname: "/evar",
          state: { email },
        });
      }
      if (!mobileAdded) {
        setAddMobile(true);
      }
      if (!mobileVerified) {
        setVerifyMobile(true);
      }
    }
  };

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
        setBox({
          open: true,
          type: "otp",
        });
      }
    }
  };

  const otp_verification = async () => {
    const verified = await verify_otp(otp);
    if (verified.error) {
      setBox({});
      setBox({
        open: true,
        type: "wrongotp",
      });
    } else {
      setBox({});
      setBox({
        open: true,
        type: "whatsapp",
      });
    }
  };
  let clickFunc = add_phone;
  useEffect(() => {
    clickFunc = box.type === "mobile" ? add_phone : null;
  }, [box?.type]);

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
        <DropCard icon={idCard} text="identity" body="identity" />
        <DropCard icon={bankLine} text="Bank" body="bank" />
        <DropCard icon={profile} text="Demat Details" body="demat" />
      </div>
      <ErrorBox />
      {box?.open && (
        <AddPhone type={box?.type} setMobile={setMobile} click={clickFunc} />
      )}
    </div>
  );
};

export default Profile;
