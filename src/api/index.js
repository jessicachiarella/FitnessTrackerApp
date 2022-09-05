const API_URL = "https://fitnesstrac-kr.herokuapp.com/api";


export async function RegisterPerson(event) { 
  try {
    const registerUsername = event.target[0].value;
    const registerPassword = event.target[1].value;
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }

 
}

export async function LoginPerson(event) {
    try {
        const loginUsername = event.target[0].value;
        const loginPassword = event.target[1].value;
        const response = await fetch(`${API_URL}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: loginUsername,
            password: loginPassword,
          }),
        });
        const result = await response.json();
        return result;
      
    } catch (error) {
        throw error
    }
}

  export async function getUser(token) {
    try{
    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
}  catch (error) {
  throw error
}}

export async function getRoutines() {
  try{
    const response = await fetch(`${API_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const routines = await response.json();
    return routines;
}catch (error) {
  throw error
}}

export async function addRoutine(
    routineNameInput,
    goalInput,
    isPublicInput
  ) {
    try{
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: routineNameInput,
        goal: goalInput,
        isPublic: isPublicInput

      }),
    });
    const result = await response.json();
    return result
  } catch (error) {
    throw error
  }}

  export async function updateRoutine(
    id,
    routineNameInput,
    goalInput,
    isPublicInput
  ) {
    try{
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/routines/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: routineNameInput,
        goal: goalInput,
        isPublic: isPublicInput
      }),
    });
    const result = await response.json();
    return result
  }catch (error) {
    throw error
  }}

  export async function deleteRoutine(
    id
  ) {
    try{
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/routines/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result
  }catch (error) {
    throw error
  }}

export async function getUserRoutines() {
  try{
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username")
    const response = await fetch(`${API_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const userRoutines = await response.json();
    return userRoutines;
}catch (error) {
  throw error
}}

export async function getActivities() {
  try{
    const response = await fetch(`${API_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const activities = await response.json();
    return activities;
}catch (error) {
  throw error
}}

export async function addActivity(
    token,
    nameInput,
    descriptionInput
  ) 
  {
    try {
      const response = await fetch(`${API_URL}/activities/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: nameInput,
          description: descriptionInput,
        }),
      });
      const result = await response.json();
      return result
    } catch (error) {
      throw error
    }
    
  }

  export async function updateActivity(
    nameInput,
    descriptionInput,
    activityId
  ) {
    try{
    const response = await fetch(`${API_URL}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput,
        description: descriptionInput,
      }),
    });
    const result = await response.json();
    return result
  }catch (error) {
    throw error
  }}

  export async function addRoutineActivity(
    activityId,
    countInput,
    durationInput,
    routineId
  ) {
    try{
    const response = await fetch(`${API_URL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activityId: activityId,
        count: countInput,
        duration: durationInput

      }),
    });
    const result = await response.json();
    return result
  }catch (error) {
    throw error
  }}

  export async function updateRoutineActivity(
    countInput,
    durationInput,
    rAId
  ) {
    try{
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/routine_activities/${rAId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        count: countInput,
        duration: durationInput
      }),
    });
    const result = await response.json();
    return result
  }catch (error) {
    throw error
  }}

  export async function deleteRoutineActivity(
    rAId
  ) {
    try{
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/routine_activities/${rAId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result
  }catch (error) {
    throw error
  }}