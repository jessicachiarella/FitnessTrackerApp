import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"


function Header({ loggedIn }) {
   
    return (
       <header className="NavBar">
         <h1 id="title">FITNESS TRACKER</h1>
   
         {!loggedIn ? (
           <>
           <div>
            <NavLink className="Links" to="/users/Login">
               Login/Register
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
             <NavLink className="Links" to="/users/MyRoutines">
               My Routines
             </NavLink>
             <NavLink className="Links" to="/users/Logout">
               Logout
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

