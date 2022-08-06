import React, { useState } from "react";
import { updateRoutine, getRoutines } from "../api/index";
import "./EditRoutine.css";

const EditRoutine = ({ routineId, setAllRoutines }) => {
  const [routineNameInput, setRoutineNameInput] = useState("");
  const [goalInput, setGoalInput] = useState("");
  const [checked, setChecked] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    await updateRoutine(routineId, routineNameInput, goalInput, checked);
    const result = await getRoutines();
    setAllRoutines(result);
    setRoutineNameInput("");
    setGoalInput("");
    setChecked(event.target.checked);
  }

  function handleChange(event) {
    event.preventDefault();
    setChecked(event.target.checked);
  }

  return (
    <div>
      <div id="EditBox">
        <div>
          <h5>Edit Routine</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="ERoutineName"
              placeholder="Name"
              value={routineNameInput}
              onChange={(event) => {
                setRoutineNameInput(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              id="EGoal"
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
          <button id="Ebutton" type="Submit">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRoutine;
