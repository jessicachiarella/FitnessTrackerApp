const API_URL =  "https://fitnesstrac-kr.herokuapp.com/api/";

export async function RegisterPerson(event) {
    const registerUsername = event.target[0].value;
    const registerPassword = event.target[1].value;
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: registerUsername,
          password: registerPassword,
        },
      }),
    });
  
    const result = await response.json();
    return result;
  }