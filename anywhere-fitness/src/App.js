import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import {
  InstructorPrivateRoute,
  ClientPrivateRoute,
} from "./services/PrivateRoute";
import styled from "styled-components";
import { logout } from "./services/backendService";

import Login from "./components/login.js";
import SignUp from "./components/SignUp";
import Instructor from "./components/Instructor";
import PickYourClasses from "./components/PickYourClasses";

function App() {
  return (
    <div className="App">
      <LogoutButton onClick={logout}>Logout</LogoutButton>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <InstructorPrivateRoute
            path="/instructor"
            component={Instructor}
          ></InstructorPrivateRoute>
          <ClientPrivateRoute
            path="/classes"
            component={PickYourClasses}
          ></ClientPrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const LogoutButton = styled.button`
  padding: 0.5em 0.75em;
  margin-top: 30px;
  margin-left: 81vw;
  background: #0d420d;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 3px;
`;
