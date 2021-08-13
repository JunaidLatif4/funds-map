import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Notify from "./screens/notify/Notify";
import EVar from "./screens/EmailVar/EVar";
import Otp from "./screens/otp/Otp";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import dotenv from "dotenv";
import Dashboard from "./screens/dashboard/Dashboard";
import Details from "./screens/dashboard/Details";

import PartnerSignup from "./screens/PartnerSignup/PartnerSignup/PartnerSignup";
import Gstart from "./screens/PartnerSignup/Getstarted/Gstart";
import Customweb from "./screens/PartnerSignup/CustomWeb/Customweb";
import Dfee from "./screens/PartnerSignup/DefaultFee/Dfee";
import Addlogo from "./screens/PartnerSignup/AddLogo/Addlogo";
import SearchPage from "./screens/dashboard/SearchPage";
import Profile from "./screens/profile/Profile";
import Motp from "./screens/PartnerSignup/MobileOtp/Motp";
import BankMain from "./screens/AddBank/Bankinfo-popup/BankMain";
import Bankdata from "./screens/AddBank/Bankinfo-data/Bankdata";
import bsuccess from "./screens/AddBank/Banksuccess/bsuccess";
import EvarRedirect from "./screens/PartnerSignup/Components/evar-redirect/EvarRedirect";
import AddedBank from "./screens/AddBank/AddedBanks/AddedBank";
import AddedDemet from "./screens/Demet/AddedDemet/AddedDemet";
import AddDemet from "./screens/Demet/AddDemetAccount/AddDemet";
import UploadDemet from "./screens/Demet/UploadDemet/UploadDemet";
import MainDemet from "./screens/Demet/mainDemet";
// From Junaid
import Menu from "./components/client-partner-menu/ClientPartnerMenu";
import Funds from "./screens/funds/Funds";
import FundsTransfer from "./screens/funds/FundsTransfer";
// From Zahid
import OrderModi from "./screens/OrderModification/Ordermodification/OrderModi";
import Cordermodi from "./screens/OrderModification/CnfrmOrderModi/Cordermodi";
import Mtradeqty from "./screens/OrderModification/MinimumTradeQuantity/Mtradeqty";
import Reqfund from "./screens/OrderModification/RequireFunds/Reqfund";
import Terms from "./screens/OrderModification/AcceptanceOfTerms/Terms";
import FreshRound from "./screens/OrderModification/AgainModifyOrder/FreshRound";
import Modified from "./screens/OrderModification/ModifiedOrder/Modified";
import ChoseBank from "./screens/OrderModification/ChoseBank/ChoseBank";
// From Hassan

function App() {
  dotenv.config();
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/otp" component={Otp} />
          <Route exact path="/evar" component={EVar} />
          <Route exact path="/notify" component={Notify} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/partnersignup" component={PartnerSignup} />
          <Route exact path="/getstarted" component={Gstart} />
          <Route exact path="/customweb" component={Customweb} />
          <Route exact path="/dfee" component={Dfee} />
          <Route exact path="/addlogo" component={Addlogo} />
          <Route exact path="/motp" component={Motp} />
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
          // From Junaid
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/funds" component={Funds} />
          <Route exact path="/funds/transfer" component={FundsTransfer} />
          // From Zahid
          <Route exact path="/ordermodi" component={OrderModi} />
          <Route exact path="/cordermodi" component={Cordermodi} />
          <Route exact path="/mintradeqty" component={Mtradeqty} />
          <Route exact path="/requirefund" component={Reqfund} />
          <Route exact path="/modified" component={Modified} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/freshround" component={FreshRound} />
          // From Hassan
          <Route exact path="/chosebank" component={ChoseBank} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
