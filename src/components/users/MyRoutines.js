import React, { useEffect } from "react"
import { getRoutines } from "../../api/index";

const MyRoutines = ({username, loggedIn, allRoutines, setAllRoutines }) => {


const token = localStorage.getItem("token");

useEffect(() => {
    getRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, []);
console.log(loggedIn, "AM I LOGGED IN RIGHT NOW?")
if(loggedIn){
    return (
        <div>
          <h1 id="MyRoutinesHeader">My Routines</h1>
          <div>
            {allRoutines.map(
              ({ id, name, goal, creatorName, activities }) => {
                if (creatorName === username) {
                  return (
                    <div key={id} className="routines">
                      <h2 id="Name">{name}</h2>
                      <p id="Goal">Goal: {goal}</p>
                      <p id="creatorName">Creator Name: {creatorName}</p>
    
                      <div id="Activities">
                        {activities.map(
                          ({ id, name, description, count, duration }) => {
                            return (
                              <div key={id} className="activities">
                                <h4 id="activityName">Activity:{name}</h4>
                                <p id="Description">Description: {description}</p>
                                <p id="Count">Count: {count}</p>
                                <p id="Duration">Duration: {duration}</p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  );
                }
              }
            )}
          </div>
        </div>
      );
}

  
}

export default MyRoutines;