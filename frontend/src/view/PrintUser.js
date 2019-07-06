import React from "react";

const PrintUser = ({ username, userAttribute, onLogOut}) => (
    <div>
        <label>Logged in as user: <b>{username}</b> with role: <b>{userAttribute}</b></label>
        <button onClick={onLogOut}>Log out</button>
    </div>
);

export default PrintUser;