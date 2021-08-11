import React, { useState } from "react";
import "./BottomSlide.css";
import CloseIcon from "@material-ui/icons/Close";

const BottomSlide = ({ children, text, bottomSlide }) => {
  const [closeIt, setCloseIt] = useState(false);
  return (
    <div className="backdrop" style={closeIt ? { display: "none" } : null}>

      <div
        className={`bottom__slide open__bslide `}
      >
        <div className="bottom__slide_close">
          <CloseIcon className="bsh__icon" onClick={bottomSlide ? bottomSlide : () => setCloseIt(true)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomSlide;
