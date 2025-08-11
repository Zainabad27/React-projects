
import React, { useState, useContext } from "react";
import usercontext from "../context/usercontext.js";
const Profile = () => {
    const {user}=useContext(usercontext);

    if(!user || user.username==="") return <><h1>Please Login.</h1></>


    return (
    <>
    <div>

        <h1>Hello, Welcome to the Homepage {user.username}</h1>
    </div>
    </>
    );
};

export default Profile;
