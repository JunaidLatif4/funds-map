import React from "react";

const IdtyText = () => {
  return (
    <div className="idty__text_wrapper">
      <p className="idty__text_item">
        Currently we only support indain & NRI individuals for online identity
        verification
      </p>
      <p className="idty__text_item">
        For all other types of entities we conduct an offline identity
        verification
      </p>
      <p className="idty__text_item">
        we will run background identity checks on your entity & if it qualifies
        our checks we will get in touch with you on the contact details provided
        by you
      </p>
      <p className="idty__text_item">
        Alternatively if you wish to expedite the process you can choose to
        contineu as an individual to complete the identity verification process
        online
      </p>
    </div>
  );
};

export default IdtyText;
