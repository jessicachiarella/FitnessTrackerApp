import React from "react";
import { RegisterPerson } from "../../api/index.js"
import "./Register.css"


async function handleSubmit(event) {
    event.preventDefault();
    RegisterPerson(event);
}

const Register = () => { 
return (
    <div id = "registerBox">
   <form onSubmit={handleSubmit}>
        <h1>Sign Up for an Account</h1>
        <label>Create Username</label>
        <input id="username" 
        placeholder="create username here">
        </input>
        <label>Create Password</label>
        <input id="password" 
        placeholder="create password here">
        </input>
        <button type="submit">Create Account</button>
    </form>
    </div>
)
}


export default Register;