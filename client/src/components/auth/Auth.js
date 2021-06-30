import React, { useContext, createContext } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../services";

const authContext = createContext();

function useProvideAuth() {
  const [login, { data }] = useMutation(LOGIN);
  const signIn = ({ email, password }) => {
    login({ variables: { email, password } });
  };
  const sessionToken = sessionStorage.getItem("token");
  const token = (data && data.login) || sessionToken;
  if (!sessionToken && token) {
    sessionStorage.setItem("token", token);
  }
  return {
    authToken: token,
    login: signIn,
  };
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
  return useContext(authContext);
}

export { ProvideAuth, useAuth };
