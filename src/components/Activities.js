import React, { useEffect } from "react";
import { getActivities, addActivity } from "../api/index";

const Activities = ({ allActivities, setAllActivities, nameInput, setNameInput, descriptionInput, setDescriptionInput }) => {
  useEffect(() => {
    getActivities().then((results) => {
      setAllActivities(results);
    });
  }, []);

  const token = localStorage.getItem("token");
  async function handleSubmit(event){
    event.preventDefault();
    const freshActivity = await addActivity(
        token,
        nameInput,
        descriptionInput
    );
    setAllActivities([freshActivity, ...allActivities]);
  }
        if(token){
            return(
        <div>   
        <div id="AddForm">
          <div>
            <h1>WELCOME TO ACTIVITIES</h1>
            <h1>Add New Activity</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="AddName"
                placeholder="Name"
                value={nameInput}
                onChange={(event) => {
                  setNameInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="AddDescription"
                placeholder="Description"
                value={descriptionInput}
                onChange={(event) => {
                  setDescriptionInput(event.target.value);
                }}
              />
            </div>
            <button id="AddButton" type="Submit">
              CREATE ACTIVITY
            </button>
          </form>
          {allActivities.map(({ id, name, description }) => {
          return (
            <div key={id} className="activities">
              <h4 id="activityName">Activity:{name}</h4>
              <p id="Description">Description: {description}</p>
            </div>
          );
        })}
        </div>
        </div>)
      }else{
        return (
            <div>
        <div>
        {allActivities.map(({ id, name, description }) => {
          return (
            <div key={id} className="activities">
              <h4 id="activityName">Activity:{name}</h4>
              <p id="Description">Description: {description}</p>
            </div>
          );
        })}
      </div>
      
      
      
    </div>
  );
};
}

export default Activities;
