import React from "react";
import "./PopularSearches.css";
import ImageSearchSharpIcon from "@material-ui/icons/ImageSearchSharp";

const PopularSearches = () => {
  return (
    <div className="popular__searches">
      <ImageSearchSharpIcon className="ps__icon" />
      <p className="ps__title">Popular Searches</p>
      <div className="ps__box">
        <span>Pista Blooms</span>
        <span>EVs</span>
        <span>Dundo</span>
        <span>Pista Blooms</span>
        <span>Dundo</span>
        <span>EVs</span>
      </div>
    </div>
  );
};

export default PopularSearches;
