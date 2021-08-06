import React from "react";
import upload from "../../../Assets/imgs/upload.svg";
import { Link } from "react-router-dom";
import "./UploadDemet.css";

const UploadDemet = () => {
  return (
    <>
      <div className="updemet__container" style={{ padding: "0 20px" }}>
        <div className="updemat__header">
          <div className="updemat__img">
            <img
              style={{ width: "40px", height: "36px", marginRight: "6px" }}
              src={upload}
              alt=""
            />
          </div>
          <Link className="updemat__headerpara">Upload CMR / CML</Link>
        </div>

        <div
          className="updemet__para2"
          style={{ fontSize: "11px", color: "#8a8a8a" }}
        >
          You can get your CMR / CML from your stock broker / depository
          participant. <Link> Click here to know more</Link>
        </div>
      </div>
    </>
  );
};

export default UploadDemet;
