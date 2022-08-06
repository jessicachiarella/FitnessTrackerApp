import React from "react";
import { deleteRoutine, getRoutines } from "../api";
import "./DeleteRoutine.css";

const DeleteRoutine = ({ routineId, setAllRoutines }) => {
  async function handleDelete(event) {
    event.preventDefault();
    await deleteRoutine(routineId);
    const result = await getRoutines();
    setAllRoutines(result);
  }
  return (
    <form onSubmit={handleDelete}>
      <button id="deleteButton" type="Submit">
        DELETE
      </button>
    </form>
  );
};

export default DeleteRoutine;
