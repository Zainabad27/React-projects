
import React, { useState,useContext } from "react";
import usercontext from "../context/usercontext.js";

const Login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const { setuser } = useContext(usercontext)
    const submithandler = (e) => {
        e.preventDefault();

        setuser({ username, password })

    }
    return (

        <>
            <div>
                <h1>Login</h1>
                <input value={username} onChange={(e) => { setusername(e.target.value) }} type="text" placeholder="username" />
                <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="text" placeholder="password" />
                <button onClick={submithandler}>Login</button>
            </div>
        </>
    );
};

export default Login;
