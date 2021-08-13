import React, { useEffect, useState } from "react";
import Notify from "./screens/notify/Notify";

import { Route, useHistory } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Details from "./screens/dashboard/Details";

import Gstart from "./screens/PartnerSignup/Getstarted/Gstart";
import Customweb from "./screens/PartnerSignup/CustomWeb/Customweb";
import Dfee from "./screens/PartnerSignup/DefaultFee/Dfee";
import Addlogo from "./screens/PartnerSignup/AddLogo/Addlogo";
import SearchPage from "./screens/dashboard/SearchPage";
import Profile from "./screens/profile/Profile";

import BankMain from "./screens/AddBank/Bankinfo-popup/BankMain";
import Bankdata from "./screens/AddBank/Bankinfo-data/Bankdata";
import bsuccess from "./screens/AddBank/Banksuccess/bsuccess";
import EvarRedirect from "./screens/PartnerSignup/Components/evar-redirect/EvarRedirect";
import AddedBank from "./screens/AddBank/AddedBanks/AddedBank";
import AddedDemet from "./screens/Demet/AddedDemet/AddedDemet";
import AddDemet from "./screens/Demet/AddDemetAccount/AddDemet";
import UploadDemet from "./screens/Demet/UploadDemet/UploadDemet";
import MainDemet from "./screens/Demet/mainDemet";

import Menu from "./components/client-partner-menu/ClientPartnerMenu";
import OrderModi from "./screens/OrderModification/Ordermodification/OrderModi";
// import Menu from "./components/client-partner-menu/ClientPartnerMenu";

// import Funds from "./components/funds/Funds";
import Cordermodi from "./screens/OrderModification/CnfrmOrderModi/Cordermodi";
import Mtradeqty from "./screens/OrderModification/MinimumTradeQuantity/Mtradeqty";
import Reqfund from "./screens/OrderModification/RequireFunds/Reqfund";
import ChoseBank from "./screens/OrderModification/ChoseBank/ChoseBank";
import BtnCom from "./screens/OrderModification/Components/BtnComponent/BtnCom";
// import Funds from "./screens/funds/Funds";

import Funds from "./screens/funds/Funds";
import TestSignin from "./components/test-signin/TestSignin";
import { useSelector } from "react-redux";

const Routes = () => {
  const token = useSelector((state) => state.user.token);
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/signin");
      return;
    } else {
      setValidated(true);
    }
  }, [token]);
  return (
    <>
      {validated && (
        <>
          <Route exact path="/notify" component={Notify} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/getstarted" component={Gstart} />
          <Route exact path="/customweb" component={Customweb} />
          <Route exact path="/dfee" component={Dfee} />
          <Route exact path="/addlogo" component={Addlogo} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/bankinfo" component={BankMain} />
          <Route exact path="/bankdata" component={Bankdata} />
          <Route exact path="/bsuccess" component={bsuccess} />
          <Route exact path="/evar-redirect" component={EvarRedirect} />
          <Route exact path="/addedbank" component={AddedBank} />
          <Route exact path="/addeddemet" component={AddedDemet} />
          <Route exact path="/adddemet" component={AddDemet} />
          <Route exact path="/uploaddemet" component={UploadDemet} />
          <Route exact path="/maindemet" component={MainDemet} />

          <Route exact path="/menu" component={Menu} />
          {/* <Route exact path="/funds" component={Funds} /> */}
          <Route exact path="/ordermodi" component={OrderModi} />
          <Route exact path="/cordermodi" component={Cordermodi} />
          <Route exact path="/mtradeqty" component={Mtradeqty} />
          <Route exact path="/reqfund" component={Reqfund} />
          <Route exact path="/chosebank" component={ChoseBank} />
          <Route exact path="/btn" component={BtnCom} />
          <Route exact path="/funds" component={Funds} />
          <Route exact path="/test-signin" component={TestSignin} />
        </>
      )}
    </>
  );
};

export default Routes;
