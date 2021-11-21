import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login.js" 

function App() {
  return (
    <div className="App">
      <h1>hello welcome to anywhere fitness, where you can fitness anywhere</h1>
      <Switch>
        <Route path="/client">{/* include cleint component */}</Route>
        <Route path="/instructor">{/* include instructor component */}</Route>
      </Switch>
      <Login />
    </div>
  );
}

export default App;
