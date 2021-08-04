import React from "react";
import DropCard from "./components/drop-card/DropCard";
import idCard from "../../Assets/imgs/id-card.svg";
import bankLine from "../../Assets/imgs/bank_line.svg";
import profile from "../../Assets/imgs/profile.svg";
import TopBar from "./components/top-bar/TopBar";
import "./Profile.css";
import ErrorBox from "./components/error-box/ErrorBox";
import BottomSlide from "../../components/bottom-slide/BottomSlide";

const Profile = () => {
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
      <BottomSlide />
    </div>
  );
};

export default Profile;
