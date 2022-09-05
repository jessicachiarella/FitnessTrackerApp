import React from "react";
import { deleteRoutine, getUserRoutines } from "../api";


const DeleteRoutine = ({ routineId, setAllRoutines }) => {
  async function handleDelete(event) {
    event.preventDefault();
    await deleteRoutine(routineId);
    const result = await getUserRoutines();
    setAllRoutines(result);
  }
  return (
    <form onSubmit={handleDelete}>
      <button id="deleteButton" type="Submit">
        DELETE ROUTINE
      </button>
    </form>
  );
};

export default DeleteRoutine;
