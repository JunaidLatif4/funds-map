import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import "./DbCard.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Link } from "react-router-dom";
import CardContent from "../card-content/CardContent";
import MediaBox from "../media-box/MediaBox";
import Highlights from "../highlights/Highlights";
import Slide from "../slide/Slide";
import Resources from "../resources/Resources";
import Funding from "../funding/Funding";
import About from "../about/About";
const DbCard = ({
  image,
  logo,
  title,
  sector,
  lkv,
  badge1,
  badge2,
  badge1Style,
  badge2Style,
  closingSoon,
  highlights,
  video,
  turnedInStyle,
  iconsBoxStyle,
  slide,
  detailsBox,
  setCurrentBox,
}) => {
  return (
    <div className="db__card">
      {video && <MediaBox video={video} type="video/mp4" />}
      {image && <MediaBox image={image} />}
      <CardContent
        logo={logo}
        title={title}
        sector={sector}
        lkv={lkv}
        badge1={badge1}
        badge2={badge2}
        badge1Style={badge1Style}
        badge2Style={badge2Style}
        closingSoon={closingSoon}
        turnedInStyle={turnedInStyle}
        iconsBoxStyle={iconsBoxStyle}
      />
      {slide && <Slide items={slide} setCurrentBox={setCurrentBox} />}
      {!highlights || detailsBox !== "about" ? null : <Highlights />}
      {detailsBox === "about" && <About />}
      {detailsBox === "funding" && <Funding />}
      {detailsBox === "resources" && <Resources />}
    </div>
  );
};

export default DbCard;
