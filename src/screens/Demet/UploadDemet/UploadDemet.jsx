import React from "react";
import upload from "../../../Assets/imgs/upload.svg";

const UploadDemet = () => {
  return (
    <>
      <div className="psignup__confirm">
        <div className="psignup__checkbox">
          <img src={upload} alt="" />
        </div>
        <div className="Psignup__confirmline">
          I confirm that the above bank account belongs to me.
        </div>
      </div>
    </>
  );
};

export default UploadDemet;
