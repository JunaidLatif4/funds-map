import React, { useState, useEffect } from "react";
import Mnumber from "../../../../../components/Mob-num input/Mnumber";

const IdtyInfo = ({ idtyData, setIdtyData }) => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setIdtyData((preVal) => ({
      ...preVal,
      countryCode: phone?.slice(0, 3),
      mobileNumber: phone?.slice(3),
    }));
  }, [phone]);
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
                value={idtyData.firstName}
                onChange={(e) =>
                  setIdtyData((preVal) => ({
                    ...preVal,
                    firstName: e.target.value,
                  }))
                }
              />
            </span>
            <span className="idtyinfo__input_wrapper">
              <input
                className="idtyinfo__input"
                type="text"
                placeholder="Last Name"
                value={idtyData.lastName}
                onChange={(e) =>
                  setIdtyData((preVal) => ({
                    ...preVal,
                    lastName: e.target.value,
                  }))
                }
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
              value={idtyData.companyName}
              onChange={(e) =>
                setIdtyData((preVal) => ({
                  ...preVal,
                  companyName: e.target.value,
                }))
              }
            />
          </span>
        </span>
        <span className="idtyinfo__form_item">
          <span className="idtyinfo__input_label">
            Enter your direct line / cell phone number
          </span>
          <span className="idtyinfo__input_item">
            <span className="idtyinfo__input_wrapper">
              <Mnumber setMobile={setPhone} />
            </span>
            <span className="idtyinfo__input_wrapper">
              <input
                className="idtyinfo__input"
                type="text"
                placeholder="Ext. optional"
                value={idtyData.ext}
                onChange={(e) =>
                  setIdtyData((preVal) => ({
                    ...preVal,
                    ext: e.target.value,
                  }))
                }
              />
            </span>
          </span>
        </span>
      </form>
    </div>
  );
};

export default IdtyInfo;
