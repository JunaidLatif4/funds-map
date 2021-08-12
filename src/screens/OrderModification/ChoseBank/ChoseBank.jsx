import React from "react";
import BtnCom from "../Components/BtnComponent/BtnCom";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import "./ChoseBank.css";
import info from "../../../Assets/imgs/info.svg";
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

const ChoseBank = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="choseBank__container">
        <BtnCom />

        <div className="chosebank__confirm">
          <div className="chosebank__radio">
            <GreenRadio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ "aria-label": "C" }}
            />
          </div>
          <div className="chosebank__radio__confirm">
            <p className="chosebank__confirm1">HSBC Bank XXX1234</p>
            <p className="chosebank__confirm2">Fort, George Avenue 23</p>
          </div>
        </div>
        <div className="chosebank__confirm">
          <div className="chosebank__radio">
            <GreenRadio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ "aria-label": "C" }}
            />
          </div>
          <div className="chosebank__radio__confirm">
            <p className="chosebank__confirm1">HSBC Bank XXX1234</p>
            <p className="chosebank__confirm2">Fort, George Avenue 23</p>
          </div>
        </div>

        <div className="chosebank__addbank">
          <img className="chosebank__img" src={info} alt="" />
          Add another bank account
        </div>
      </div>
      <Button text="ADD FUNDS" />
    </>
  );
};

export default ChoseBank;
