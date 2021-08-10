import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { add_leads, kyc_request } from "../../../../api/profile";
import BottomSlide from "../../../../components/bottom-slide/BottomSlide";
import Button from "../../../../components/button/Button";
import BSHeader from "../bs-header/BSHeader";
import IdtyCIN from "./components/IdtyCIN";
import IdtyCompany from "./components/IdtyCompany";
import IdtyContact from "./components/IdtyContact";
import IdtyInfo from "./components/IdtyInfo";
import IdtyText from "./components/IdtyText";
import "./VerifyIdentity.css";

const VerifyIdentity = ({ idty, setIdty, data, setMobileFlow }) => {
  const history = useHistory();
  const [box, setBox] = useState("company");
  const [closeBSlider, setCloseBSlider] = useState(false);
  const [self, setSelf] = useState("indian");
  const [company, setCompany] = useState("indian-pvt-ltd");
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    country: "United States of America (USA)",
    countryCode: "",
    mobileNumber: 0,
  });

  const [idtyData, setIdtyData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    countryCode: "",
    mobileNumber: null,
    ext: null,
    cin: null,
  });

  const companySubmit = async () => {
    setLoading(true);
    if (self === "indian") {
      if (!data.emailVerified) {
        history.push({
          pathname: "/evar",
          state: { email: data.email },
        });
        setLoading(false);
      } else if (!data.mobileAdded) {
        setIdty(false);
        setMobileFlow({
          open: true,
          type: "mobile",
        });
        setLoading(false);
      } else if (!data.mobileVerified) {
        setIdty(false);
        setMobileFlow({
          open: true,
          type: "otp",
        });
        setLoading(false);
      } else {
        const response = await kyc_request();
        if (response.error) {
          alert(response.error);
          setLoading(false);
        } else {
          console.log(response.data);
          const { id, customerIdentifier, token } = response.data.data;
          localStorage.setItem(
            "digioObj",
            JSON.stringify({ id, customerIdentifier, token })
          );
          document.getElementById("rzp-button1").click();
          setLoading(false);
        }
      }
    } else if (self === "INDIVIDUAL_NRI" || self === "INDIVIDUAL_FOREIGN") {
      setBox("contact");
      setLoading(false);
    } else {
      setBox("info");
      setLoading(false);
    }
  };

  const contactSubmit = async () => {
    setLoading(true);
    const contact_data = { type: self, data: contactData };
    let leads_added = await add_leads(contact_data);
    if (leads_added.error) {
      alert(leads_added.error);
      setLoading(false);
    } else {
      console.log(leads_added.data);
      setBox("text");
      setLoading(false);
    }
  };

  const cinSubmit = async () => {
    setLoading(true);
    const idty_data = { type: "INDIVIDUAL_FOREIGN", data: idtyData };
    let leads_added2 = await add_leads(idty_data);
    if (leads_added2.error) {
      alert(leads_added2.error);
      setLoading(false);
    } else {
      console.log(leads_added2.data);
      setBox("text");
      setLoading(false);
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
          {box === "company" && <IdtyCompany self={self} setSelf={setSelf} />}
          {box === "contact" && (
            <IdtyContact
              setContactData={setContactData}
              contactData={contactData}
            />
          )}
          {box === "info" && (
            <IdtyInfo idtyData={idtyData} setIdtyData={setIdtyData} />
          )}
          {box === "cin" && (
            <IdtyCIN idtyData={idtyData} setIdtyData={setIdtyData} />
          )}
          {box === "text" && <IdtyText />}
          {box === "company" && (
            <Button
              text="DONE"
              click={() => companySubmit()}
              loading={loading}
            />
          )}
          {box === "contact" && (
            <Button
              text="DONE"
              click={() => contactSubmit()}
              loading={loading}
            />
          )}
          {box === "info" && (
            <Button text="DONE" click={() => setBox("cin")} loading={loading} />
          )}
          {box === "cin" && (
            <Button text="DONE" click={() => cinSubmit()} loading={loading} />
          )}
          {box === "text" && (
            <Button
              text="DONE"
              click={() => {
                setIdty(false);
                document.getElementById("rzp-button1").click();
              }}
            />
          )}
        </BottomSlide>
      )}
    </>
  );
};

export default VerifyIdentity;
