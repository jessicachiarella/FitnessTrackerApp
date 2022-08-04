import React from "react";
import { updateRoutine, getRoutines } from "../api/index";

const EditRoutine = ({
  id,
  setAllRoutines,
  routineNameInput,
  setRoutineNameInput,
  goalInput,
  setGoalInput,
  checked,
  setChecked,
}) => {
  async function handleSubmit(event) {
    event.preventDefault();
    await updateRoutine(
      id,
      routineNameInput,
      goalInput,
      checked
    );
    const result = await getRoutines();
    setAllRoutines(result);
    setRoutineNameInput("");
    setGoalInput("");
    setChecked(false);
  }

  function handleChange(event) {
    event.preventDefault();
    setChecked(!checked);
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
