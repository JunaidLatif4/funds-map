import React from "react";
import "./TopBar.css";
import Notifications from "../../../../Assets/imgs/notification.svg";
import toggle from "../../../../Assets/imgs/toggle.svg";

const TopBar = () => {
  return (
    <div className="topbar__container">
      <img src={toggle} className="ab__toggle_icon" />
      <span className="tb__icon">
        <img src={Notifications} />
        <span className="tb__notif_count">2</span>
      </span>
    </div>
  );
};

export default TopBar;
