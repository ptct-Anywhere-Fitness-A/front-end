import React from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

// import axios from "axios";

const InstructorLogin = () => {
  return (
    <div>
      <form>
        <h3>Instructor Login</h3>
        <label>Username</label>
        <input name="username" type="text" className="username" />
        <label>Password</label>
        <input name="password" type="password" className="password" />
        <input type="submit" className="submit" value="Login" />
      </form>
    </div>
  );
};

export default InstructorLogin;
