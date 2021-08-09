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

import PSignup from "./screens/PartnerSignup/Psignup/PSignup";
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
          <Route exact path="/psignup" component={PSignup} />
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
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
