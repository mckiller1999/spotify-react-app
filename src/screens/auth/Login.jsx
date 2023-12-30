import React from "react";
import { loginEndpoint } from "../../spotify";
import "./Login.scss";

const Login = () => {
  return (
    <div className="loginPage">
      <img src="./logo.png" alt="logo-spotify" className="logo" />
      <h1>Spotify</h1>
      <a href={loginEndpoint}>
        <div className="login-btn">Login</div>
      </a>
    </div>
  );
};

export default Login;
