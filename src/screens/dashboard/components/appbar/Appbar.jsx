import React from "react";
import Toggle from "../toggle/Toggle";
import "./Appbar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
const Appbar = () => {
  return (
    <div className="app__bar">
      <Toggle />
      <div className="search__bar">
        <span className="bars__icon">
          <SearchIcon fontSize="large" />
        </span>
        <div className="search__box">
          <input type="text" className="search__input" placeholder="Search" />
          <Toggle />
        </div>
      </div>
      <span className="barf__icon">
        <NotificationsNoneIcon fontSize="large" />
      </span>
    </div>
  );
};

export default Appbar;
