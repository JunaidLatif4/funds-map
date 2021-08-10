import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "../VerifyIdentity.css";

const IdtyCompany = ({ self, setSelf }) => {
  return (
    <div className="idtycomp__wrapper">
      <FormControl component="fieldset">
        <FormLabel component="legend" className="idtycomp__heading">
          I'm an:
        </FormLabel>
        <RadioGroup
          aria-label="self"
          name="self"
          className="idtycomp__body"
          value={self}
          onChange={(e) => setSelf(e.target.value)}
        >
          <FormControlLabel
            value="indian"
            control={<Radio />}
            label="Indvidual (Indian Resident)"
          />
          <FormControlLabel
            value="INDIVIDUAL_NRI"
            control={<Radio />}
            label="Individual (NRI - Non-Resident Indian)"
          />
          <FormControlLabel
            value="INDIVIDUAL_FOREIGN"
            control={<Radio />}
            label="Individual (Foreign National)"
          />
          <span component="legend" className="idtycomp__heading">
            I'm representing a/an:
          </span>
          <FormControlLabel
            value="indian-pvt-ltd"
            control={<Radio />}
            label="Indian Company (Pvt. Ltd.)"
          />
          <FormControlLabel
            value="indian-llp"
            control={<Radio />}
            label="Indian Company (LLP)"
          />
          <FormControlLabel
            value="indian-partnership"
            control={<Radio />}
            label="Indian Company (Partnership)"
          />
          <FormControlLabel
            value="indian-sole"
            control={<Radio />}
            label="Indian Company (Sole Proprietorship)"
          />
          <FormControlLabel
            value="non-indian"
            control={<Radio />}
            label="Non-Indian Company"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default IdtyCompany;
