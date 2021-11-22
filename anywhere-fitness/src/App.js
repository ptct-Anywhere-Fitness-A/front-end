import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login.js";
import styled from "styled-components";

import banner from "../src/gymbanner.png";
import SignUp from "./components/SignUp";
import Instructor from "./components/Instructor";

function App() {
  return (
    <div className="App">
      <Container>
        <BannerImg src={banner} alt="gym banner" />
        <Centered>Anywhere Fitness</Centered>
      </Container>
      <ContainerCard>
        <Para>
          These days, fitness classes can be held anywhere- a park, an
          unfinished basement or a garage- not just at a traditional gym.
          Certified fitness instructors need an easy way to take the awkwardness
          out of attendance taking and client payment processing.
        </Para>
      </ContainerCard>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/instructor">
          <Instructor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  text-align: center;
  margin: 5vh 0vh;
`;

const ContainerCard = styled.div`
  position: relative;
  text-align: center;
  margin: 5vh 10vh;
`;

const Centered = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const BannerImg = styled.img`
  height: 55vh;
`;

const Para = styled.p`
  color: #0d420d;
`;
