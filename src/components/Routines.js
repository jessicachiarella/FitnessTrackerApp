import React, { useState, useEffect } from "react";
import { getRoutines, addRoutine } from "../api/index";

const Routines = ({
  loggedIn,
  allRoutines,
  setAllRoutines,
  routineNameInput,
  setRoutineNameInput,
  goalInput,
  setGoalInput
}) => {
    const [checked, setChecked] = useState(false);


  useEffect(() => {
    getRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, []);

  const token = localStorage.getItem("token");
  async function handleSubmit(event) {
    event.preventDefault();
    const freshRoutine = await addRoutine(
      token,
      routineNameInput,
      goalInput,
      checked
    );
    setAllRoutines([freshRoutine, ...allRoutines]);
  }
  function handleChange(event) {
    event.preventDefault();
    setChecked(!checked);
  }
console.log(loggedIn," AM I LOGGED IN RIGHT NOW?")
  if (loggedIn) {
    return (
      <div>
        <div id="AddForm">
          <div>
            <h1>Add New Routine</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="AddName"
                placeholder="Name"
                value={routineNameInput}
                onChange={(event) => {
                  setRoutineNameInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="AddGoal"
                placeholder="Goal"
                value={goalInput}
                onChange={(event) => {
                  setGoalInput(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="isPublic">
                <input
                  id="isPublic"
                  type="checkbox"
                  name="isPublic"
                  checked={checked}
                  onChange={handleChange}
                />
                Routine is Public?
              </label>
            </div>
            <button id="AddButton" type="Submit">
              CREATE ROUTINE
            </button>
          </form>

          {allRoutines.map(
            ({ id, name, isPublic, goal, creatorName, activities }) => {
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
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 id="ProfileHeader">Routines</h1>
        <div>
          {allRoutines.map(
            ({ id, name, isPublic, goal, creatorName, activities }) => {
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
          )}
        </div>
      </div>
    );
  }
};

export default Routines;
