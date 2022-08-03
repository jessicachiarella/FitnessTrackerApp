import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

//THIS WAS HOW MY STRANGERS THINGS LOGOUT FUNCTION WORKED
function Header({ loggedIn, setLoggedIn, setUsername, setPassword }) {
    let navigate = useNavigate();
       const logout = () => {
       localStorage.removeItem("token");
       localStorage.removeItem("username");
       setLoggedIn(false);
       navigate("/Home");
       setUsername("");
       setPassword("");
     };


    return (
       <header>
         <h1>fitness tracker</h1>
   
         {!loggedIn ? (
           <>
           <div>
            <NavLink className="Links" to="/users/Login">
               Login
             </NavLink>
             <NavLink className="Links" to="/users/MyRoutines">
               My Routines
             </NavLink>
             <NavLink className="Links" to="/Routines">
               Routines
             </NavLink>
             <NavLink className="Links" to="/Activities">
               Activities
             </NavLink>
             </div>
           </>
         ) : (
           <>
           <div>
             <NavLink className="Links" to="/Home">
               Home
             </NavLink>
             <NavLink className="Links" to="/users/Logout">
               Log Out
             </NavLink>
             <NavLink className="Links" to="/Routines">
               Routines
             </NavLink>
             <NavLink className="Links" to="/Activities">
               Activities
             </NavLink>
             </div>
           </>
         )}
       </header>
     );
   }




export default Header;

