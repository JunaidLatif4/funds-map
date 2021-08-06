import React from "react";
import "./AddedBank.css";

const AddedBank = () => {
  return (
    <>
      <div className="addedbank__container">
        <div className="addedbank__header">
          <div className="addedbank__left">1</div>
          <div className="addedbank__right">
            <div className="user__info">
              <div className="user__w-name">
                <p className="ab__w-name">Name</p>
                <p className="ab__delbtn">Delete</p>
              </div>
              <div className="ab__name">Jonathan M Aledanders</div>
              <div className="user__w-name">
                <p className="ab__w-name">Bank</p>
              </div>
              <div className="ab__name">American Express</div>
              <div className="user__w-name">
                <p className="ab__w-name">Branch</p>
              </div>
              <div className="ab__name">Fort, George Avenue 23</div>
              <div className="user__w-name">
                <p className="ab__w-name">Account Number</p>
              </div>
              <div className="ab__name">XXXX - XXXX - XXXX - 1234</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddedBank;
