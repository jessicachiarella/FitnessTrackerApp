import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Register, Header, Login, Me } from "./";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <>
        <Routes>
          <Route path="/users/register" element={<Register />} />
          <Route
            path="/users/Login"
            element={
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/users/me" element={<Me />} />
        </Routes>
      </>
    </div>
  );
};
export default App;
