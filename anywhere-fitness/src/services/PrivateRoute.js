import React from "react";
import { Route, Redirect } from "react-router-dom";

const InstructorPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("Itoken") ===
        "helloooooooIAmTheInstructorToken" ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const ClientPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("Ctoken") === "yooooImTheClientWasGud" ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export { InstructorPrivateRoute, ClientPrivateRoute };
