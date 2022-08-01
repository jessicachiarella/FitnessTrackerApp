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
    return (
      <>
        <div id="LoginBoxCenter">
          <div id="LoginBox">
            <div>
              <h1 id="LoginHeader">Log In To Your Account</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <input id="HUsername" placeholder="Username"></input>
              </div>
              <div>
                <input
                  id="HPassword"
                  placeholder="Password"
                  type="password"
                ></input>
              </div>
              <button type="Submit">LOGIN</button>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Login;