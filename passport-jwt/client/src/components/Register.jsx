import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, SetPassword] = useState("");

    const handlesubmit = () => {
        axios.post("http://localhost:3000/register", { username, password })
            .then(() => {
                console.log("data send successfully");
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
                navigate("/register");
            })
    }
    return (
        <div>
            <h1>register page</h1>
            <input type="text" placeholder='username' value={username}
                onChange={(e) => { setUsername(e.target.value) }} />
            <input type="password" placeholder='password' value={password}
                onChange={(e) => { SetPassword(e.target.value) }} />
            <button type='submit' onClick={handlesubmit}>submit</button>
        </div>
    )
}

export default Register