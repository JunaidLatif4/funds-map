import React from "react";
import { Link } from "react-router-dom";
import "./Terms.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../../../components/button/Button";

const Terms = () => {
  return (
    <>
      <div className="Terms__container">
        <div className="Terms__header">
          <div className="terms__heading">
            Acceptance of <Link>terms</Link>
          </div>
          <div className="terms__header_para">
            We ensure that all transaction are well documenteed to mitigate
            unforeseen deal risk. This documentation secures your intent to
            transact.
          </div>
        </div>

        <div className="terms__body">
          <p
            style={{ marginTop: "55px", color: "black", fontWeight: "bolder" }}
            className="terms__date"
          >
            Date: 18th July 2021
          </p>
          <p style={{ margin: "10px 0" }} className="terms__to">
            To,
          </p>
          <p className="terms__location">
            PM Securities Pvt. Ltd, 701 PU Towes, Dalal Street, Fort, Mumbai -
            400001
          </p>
          <p style={{ margin: "12px 0" }} className="terms__subject">
            Sub:{" "}
            <span style={{ color: "black" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              quibusdam.
            </span>
          </p>
          <p className="terms__para1" style={{ margin: "5px 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quod cum reiciendis error eum saepe quisquam, quibusdam sit,
            architecto id aliquid! Officia nam accusantium delectus tempora
            error laborum suscipit cumque nulla eum atque, doloremque iste
            maiores ipsum est quasi ipsa!
          </p>
          <p className="terms__para2" style={{ margin: "5px 0" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            exercitationem quae maiores, ex quaerat illo mollitia fugiat.
            Deleniti, asperiores repellat expedita tempore earum, repudiandae,
            corrupti deserunt rem facere libero quisquam.
          </p>
          <p className="terms__para2" style={{ margin: "5px 0" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            exercitationem quae maiores, ex quaerat illo mollitia fugiat.
          </p>
          <p className="terms__para2" style={{ margin: "5px 0" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            exercitationem quae maiores, ex quaerat illo mollitia fugiat. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Facere
          </p>
          <p className="terms__para2" style={{ margin: "5px 0" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            exercitationem quae maiores, ex quaerat illo mollitia fugiat. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Facere Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Facere
            exercitationem quae maiores, ex quaerat illo mollitia fugiat. Lorem
            ipsum dolor, sit amet
          </p>
          <p className="terms__para2" style={{ margin: "5px 0" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            exercitationem quae maiores, ex quaerat illo mollitia fugiat. Lorem
            ipsum dolor, sit amet
          </p>
          <p className="terms__para2" style={{ margin: "5px 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            nisi minus. Velit consequatur vel, quae repellendus veniam nostrum
            harum sequi repellat similique ea hic eum recusandae cupiditate
            ipsam placeat eius ut nesciunt ex doloribus rem.
          </p>
        </div>
        <div className="psignup__confirm">
          <div className="psignup__checkbox">
            <Checkbox
              style={{ color: "green" }}
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
          <div className="Psignup__confirmline">I agree to the T&C</div>
        </div>
      </div>
      <Button text="CONFIRM" />
    </>
  );
};

export default Terms;
