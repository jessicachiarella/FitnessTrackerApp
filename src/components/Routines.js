import React, { useEffect } from "react";
import { getRoutines } from "../api/index";


const Routines = ({ allRoutines, setAllRoutines }) => {
  useEffect(() => {
    getRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, [allRoutines]);

  return (
    <div id="RoutineBox">
      <h1 className="PageHeader" id="ProfileHeader">
        WELCOME TO ROUTINES
      </h1>

      <div className="Container">
        <div className="centerBox">
          {allRoutines.length ? (
            allRoutines.map((element) => {
              const { id, name, isPublic, goal, creatorName, activities } =
                element;
              if (isPublic) {
                return (
                  <div className="Routines" key={id}>
                    <h2 id="Name">{name}</h2>
                    <p id="Goal">Goal: {goal}</p>
                    <p id="creatorName">Creator Name: {creatorName}</p>

                    <div className="activityBox">
                      {activities.map(
                        ({ id, name, description, count, duration }) => {
                          return (
                            <div key={id} className="Activity">
                              <h4 id="activityName">{name}</h4>
                              <p id="Description">Description: {description}</p>
                              <p id="Count">Count: {count}</p>
                              <p id="Duration">Duration: {duration}</p>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <div> Loading your routines... </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Routines;
