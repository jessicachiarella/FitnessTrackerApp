import React, { useEffect } from "react";
import { getRoutines } from "../api/index";

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
    <div>
      <h1 id="ProfileHeader">
      WELCOME TO ROUTINES
      </h1>

      <div>
        <h1 id="ProfileHeader">Routines</h1>
        <div>
          {allRoutines.length ? allRoutines.map(
            (element) => {
              const { id, name, isPublic, goal, creatorName, activities } = element
              if (isPublic) {
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
          ): <div> Loading your routines... </div>}
        </div>
      </div>
      </div>
    );
  }


export default Routines;
