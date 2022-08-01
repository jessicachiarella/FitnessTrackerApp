import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
             <Header loggedIn={loggedIn} />
        </div>
    )
}
export default App;