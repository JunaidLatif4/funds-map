import React, { useEffect, useState } from "react";
import "./Completed.css";
import { Link } from "react-router-dom";
import Check from "../../../../Assets/imgs/check.svg";
import { adhar_details, pan_details } from "../../../../api/profile";

const Completed = ({ basicInfo }) => {
  const [adharDetails, setAdharDetails] = useState("");
  const [panDetails, setPanDetails] = useState("");
  const get_adhar = async () => {
    let response = await adhar_details();
    if (response.error) {
      alert(response.error);
    } else {
      console.log(response.data);
      setAdharDetails(response.data.data);
    }
  };
  const get_pan = async () => {
    let response = await pan_details();
    if (response.error) {
      alert(response.error);
    } else {
      console.log(response.data);
      setPanDetails(response.data.data);
    }
  };

  useEffect(() => {
    get_adhar();
    get_pan();
  }, []);

  return (
    <div className="profile__completed_wrapper">
      <div className="pcomp__item">
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">ID:</span>
          <span>{basicInfo.id}</span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">Email:</span>
          <span>{basicInfo.email}</span>
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">Name:</span>
          <span>{panDetails.name}</span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">Status:</span>
          <span>individual (Indian Resident)</span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">Contact Person:</span>
          <span>Name of person (Only for Company)</span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">Phone:</span>
          <span>{basicInfo.mobileNumber}</span>
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__item_label">Permanent Address:</span>
        <span>
          {/* 145 B Orchid Enclave, Winston Meadows, Upper Green street, Whitewoods,
          Mumbai - 400001.
          <br />
          City: Mumbai |State: Maharashtra | PIN: 400001 */}
          {adharDetails && adharDetails.permanentAddress.address}
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__item_label">Current Address:</span>
        <span>
          {/* 145 B Orchid Enclave, Winston Meadows, Upper Green street, Whitewoods,
          Mumbai - 400001.
          <br />
          City: Mumbai |State: Maharashtra | PIN: 400001 */}
          {adharDetails && adharDetails.currentAddress.address}
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__item_label">Legal Information</span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">PAN:</span>
          <span>
            {panDetails && panDetails.panId}
            <span className="pcomp__item_label">
              (DOB: {panDetails && panDetails.dob.replace("-", "/")})
            </span>
          </span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">AADHAR:</span>
          <span>{adharDetails && adharDetails.aadhaarId}</span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">CIN:</span>
          <span>U67120MH1298PTC116967 </span>
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__item_label">
          Documented proofs of verification
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__badge">
            <span className="pcomp__badge_num">
              {" "}
              <img src={Check} className="pcomp__badge_verified" />1
            </span>
          </span>
          <span className="pcomp__badge">
            <span className="pcomp__badge_num">2</span>
            <span className="pcomp__badge_notVerified">
              waiting verification
            </span>
          </span>
        </span>
      </div>
      <div className="pcomp__bottom">
        <Link>Edit Information</Link>
      </div>
    </div>
  );
};

export default Completed;
