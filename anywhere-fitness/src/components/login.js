import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { Form, Input, Label, Button } from "./styled-components/FormStyles";
import { HeaderFour } from "./styled-components/HeaderOne";
import banner from "../gymbanner.png";
import styled from "styled-components";

function Login() {
  // const { push } = useHistory();
  const initialValues = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(initialValues);

  const updateForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    updateForm(name, value);
  };

  const handleInstructorSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://anywhere-fitnessbackend.herokuapp.com/api/users/login",
        form
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://anywhere-fitnessbackend.herokuapp.com/api/users/login",
        form
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="form container">
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
      <Form>
        <HeaderFour>Please login below to view or create classes</HeaderFour>
        <Label>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            onChange={onChange}
            value={form.username}
          />
        </Label>
        <Label>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={onChange}
            value={form.password}
          />
        </Label>
        <Button id="instructorSubmit" onClick={handleInstructorSubmit}>
          Login as an Instructor
        </Button>
        <Button id="clientSubmit" onClick={handleClientSubmit}>
          Login as a Client
        </Button>
        <HeaderFour>Don't have an account? Sign up now!</HeaderFour>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;

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
