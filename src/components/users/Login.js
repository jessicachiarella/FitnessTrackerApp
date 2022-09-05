import React from "react";
import { LoginPerson } from "../../api/index.js";
import { useNavigate } from "react-router-dom";


const Login = ({ setLoggedIn, setUsername }) => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const loginUsername = event.target[0].value;
    const result = await LoginPerson(event);
    if (result.token) {
      setLoggedIn(true);
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", loginUsername);
      setUsername(loginUsername);
    } else {
      alert(result.error);
    }

    navigate("/users/myRoutines");
  }

  const registerButton = async (event) => {
    event.preventDefault();
    navigate("/users/Register");
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <h1 id="WelcomePage">Log In To Your Account</h1>
        <div className="centerBox">
        <label>Username:</label>
        <input id="username" placeholder="Enter username"></input>
        <label>Password:</label>
        <input id="password" type="password" placeholder="Enter password"></input>
        <button type="submit">Login</button>
        <button id="register" type="submit" onClick={registerButton}>
          Create Account
        </button>
        </div>
      </form>
    </div>
  );
};
export default Login;