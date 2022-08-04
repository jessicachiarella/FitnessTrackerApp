import React, { useState, useEffect } from "react";
import { getRoutines, addRoutine } from "../../api/index";
import EditRoutine from "../EditRoutine";
import DeleteRoutine from "../DeleteRoutine";

const MyRoutines = ({
  username,
  loggedIn,
  allRoutines,
  setAllRoutines,
  routineNameInput,
  setRoutineNameInput,
  goalInput,
  setGoalInput,
}) => {
  useEffect(() => {
    getRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, []);

  const [checked, setChecked] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    await addRoutine(routineNameInput, goalInput, checked);
    const result = await getRoutines();
    setAllRoutines(result);
    setRoutineNameInput("");
    setGoalInput("")
    setChecked(false)
  }
  function handleChange(event) {
    event.preventDefault();
    setChecked(!checked);
  }
  console.log(loggedIn, "AM I LOGGED IN RIGHT NOW?");
  if (loggedIn) {
    return (
      <div>
        <div>
          <h1 id="ProfileHeader">WELCOME TO MY ROUTINES</h1>
        </div>
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
