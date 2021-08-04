import React from "react";
import Toggle from "../toggle/Toggle";
import "./Appbar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import Notifications from "../../../../Assets/imgs/notification.svg";
import toggle from "../../../../Assets/imgs/toggle.svg";
import search from "../../../../Assets/imgs/search.svg";
import filter from "../../../../Assets/imgs/filter.svg";
const Appbar = () => {
  return (
    <div className="app__bar">
      <img src={toggle} className="ab__toggle_icon" />
      <div className="search__bar">
        <span className="bars__icon">
          <img src={search} className="ab__toggle_icon" />
        </span>
        <div className="search__box">
          <input type="text" className="search__input" placeholder="Search" />
          <img src={filter} className="ab__toggle_icon" />
        </div>
      </div>
      <span className="barf__icon">
        <img src={Notifications} />
        <span className="notif__count">2</span>
      </span>
    </div>
  );
};

export default Appbar;
