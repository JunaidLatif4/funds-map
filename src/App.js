import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Notify from "./screens/notify/Notify";
import EVar from "./screens/EmailVar/EVar";
import Otp from "./screens/otp/Otp";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import PSignup from "./screens/PSignup/PSignup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/otp" component={Otp} />
          <Route exact path="/evar" component={EVar} />
          <Route exact path="/notify" component={Notify} />
          <Route exact path="/psignup" component={PSignup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
