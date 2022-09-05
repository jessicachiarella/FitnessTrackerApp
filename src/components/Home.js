import React from "react";
import { NavLink } from "react-router-dom";

function Home({loggedIn}) {
    if(loggedIn){
        return (
            <div className="homeScreen">
                <NavLink  className="LetsGetFit" to="/users/MyRoutines">
                  LET'S GET FIT
                </NavLink>
            </div>
        )
    }else{
    return (
        <div className="homeScreen">
            <NavLink  className="LetsGetFit" to="/users/Login">
              LET'S GET FIT
            </NavLink>
        </div>
    )
}}

export default Home;