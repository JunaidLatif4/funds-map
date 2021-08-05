import React from "react";
import { useState } from "react";
import './Mnumber.css'
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";

const Mnumber = () => {
    const [value, setValue] = useState()

    
  const onChange = (event) =>{
    setValue(event.target.value)
}
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
