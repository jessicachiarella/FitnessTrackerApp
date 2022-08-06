import React, { useState } from "react";
import { getRoutines, addRoutine } from "../api/index";
import "./CreateRoutine.css";

const CreateRoutine = ({ setAllRoutines }) => {
  const [routineNameInput, setRoutineNameInput] = useState("");
  const [goalInput, setGoalInput] = useState("");
  const [checked, setChecked] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    await addRoutine(routineNameInput, goalInput, checked);
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
      <div>
        <h1>Add New Routine</h1>
      </div>
      <form className="FormRoutines" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default CreateRoutine;
