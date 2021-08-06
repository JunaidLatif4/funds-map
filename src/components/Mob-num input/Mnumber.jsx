import React from "react";
import { useState } from "react";
import "./Mnumber.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useEffect } from "react";

const Mnumber = ({ setMobile }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setMobile && setMobile(value);
  }, [value]);
  return (
    <>
      <PhoneInput
        style={{ padding: "20px 0px", color: "red" }}
        international
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default Mnumber;
