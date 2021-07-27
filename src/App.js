import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Otp from "./screens/otp/Otp";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/otp" component={Otp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
