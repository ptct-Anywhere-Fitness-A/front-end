import React, { useState } from "react";

import { Form, Input, Label } from "./styled-components/FormStyles";
import { HeaderFour } from "./styled-components/HeaderOne";

function Login() {
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
        <Input type="submit" value="Login as Instructor" />
        <Input type="submit" value="Login as Student" />
      </Form>
    </div>
  );
}

export default Login;
