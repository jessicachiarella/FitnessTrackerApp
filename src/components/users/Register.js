import React from "react";
import { RegisterPerson } from "../../api/index.js";
import { useNavigate } from "react-router-dom";



const Register = ({setLoggedIn}) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await RegisterPerson(event);
    if (result.error) {
      alert(result.error);
    }else{
      setLoggedIn(true);
      alert("You've registered an account!")
      navigate("/users/myRoutines");
    }

  }

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up for an Account</h1>
        <label>Create Username:</label>
        <input id="username" placeholder="create username here"></input>
        <label>Create Password:</label>
        <input id="password" placeholder="create password here"></input>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;