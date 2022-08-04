import React, { useEffect } from "react";
import { getRoutines } from "../../api/index";
import CreateRoutine from "../CreateRoutine";
import EditRoutine from "../EditRoutine";
import DeleteRoutine from "../DeleteRoutine";
import AddRoutineActivity from "../AddRoutineActivity";

const MyRoutines = ({
  username,
  loggedIn,
  allRoutines,
  setAllRoutines,
  allActivities,
  setAllActivities
}) => {
  useEffect(() => {
    getRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, []);


  console.log(loggedIn, "AM I LOGGED IN RIGHT NOW?");
  if (loggedIn) {
    return (
      <div>
        <div>
          <h1 id="ProfileHeader">WELCOME TO MY ROUTINES</h1>
        </div>
        <CreateRoutine 
                  allRoutines={allRoutines}
                  setAllRoutines={setAllRoutines} />
        {allRoutines.length ? allRoutines.map((element) => {
          const { id, name, goal, creatorName, activities } = element
          if (creatorName === username) {
            return (
              <div key={id} className="routines">
                <h2 id="Name">{name}</h2>
                <p id="Goal">Goal: {goal}</p>
                <p id="creatorName">Creator Name: {creatorName}</p>
                <EditRoutine
                  id={id}
                  allRoutines={allRoutines}
                  setAllRoutines={setAllRoutines}
                />
                <div id="Activities">
                  {activities.length ? activities.map(
                    (element) => { 
                     const { id, name, description, count, duration } = element
                     const activityId = id
                      return (
                        <div key={activityId} className="activities">
                          <h4 id="activityName">Activity:{name}</h4>
                          <p id="Description">Description: {description}</p>
                          <p id="Count">Count: {count}</p>
                          <p id="Duration">Duration: {duration}</p>
                        </div>
                      );
                    }
                  ):null}
                </div>
                <AddRoutineActivity
                  id={id}
                  allActivities={allActivities}
                  setAllActivities={setAllActivities}
                />
                 <DeleteRoutine id={id} setAllRoutines={setAllRoutines} />
              </div>
            );
          }
        }): <div> Loading your routines...</div>}
      </div>
    );
  }
};

export default MyRoutines;
