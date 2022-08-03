import React from "react";
import { NavLink } from "react-router-dom";


function Header({ loggedIn }) {
   
    return (
       <header>
         <h1>fitness tracker</h1>
   
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

