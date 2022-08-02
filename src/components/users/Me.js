import React, { useEffect } from "react";
import { getUser } from "../../api/index";
import { NavLink } from "react-router-dom";


const Me = ({loggedIn}) => {
  let token = "";
  useEffect(() => {
    token = localStorage.getItem("token");
    console.log(token, "this is my tokkkkkkkkkkken")
    async function getMyInfo(){
    const myInfo = await getUser(token);
    
  }
  getMyInfo();
}, []);

  return (
    <div>
      {loggedIn ?
      <div>
      <h1 id="ProfileHeader">
      WELCOME 
      </h1> 
      <div > 
        <NavLink to="/users/myroutines" >MY ROUTINES</NavLink>
      </div> </div>: null
      
}
      </div>
      
      )
  
}

export default Me;