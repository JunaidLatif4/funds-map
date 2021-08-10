import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Mnumber from "../../../../../components/Mob-num input/Mnumber";
import { Countries } from "./CountriesList";

const IdtyContact = ({ contactData, setContactData }) => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setContactData((preVal) => ({
      ...preVal,
      countryCode: phone?.slice(0, 3),
      mobileNumber: phone?.slice(3),
    }));
  }, [phone]);

  return (
    <div className="idtycon__wrapper">
      <FormControl className="iw__country_dropdown">
        <InputLabel id="demo-simple-select-label">
          Select your country of residence
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue="United States of America (USA)"
          value={contactData.country}
          onChange={(e) =>
            setContactData((preVal) => ({ ...preVal, country: e.target.val }))
          }
        >
          {Countries.map((country) => (
            <MenuItem value={country.name}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="idtycon__number_box">
        <span className="idtycon__number_label">
          Enter your cell phone number
        </span>
        <Mnumber setMobile={setPhone} />
      </div>
    </div>
  );
};

export default IdtyContact;
