import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { kyc_request } from "../../../../api/profile";
import BottomSlide from "../../../../components/bottom-slide/BottomSlide";
import Button from "../../../../components/button/Button";
import BSHeader from "../bs-header/BSHeader";
import IdtyCIN from "./components/IdtyCIN";
import IdtyCompany from "./components/IdtyCompany";
import IdtyContact from "./components/IdtyContact";
import IdtyInfo from "./components/IdtyInfo";
import IdtyText from "./components/IdtyText";
import "./VerifyIdentity.css";

const VerifyIdentity = ({ idty, setIdty }) => {
  const [box, setBox] = useState("company");
  const [closeBSlider, setCloseBSlider] = useState(false);
  const [self, setSelf] = useState("indian");
  const [company, setCompany] = useState("indian-pvt-ltd");
  const [loaded, setLoaded] = useState(false);

  const companySubmit = async () => {
    if (self === "indian") {
      const response = await kyc_request();
      if (response.error) {
        alert(response.error);
      } else {
        console.log(response.data);
        const { id, customerIdentifier, token } = response.data.data;
        localStorage.setItem(
          "digioObj",
          JSON.stringify({ id, customerIdentifier, token })
        );
        document.getElementById("rzp-button1").click();
      }
    } else {
      alert("This is not an indian company");
      console.log(company);
    }
  };

  return (
    <>
      {idty && (
        <BottomSlide>
          <div className="verify__indentity">
            <BSHeader
              text="Verify Identity"
              setCloseBSlider={(open) => setIdty(!open)}
            />
          </div>
          {box === "company" && (
            <IdtyCompany
              self={self}
              setSelf={setSelf}
              company={company}
              setCompany={setCompany}
            />
          )}
          {box === "contact" && <IdtyContact />}
          {box === "info" && <IdtyInfo />}
          {box === "cin" && <IdtyCIN />}
          {box === "text" && <IdtyText />}
          {box === "company" && (
            <Button text="DONE" click={() => companySubmit()} />
          )}
          {box === "contact" && (
            <Button text="DONE" click={() => setBox("info")} />
          )}
          {box === "info" && <Button text="DONE" click={() => setBox("cin")} />}
          {box === "cin" && <Button text="DONE" click={() => setBox("text")} />}
          {box === "text" && (
            <Button text="DONE" click={() => setBox("company")} />
          )}
        </BottomSlide>
      )}
    </>
  );
};

export default VerifyIdentity;
