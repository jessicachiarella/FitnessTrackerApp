import React, { useEffect } from "react";
import { addRoutineActivity } from "../api";

const AddRoutineActivity = ({id}) => {

    
async function handleInput(event) {
    event.preventDefault();
    await addRoutineActivity(
        id,
        activityId,
        countInput,
        durationInput);
    const result = await getRoutines();
    setAllRoutines(result);
    setRoutineNameInput("");
    setGoalInput("")
    setChecked(!checked)
  }
}