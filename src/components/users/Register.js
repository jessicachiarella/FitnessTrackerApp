import React from "react";
import { RegisterPerson } from "../../api/index.js"


async function handleSubmit(event) {
    event.preventDefault();
    RegisterPerson(event);
}

const Register = () => { 
return (
    <div id = "registerBox">
   <form onSubmit={handleSubmit}>
        <h1>sign up for an account</h1>
        <label>create username</label>
        <input id="username" 
        placeholder="create username here">
        </input>
        <label>password</label>
        <input id="password" 
        placeholder="create password here">
        </input>
        <button type="submit">create account</button>
    </form>
    </div>
)
}


export default Register;