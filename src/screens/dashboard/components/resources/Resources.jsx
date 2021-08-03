import React from "react";
import "./Resources.css";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="resources__box">
      <span className="resources__heading">Resources</span>
      <span className="resources__desc">
        Download/Share bundle of analytical resources like annual Reports,
        Corporate Presentations, Pitch Decks etc.
      </span>
      <div className="resources__buttons">
        <span>
          <SystemUpdateAltIcon className="resources__icon" />
          <Link className="resources__text">Download</Link>
        </span>
        <span>
          <ShareIcon className="resources__icon" />
          <Link className="resources__text">Share</Link>
        </span>
      </div>
    </div>
  );
};

export default Resources;
