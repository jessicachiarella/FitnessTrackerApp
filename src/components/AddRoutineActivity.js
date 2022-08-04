import React, { useState, useEffect } from "react";
import { matchRoutes } from "react-router-dom";
import { addRoutineActivity, getActivities } from "../api";

const AddRoutineActivity = ({ id, allActivities, setAllActivities }) => {
  const [countInput, setCountInput] = useState("");
  const [durationInput, setDurationInput] = useState("");
  const [selectActivity, setSelectActivity] = useState("");


  async function handleSubmit(event) {
    event.preventDefault();
    const array = await getActivities();
    array.map(({id}) =>{return id})
    const activityId = id
    await addRoutineActivity(activityId, countInput, durationInput);
    const result = await getActivities();
    setAllActivities(result);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="selectactivity">Choose an activity:</label>
          <select name="activity" id="searchactivity" value={selectActivity} onChange={(event) => {
          setSelectActivity(event.target.value);
        }}>
        {allActivities.map((element, index) => {
            const { name } = element
            return(<option key={`${index}:${name}`} value={name}>
                {name}
            </option>)
        })}
          </select>
        </div>
        <div>
          <input
            id="Count"
            placeholder="Count"
            value={countInput}
            onChange={(event) => {
              setCountInput(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            id="Duration"
            placeholder="Duration"
            value={durationInput}
            onChange={(event) => {
              setDurationInput(event.target.value);
            }}
          />
        </div>
        <button id="AddButton" type="Submit">
          CREATE ACTIVITY
        </button>
      </form>
    </div>
  );
};

export default AddRoutineActivity;
