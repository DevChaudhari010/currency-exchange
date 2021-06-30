import React from "react";
import { Formik, Field, Form } from "formik";
import "./Login.css";

const Login = ({ onLogin }) => (
  <div className="Login-container">
    <h1>Sign In</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        onLogin(values);
      }}
    >
      <Form className="Login-form">
        <div className="Login-form-field">
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" type="email" />
        </div>
        <div className="Login-form-field">
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  </div>
);

export default Login;
