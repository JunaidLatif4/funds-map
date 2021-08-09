import React from "react";
import Mnumber from "../../../../../components/Mob-num input/Mnumber";

const IdtyInfo = () => {
  return (
    <div className="idtyinfo__wrapper">
      <form>
        <span className="idtyinfo__form_item">
          <span className="idtyinfo__input_label">Enter your name</span>
          <span className="idtyinfo__input_item">
            <span className="idtyinfo__input_wrapper">
              {" "}
              <input
                className="idtyinfo__input"
                type="text"
                placeholder="First Name"
              />
            </span>
            <span className="idtyinfo__input_wrapper">
              <input
                className="idtyinfo__input"
                type="text"
                placeholder="Last Name"
              />
            </span>
          </span>
        </span>

        <span className="idtyinfo__form_item">
          <span className="idtyinfo__input_label">
            Enter your company's name
          </span>
          <span className="idtyinfo__input_wrapper">
            <input
              className="idtyinfo__input"
              type="text"
              placeholder="Company's name"
            />
          </span>
        </span>
        <span className="idtyinfo__form_item">
          <span className="idtyinfo__input_label">
            Enter your direct line / cell phone number
          </span>
          <span className="idtyinfo__input_item">
            <span className="idtyinfo__input_wrapper">
              <Mnumber />
            </span>
            <span className="idtyinfo__input_wrapper">
              <input
                className="idtyinfo__input"
                type="text"
                placeholder="Ext. optional"
              />
            </span>
          </span>
        </span>
      </form>
    </div>
  );
};

export default IdtyInfo;
