import React from "react";
import { useState, useEffect } from "react";
import "./Mnumber.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Mnumber = ({ setMobile }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setMobile && setMobile(value);
  }, [value]);
  return (
    <>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default Mnumber;
