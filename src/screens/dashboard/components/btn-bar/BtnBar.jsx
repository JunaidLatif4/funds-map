import React from "react";
import "./BtnBar.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";
const BtnBar = () => {
  const handleUpload = () => {};
  return (
    <div className="btn__bar">
      <div className="bb__left">
        <label for="upload_logo" className="ul__btn">
          <input type="file" id="upload_logo" onChange={handleUpload} />
          <CloudUploadIcon />
          <span>Upload Your Logo</span>
        </label>
      </div>
      <div className="bb__right">
        <Link to="/dashboard" className="bbr__invite">
          Invite Clients to my website
        </Link>
      </div>
    </div>
  );
};

export default BtnBar;
