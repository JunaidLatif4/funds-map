import React from "react";
import { Link } from "react-router-dom";
import "./Reqfund.css";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Button from "../../../components/button/Button";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const Reqfund = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="reqfund__container">
        <div className="reqfund__header">
          Rs. <span style={{ fontWeight: "bolder" }}>40,235</span> are required
          as additional mafgins to complete this order modification. These
          margins are 100% refundable if transactionis not complete
        </div>
        <div className="reqfund__body">
          <div className="reqfund__req">
            <div className="req1">
              <span style={{ fontWeight: "bolder" }}>Required Funds :</span>
              &nbsp;Rs 40,235
            </div>
            <div className="avail">
              <span style={{ fontWeight: "bolder" }}>Available Funds :</span>
              &nbsp;Rs 0
            </div>
          </div>

          <div className="reqfund__component">
            <div className="reqfund__left"></div>
            <div className="reqfund__right">
              <p style={{ fontWeight: "bolder" }} className="reqfund__first">
                Add Rs. 40,235
              </p>
              <p className="reqfund__second">
                to complete this order modification
              </p>
            </div>
          </div>
          <div className="reqfund__confirm">
            <div className="reqfund__radio">
              <GreenRadio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
              />
            </div>
            <div className="radio__confirm">Net Banking/UPI/G-pay</div>
          </div>
          <div className="reqfund__confirm">
            <div className="reqfund__radio">
              <GreenRadio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
              />
            </div>
            <div className="radio__confirm">Offline NEET / RTGS</div>
          </div>
        </div>
      </div>
      <Button text="CONTINUE" />
    </>
  );
};

export default Reqfund;
