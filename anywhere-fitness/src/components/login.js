import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { Form, Input, Label, Button } from "./styled-components/FormStyles";
import { HeaderFour } from "./styled-components/HeaderOne";

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
