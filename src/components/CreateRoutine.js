import React, { useState } from "react";
import { getUserRoutines, addRoutine } from "../api/index";


const CreateRoutine = ({ setAllRoutines }) => {
  const [routineNameInput, setRoutineNameInput] = useState("");
  const [goalInput, setGoalInput] = useState("");
  const [checked, setChecked] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();
    const newRoutine = await addRoutine(routineNameInput, goalInput, checked);
    console.log(newRoutine, "This is my new routine")
    if (newRoutine.error){
        alert("Routine already exists");
    } else {
    const result = await getUserRoutines();
    console.log(result, "This is my result")
    setAllRoutines(result);
    setRoutineNameInput("");
    setGoalInput("");
    setChecked(false);
  }}

  function handleChange(event) {
    setChecked(event.target.checked);
  }

  return (
    <div className="AddBox">
      <form className="editForm" onSubmit={handleSubmit}>
      <h4>Add New Routine</h4>
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
          <label className="isPublic" htmlFor="isPublic">
            <input
              id="isPublic"
              type="checkbox"
              name="isPublic"
              checked={checked}
              onChange={handleChange}
            />
            Make Routine Public?
          </label>
        </div>
        <button id="AddButton" type="Submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default CreateRoutine;