import './App.css';
import EVar from './screens/EmailVar/EVar';
import Notify from './screens/notify/Notify';
import Signin from './screens/signin/Signin';
import Signup from './screens/signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <Signin /> */}
      {/* <Signup/> */}
      {/* <EVar/> */}
      <Notify/>
    </div>
  );
}

export default App;
