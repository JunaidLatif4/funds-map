import React from "react";
import { Link } from "react-router-dom";
import "./Customweb.css";
import Button from "../../../components/button/Button";
import Weblink from "../Components/Psignup__weblink/Weblink";


const Customweb = () => {
  return (
    <>
      <div className="Customweb__container">
        <div className="Customweb__header">
          <div className="Customweb__heading">
            Your custom&nbsp;<Link>website</Link>
          </div>
          <p className="header__para">
            we have built a custom website for you which you can share with your
            clients. All transactions done through your website will earn you
            revenues.
          </p>
        </div>
        <Weblink/>

        <div className="Customweb__body">
          <div className="body__heading">Features</div> 
          <div className="body__lists">
            <li className="Custom__lists">
              Invite your clients to view 100's of private equity deals on your
              website
            </li>
            <li className="Custom__lists">
              You decide the % fee that you earn on all transactions done on
              your websites.
            </li>
            <li className="Custom__lists">
              Your branding on website and in all client communication.
            </li>
            <li className="Custom__lists">
              You do the business, we take care of all the backend work like
              KYC, deal flow management, paperwork etc.
            </li>
            <li className="Custom__lists">
              Zero trust framework, with completely secure digital deal flows.
            </li>
          </div>
        </div>
      </div>
      <Button text="NEXT" />
    </>
  );
};

export default Customweb;
