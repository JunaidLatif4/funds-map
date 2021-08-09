import React from "react";

const IdtyCIN = ({ idtyData, setIdtyData }) => {
  return (
    <div className="idtycin__wrapper">
      <span className="idtycin__form_item">
        <span className="idtycin__input_label">
          Enter CIN (Corporate Identity Number)
        </span>
        <span className="idtycin__input_wrapper">
          <input
            className="idtycin__input"
            type="text"
            placeholder="CIN"
            value={idtyData.cin}
            onChange={(e) =>
              setIdtyData((preVal) => ({
                ...preVal,
                cin: e.target.value,
              }))
            }
          />
        </span>
      </span>
      <div className="idtycin__info_box">
        <span className="idtycin__info_heading">
          Don't know your company's CIN?
        </span>
        <p className="idtycin__info_desc">
          you can find your company's CIN as follows:
        </p>
        <p className="idtycin__info_desc">
          1) Goto <a href="https://www.zaubacorp.com">www.zaubacorp.com</a> and
          search the name of your company
        </p>
        <p className="idtycin__info_desc">
          2) Find the CIN under the company details tab.
        </p>
      </div>
    </div>
  );
};

export default IdtyCIN;
