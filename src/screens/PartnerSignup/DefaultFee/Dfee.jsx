import React from "react";
import { Link } from "react-router-dom";
import "./Dfee.css";
import Button from "../../../components/button/Button";
import { useHistory } from "react-router-dom";

const Dfee = () => {
  const history = useHistory();

  const next_page = () => {
    history.push("/addlogo");
  };
  return (
    <>
      <div className="Dfee__container">
        <div className="Dfee__header">
          <div className="Dfee__heading">
            Set your default&nbsp;<Link>fee</Link>
          </div>
          <div className="Dfee__percent">
            <Link className="percent__link">0.5</Link>&nbsp;%
          </div>
          <div className="percent__line">Of the transaction value</div>

          <div className="Dfee__body">
            <div className="Dfee__para1">
              This is the default fe taht will be added to the value of every
              transaction that is done by your clients on your website or for
              any transaction done by you on your clients behalf
            </div>
            <div className="Dfee__para2">
              Don't worry you can always change your default fee later from the
              settings tab or you can also decide a custom fee for every
              transaction separately.
            </div>
            <div className="Dfee__link">
              <Link>Learn more</Link>
            </div>
          </div>
        </div>
        <Button text="DONE" click={next_page} />
      </div>
    </>
  );
};

export default Dfee;
