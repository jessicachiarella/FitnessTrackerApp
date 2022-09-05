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