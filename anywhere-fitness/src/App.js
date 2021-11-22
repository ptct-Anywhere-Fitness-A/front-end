import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/login.js";

import SignUp from "./components/SignUp";
import Instructor from "./components/Instructor";
import PickYourClasses from "./components/PickYourClasses";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/instructor" component={Instructor}></Route>
          <Route path="/classes" component={PickYourClasses}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
