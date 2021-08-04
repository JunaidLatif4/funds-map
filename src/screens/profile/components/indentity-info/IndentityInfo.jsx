import React from "react";
import Button from "../../../../components/button/Button";
import "./IdentityInfo.css";

const IndentityInfo = () => {
  return (
    <div className="identity__info">
      <span className="ii__item">
        <span className="ii__title">ID: &nbsp;</span>
        <span className="ii__desc">123 456 7890 1234 5678</span>
      </span>
      <span className="ii__item">
        <span className="ii__title">Email: &nbsp;</span>
        <span className="ii__desc">example1234@gmail.com</span>
      </span>
      <span className="ii__item">
        <span className="ii__title">Cell: &nbsp;</span>
        <span className="ii__desc">+91 9985478569</span>
      </span>
      <Button text="Verify Identity" />
    </div>
  );
};

export default IndentityInfo;
