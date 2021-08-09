import React from "react";
import "./Completed.css";
import { Link } from "react-router-dom";
import Check from "../../../../Assets/imgs/check.svg";

const Completed = () => {
  return (
    <div className="profile__completed_wrapper">
      <div className="pcomp__item">
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">ID:</span>
          <span>123 456 7890 1234 5678</span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">Email:</span>
          <span>jonathanm@gmail.com</span>
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">Name:</span>
          <span>Name of individual / Company (As per PAN)</span>
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
          <span>Mobile for individuals /Mobile or landline for cos.</span>
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__item_label">Permanent Address:</span>
        <span>
          145 B Orchid Enclave, Winston Meadows, Upper Green street, Whitewoods,
          Mumbai - 400001.
          <br />
          City: Mumbai |State: Maharashtra | PIN: 400001
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__item_label">Current Address:</span>
        <span>
          145 B Orchid Enclave, Winston Meadows, Upper Green street, Whitewoods,
          Mumbai - 400001.
          <br />
          City: Mumbai |State: Maharashtra | PIN: 400001
        </span>
      </div>
      <div className="pcomp__item">
        <span className="pcomp__item_label">Legal Information</span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">PAN:</span>
          <span>
            AAAAA1111B{" "}
            <span className="pcomp__item_label">(DOB: 15/02/1987)</span>
          </span>
        </span>
        <span className="pcomp__subitem">
          <span className="pcomp__item_label">AADHAR:</span>
          <span>XXXXXXXX6991</span>
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
