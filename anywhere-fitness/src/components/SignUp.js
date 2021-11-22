import React, { useState } from "react";
import axios from "axios";

import { Form, Input, Label, Button } from "./styled-components/FormStyles";
import { HeaderFour } from "./styled-components/HeaderOne";

const SignUp = () => {
  // const { push } = useHistory();
  const [login, setLogin] = useState({
    username: "",
    password: "",
    // type: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleInstructorSubmit = (e) => {
    e.preventDefault();
    // setLogin({ ...login, type: "instructor" });
    axios
      .post(
        "https://anywhere-fitnessbackend.herokuapp.com/api/users/register",
        login
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
    // setLogin({ ...login, type: "client" });
    axios
      .post(
        "https://anywhere-fitnessbackend.herokuapp.com/api/users/register",
        login
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
      <Form>
        <HeaderFour>Enter your preferred username and password</HeaderFour>
        <Label>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            onChange={handleChange}
            value={login.username}
          />
        </Label>
        <Label>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={login.password}
          />
        </Label>
        <Button id="instructorSubmit" onClick={handleInstructorSubmit}>
          Create Instructor account
        </Button>
        <Button id="clientSubmit" onClick={handleClientSubmit}>
          Create Client account
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
