import React, { useEffect } from "react";
import { getUserRoutines } from "../../api/index";

const MyRoutines = ({username, loggedIn, setUserRoutines }) => {
    useEffect(() => {
        console.log(loggedIn, "Am I logged in on my routines?????")
        console.log(username, "Username on my routines!!!!")
        getUserRoutines(username).then((results) => {
          setUserRoutines(results.data.routines);
          console.log(results.data.routines, "THESE ARE MY ROUTINES")
        });
      
        setUserRoutines([]);
      }, []);


return (
    <div>
      <h1 id="ProfileHeader">
      WELCOME 
      </h1>
      </div>
      )
  
}

export default MyRoutines;