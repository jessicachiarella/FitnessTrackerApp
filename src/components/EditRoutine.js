import React, { useState } from "react";
import { updateRoutine, getUserRoutines } from "../api/index";


const EditRoutine = ({routineId, setAllRoutines }) => {
  const [routineNameInput, setRoutineNameInput] = useState("");
  const [goalInput, setGoalInput] = useState("");
  const [checked, setChecked] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    await updateRoutine(routineId, routineNameInput, goalInput, checked);
    const result = await getUserRoutines();
    setAllRoutines(result);
    setRoutineNameInput("");
    setGoalInput("");
    setChecked(false);
  }

  function handleChange(event) {
    setChecked(event.target.checked);
  }

  return (
    <div className="EditBox">
      <div className="editContainer">
          <h4>Edit Routine:</h4>
        <form className="editForm" onSubmit={handleSubmit}>
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
            <label className="isPublic" htmlFor="isPublic">
              <input
                className="checkbox"
                type="checkbox"
                name="isPublic"
                checked={checked}
                onChange={handleChange}
              />
              Make Routine Public?
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