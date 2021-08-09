import React, { useState } from "react";
import "./BottomSlide.css";

const BottomSlide = ({ children, closeBSlider, bottomSlide }) => {
  console.log(closeBSlider);
  return (
    <div className="backdrop">
      <div
        className={`bottom__slide ${!closeBSlider || bottomSlide && "open__bslide"
          }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSlide;
