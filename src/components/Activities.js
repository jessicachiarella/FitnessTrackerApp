import React, { useEffect } from "react";
import { getActivities, addActivity } from "../api/index";
import "./Activities.css"

const Activities = ({ loggedIn, allActivities, setAllActivities, nameInput, setNameInput, descriptionInput, setDescriptionInput }) => {
  useEffect(() => {
    getActivities().then((results) => {
      setAllActivities(results);
    });
  }, []);

  const token = localStorage.getItem("token");
  async function handleSubmit(event){
    event.preventDefault();
    await addActivity(
        token,
        nameInput,
        descriptionInput
    );
    const result = await getActivities();
    setAllActivities(result);
    setNameInput("");
    setDescriptionInput("")
  }


        if(loggedIn){
            return(
        <div id="ActivityBox">   
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
          {allActivities.length ? allActivities.map((element) => {
            const { id, name, description } = element
            const activityId = id
          return (
            <div key={activityId} className="activities">
              <h4 id="activityName">Activity:{name}</h4>
              <p id="Description">Description: {description}</p>

              {/* <NavLink to={`/activities/${activityId}`} className="editlink1">
            EDIT
          </NavLink> */} 
            </div>
          );
        }): <div> Loading your activities.... </div>}
        </div>
        </div>)
      }else{
        return (
            <div id="LoggedOutForm">
            <h1>WELCOME TO ACTIVITIES</h1>
        <div>
        {allActivities.length ? allActivities.map((element) => {
          const { id, name, description } = element
          const activityId = id
          return (
            <div key={activityId} className="NewActivitiesBox">
              <h4 id="activityName">Activity:{name}</h4>
              <p id="Description">Description: {description}</p>

              {/* <NavLink to={`/activities/${activityId}`} className="editlink2">
            EDIT
          </NavLink>  */}
            </div>
          );
        }): <div> Loading your activities...</div>}
      </div>
      
      
      
    </div>
  );
};
}

export default Activities;
