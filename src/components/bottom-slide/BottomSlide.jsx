import React, { useState } from "react";
import "./BottomSlide.css";

const BottomSlide = ({ children }) => {
  return (
    <div className="backdrop">
      <div
        className={`bottom__slide open__bslide `}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSlide;
