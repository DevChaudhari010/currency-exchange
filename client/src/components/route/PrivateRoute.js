import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.authToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
