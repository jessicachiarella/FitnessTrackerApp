import React, { useEffect } from "react";
import { getUserRoutines } from "../../api/index";
import CreateRoutine from "../CreateRoutine";
import EditRoutine from "../EditRoutine";
import DeleteRoutine from "../DeleteRoutine";
import AddRoutineActivity from "../AddRoutineActivity";
import EditRoutineActivity from "../EditRoutineActivity";
import DeleteRoutineActivity from "../DeleteRoutineActivity";

const MyRoutines = ({
  username,
  loggedIn,
  allRoutines,
  setAllRoutines,
  allActivities,
  setAllActivities,
}) => {
  useEffect(() => {
    getUserRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, [allActivities]);

  if (loggedIn) {
    console.log(username, "username")
    return (
      <div>
          <h1 className="MyRoutines">MY ROUTINES</h1>
          <div className="Container">
          <div className="centerBox">
        <CreateRoutine
          allRoutines={allRoutines}
          setAllRoutines={setAllRoutines}
        />
        {allRoutines.length ? (
          allRoutines.map((element) => {
            const { id, name, goal, creatorName, activities } = element;
            const routineId = id;
            if (creatorName === username) {
              return (
                <div key={routineId} className="Routines">
                  <h2 id="Name">{name}</h2>
                  <p id="Goal">Goal: {goal}</p>
                  <p id="creatorName">Creator Name: {creatorName}</p>
                  <EditRoutine
                    routineId={routineId}
                    allRoutines={allRoutines}
                    setAllRoutines={setAllRoutines}
                  />
                  <div className="ActivityBox">
                  <div>
                    {activities.length
                      ? activities.map((element) => {
                          const {
                            id,
                            name,
                            description,
                            count,
                            duration,
                            routineActivityId,
                          } = element;
                          const activityId = id;
                          const rAId = routineActivityId;
                          return (
                            <div key={activityId} className="activities">
                              <h4 id="activityName">{name}</h4>
                              <p id="Description">Description: {description}</p>
                              <p id="Count">Count: {count}</p>
                              <p id="Duration">Duration: {duration}</p>
                              <EditRoutineActivity
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                rAId={rAId}
                              />
                              <DeleteRoutineActivity
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                rAId={rAId}
                              />
                            </div>
                          );
                        })
                      : null}
                  </div>
                  </div>
                  <AddRoutineActivity
                    routineId={routineId}
                    allActivities={allActivities}
                    setAllActivities={setAllActivities}
                  />
                  <DeleteRoutine
                    routineId={routineId}
                    setAllRoutines={setAllRoutines}
                  />
                </div>
              );
            }
          })
        ) : (
          <div> Loading your routines...</div>
        )}
      </div>
      </div>
      </div>
    );
  }
};

export default MyRoutines;