import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {

    return (
    <div id = "homeHeader">
    <h1>HEADER</h1>
    <nav>
        <Link to="/Routines">Routines</Link>
        <Link to="/users/MyRoutines">My Routines</Link>
        <Link to="/Activities">Activities</Link>
        <Link to="/users/Login">Login</Link>
        <Link to="/users/Register">Register</Link>
    </nav>
    </div>
    )
}

export default Header;