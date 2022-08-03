import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({setLoggedIn}) => {
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedIn(false)
        navigate("/Home")
    }
    )

    return (
        <div>
            <h2>Log Out</h2>
        </div>
    );
}

export default Logout;