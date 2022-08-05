import React, { useEffect } from "react";
import { getRoutines } from "../../api/index";
import CreateRoutine from "../CreateRoutine";
import EditRoutine from "../EditRoutine";
import DeleteRoutine from "../DeleteRoutine";
import "./MyRoutines.css"

const MyRoutines = ({
  username,
  loggedIn,
  allRoutines,
  setAllRoutines,
  routineNameInput,
  setRoutineNameInput,
  goalInput,
  setGoalInput,
  checked,
  setChecked
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
          <h1 id="WelcomeToMyRoutines">WELCOME TO MY ROUTINES</h1>
        </div>
        <CreateRoutine 
                  routineNameInput={routineNameInput}
                  setRoutineNameInput={setRoutineNameInput}
                  goalInput={goalInput}
                  setGoalInput={setGoalInput}
                  checked={checked}
                  setChecked={setChecked}
                  allRoutines={allRoutines}
                  setAllRoutines={setAllRoutines} />
        {allRoutines.map(({ id, name, goal, creatorName, activities }) => {
          if (creatorName === username) {
            return (
              <div key={id} className="routines">
                <h2 id="Name">{name}</h2>
                <p id="Goal">Goal: {goal}</p>
                <p id="creatorName">Creator Name: {creatorName}</p>
                <EditRoutine
                  id={id}
                  routineNameInput={routineNameInput}
                  setRoutineNameInput={setRoutineNameInput}
                  goalInput={goalInput}
                  setGoalInput={setGoalInput}
                  checked={checked}
                  setChecked={setChecked}
                  allRoutines={allRoutines}
                  setAllRoutines={setAllRoutines}
                />
                 <DeleteRoutine id={id} setAllRoutines={setAllRoutines} />

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
        })}
      </div>
    );
  }
};

export default MyRoutines;
