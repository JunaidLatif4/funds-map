import React from "react";
import upload from "../../../Assets/imgs/upload.svg";
import { Link } from "react-router-dom";
import "./UploadDemet.css";

const UploadDemet = ({ setPdf_color, verify_upload }) => {
  let data = new FormData();

  const handelupload = async (file) => {
    await data.append('file', file);
    verify_upload(data);
  }

  return (
    <>
      <div className="updemet__container" style={{ padding: "0 20px" }}>
        <label for='demat_input' className="updemat__header">
          <input id='demat_input' type='file' accept='application/pdf' onChange={(e) => handelupload(e.target.files[0])} className='demat_pdf' />
          <div className="updemat__img">
            <img
              style={{ width: "40px", height: "36px", marginRight: "6px" }}
              src={upload}
              alt=""
            />
          </div>
          <span className="updemat__headerpara">Upload CMR / CML</span>
        </label>
        <div className="align_center">
          <div
            className="updemet__para2"
            style={{ fontSize: "11px", color: "#8a8a8a" }}
          >
            You can get your CMR / CML from your stock broker / depository
            participant. <Link> Click here to know more</Link>
          </div></div>
      </div>
    </>
  );
};

export default UploadDemet;
