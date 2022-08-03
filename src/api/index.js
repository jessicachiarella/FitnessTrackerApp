const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

export async function RegisterPerson(event) {
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
}

export async function LoginPerson(event) {
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
  const token = result.token;
  return token;
}

  export async function getUser(token) {
    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result, "This is my me resssssssssssssult")
    return result;
}

export async function getRoutines() {
    const response = await fetch(`${API_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const routines = await response.json();
    return routines;
}

export async function addRoutine(
    routineNameInput,
    goalInput,
    isPublicInput
  ) {
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
    console.log(result, "This is my addroutine from my api call")
    return result
  }
  export async function updateRoutine(
    id,
    routineNameInput,
    goalInput,
    isPublicInput
  ) {
    console.log(id, "This is my id from my update routine api call")
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
    console.log(result, "This is my editroutine from my api call")
    return result
  }

export async function getUserRoutines(username) {
    const response = await fetch(`${API_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const userRoutines = await response.json();
    return userRoutines;
}

export async function getActivities() {
    const response = await fetch(`${API_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const activities = await response.json();
    console.log(activities, "This is my activities from my api call")
    return activities;
}

export async function addActivity(
    token,
    nameInput,
    descriptionInput
  ) {
    const response = await fetch(`${API_URL}/activities`, {
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
  }

  export async function updateActivity(
    nameInput,
    descriptionInput,
    activityId
  ) {
    console.log(activityId, "This is my id from my edit api call")
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
  }