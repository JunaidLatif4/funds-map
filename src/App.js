import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/ConfigureStore";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import PSignup from "./screens/PartnerSignup/PartnerSignup/PartnerSignup";
import EVar from "./screens/EmailVar/EVar";
import Otp from "./screens/otp/Otp";
import Motp from "./screens/PartnerSignup/MobileOtp/Motp";
import Routes from "./Routes";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/partner/signup" component={PSignup} />
            <Route exact path="/otp" component={Otp} />
            <Route exact path="/evar" component={EVar} />
            <Route exact path="/motp" component={Motp} />
            <Routes />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
