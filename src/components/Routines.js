import React, { useEffect } from "react";
import { getRoutines } from "../api/index";
import "./Routines.css"

const Routines = ({
  loggedIn,
  allRoutines,
  setAllRoutines,
}) => {


  useEffect(() => {
    getRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, []);

 
console.log(loggedIn," AM I LOGGED IN RIGHT NOW?")
   

return (
    <div id="RoutineBox">
      <h1 className="PageHeader" id="ProfileHeader">
      WELCOME TO ROUTINES
      </h1>

      <div>
        <h2 className="PageSubHeader" id="ProfileHeader"></h2>
        <div>
          {allRoutines.map(
            ({ id, name, isPublic, goal, creatorName, activities }) => {
              if (isPublic) {
                return (
                  <div id="RoutineNames" key={id} className="WelcomeToRoutines">
                    <h2 id="Name">{name}</h2>
                    <p id="Goal">Goal: {goal}</p>
                    <p id="creatorName">Creator Name: {creatorName}</p>

                    <div id="Activities">
                      {activities.map(
                        ({ id, name, description, count, duration }) => {
                          return (
                            <div key={id} id="ActivityBox2">
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
      </div>
    );
  }


export default Routines;
