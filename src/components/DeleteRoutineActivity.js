import React from "react";
import { deleteRoutineActivity, getActivities } from "../api";

const DeleteRoutineActivity = ({ rAId, setAllActivities }) => {
  async function handleDelete(event) {
    event.preventDefault();
    await deleteRoutineActivity(rAId);
    const result = await getActivities();
    setAllActivities(result);
  }
  return (
    <form onSubmit={handleDelete}>
      <button id="deleteButton" type="Submit">
        DELETE ACTIVITY
      </button>
    </form>
  );
};

export default DeleteRoutineActivity;
