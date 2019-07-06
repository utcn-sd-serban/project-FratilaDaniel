import React from "react";

const LogUser = ({ username, password, onLogIn, onChange}) => (
    <div class = "container-fluid">
        <div class = "Jumbotron">
            <h2>Log in</h2>
            <br />
            <div>
                <label>Username: </label>
                &emsp;
                <input value={username} 
                    onChange={ e => onChange("username", e.target.value) } />
                <br />
                <label>Password: </label>
                &emsp;

                <input value={password} 
                    onChange={ e => onChange("password", e.target.value) } />
                <br />
                <br />
                <button class="btn btn-primary" onClick={onLogIn}>Log in!</button>
            </div>
        </div>
    </div>
);

export default LogUser;