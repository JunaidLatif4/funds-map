import React from "react";
import Button from "../../../components/button/Button";
import BuyerInfo from "../Components/BuyInfo/BuyerInfo";
import "./Modified.css";

import { Link } from "react-router-dom";

const Modified = () => {
  return (
    <>
      <div className="modified__order">
        <BuyerInfo />

        <div className="mo__further">
          <p className="mo__para">
            You can now track the progress of your order in the{" "}
            <span>
              <Link>Order Tab.</Link>
            </span>
          </p>
        </div>
      </div>
      <Button text="DONE" />
    </>
  );
};

export default Modified;
