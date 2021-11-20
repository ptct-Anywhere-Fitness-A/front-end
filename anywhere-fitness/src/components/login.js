import React, { useState } from 'react'

function Login() {
  const initialValues = {
    username: "",
    password: ""
  }
  
  const [form, setForm] = useState(initialValues)
  
  const updateForm = (name, value) => {
        setForm({ ...form, [name]: value})
  }

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        updateForm(name, value)
    }
  return (
    <div className="form container">
      <form>
        <label>
          <input placeholder='Username' type='text' name='username' onChange={onChange} value={form.username} />
        </label>
        <label>
          <input placeholder='Password' type='password' name='password' onChange={onChange} value={form.password} />
        </label>
        <input type="submit" value="Login as Instructor"/>
        <input type="submit" value="Login as Student"/>
      </form>
    </div>
  );
}

export default Login;
