import React from "react";
import { Redirect } from "react-router-dom";
import { Login } from "../components/login";
import { useAuth } from "../components/auth";

function LoginPage() {
  let auth = useAuth();

  let onLogin = (creds) => {
    auth.login(creds);
  };

  if (auth.authToken) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return <Login onLogin={onLogin} />;
}

export default LoginPage;
