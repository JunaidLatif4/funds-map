import React from "react";
import Button from "../../../../components/button/Button";
import "./IdentityInfo.css";

const IndentityInfo = ({ setIdty, data }) => {
  return (
    <>
      {data.userId && data.email ? (
        <div className="identity__info">
          <span className="ii__item">
            <span className="ii__title">ID: &nbsp;</span>
            <span className="ii__desc">{data.userId}</span>
          </span>
          <span className="ii__item">
            <span className="ii__title">Email: &nbsp;</span>
            <span className="ii__desc">{data.email}</span>
          </span>
          <span className="ii__item">
            <span className="ii__title">Cell: &nbsp;</span>
            <span className="ii__desc">{`${data.countryCode} ${data.mobileNumber}`}</span>
          </span>
          <Button text="Verify Identity" click={() => setIdty(true)} />
        </div>
      ) : (
        <>
          <h3 className="ii__nothing_found">Nothing to show</h3>
        </>
      )}
    </>
  );
};

export default IndentityInfo;
