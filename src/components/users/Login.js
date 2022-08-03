import React from "react";
import { LoginPerson } from "../../api/index.js";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn, setUsername }) => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const loginUsername = event.target[0].value;
    const token = await LoginPerson(event);
    if (token) {
      setLoggedIn(true);
      localStorage.setItem("token", token);
      localStorage.setItem("username", loginUsername);
      setUsername(loginUsername);
    }

  

    navigate("/users/myRoutines");

  }

  const registerButton = async (event) => {
    event.preventDefault();
    navigate("/users/Register");
  };

  return (
    <div id="loginBox">
      <form onSubmit={handleSubmit}>
        <h1>Log in to you account</h1>
        <label>login username</label>
        <input id="username" placeholder="login username here"></input>
        <label>password</label>
        <input id="password" placeholder="login password here"></input>
        <button type="submit">Login</button>
        <button id="register" type="submit" onClick={registerButton}>
          create account
        </button>
      </form>
    </div>
  );
};

export default Login;
