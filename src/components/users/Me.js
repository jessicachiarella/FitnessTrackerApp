import React, { useEffect } from "react";
import { getUser } from "../../api/index";


const Me = () => {
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
      <h1 id="ProfileHeader">
      WELCOME 
      </h1>
      </div>
      )
  
}

export default Me;