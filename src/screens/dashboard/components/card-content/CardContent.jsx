import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import "./CardContent.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const CardContent = ({
  closingSoon,
  logo,
  badge1Style,
  badge2Style,
  badge1,
  badge2,
  title,
  sector,
  lkv,
  turnedInStyle,
  iconsBoxStyle,
}) => {
  return (
    <div className="card__content">
      <div className="card__header">
        <img className="ch__image" src={logo} />
        <div className="header__info">
          <div className="info__left">
            <span className="hi__title">{title}</span>
            <span className="hi__desc">Sector : {sector}</span>
            <span className="hi__desc">LKV : {lkv}</span>
          </div>
          <div className="info__right">
            <span
              className="hi__badge1"
              style={badge1Style ? badge1Style : null}
            >
              {badge1}
            </span>
            <span
              className="hi__badge2"
              style={badge2Style ? badge2Style : null}
            >
              <span>{badge2}</span>
              <ErrorOutlineIcon style={{ fontSize: "13px" }} />
            </span>
          </div>
        </div>
      </div>
      <div className="dbc__body">
        <div className="body__left">
          {" Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard".substr(
            0,
            88
          )}
          <Link className="learn__more">Learn More</Link>
        </div>
        <div className="body__right" style={iconsBoxStyle}>
          <div
            className="closing__soon"
            style={{ visibility: closingSoon ? "visible" : "hidden" }}
          >
            <AccessTimeIcon fontSize="small" />
            <span>Closing Soon</span>
          </div>
          <div className="br__icons">
            <span style={turnedInStyle ? turnedInStyle : null}>
              <TurnedInNotIcon />
            </span>
            <span>
              <ShareIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
