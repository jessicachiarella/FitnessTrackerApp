import React from "react";
import { deleteRoutine, getRoutines } from "../api";

const DeleteRoutine = ({ id, setAllRoutines }) => {
  async function handleDelete(event) {
    event.preventDefault();
    await deleteRoutine(id);
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
