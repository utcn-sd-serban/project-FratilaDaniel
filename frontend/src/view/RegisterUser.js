import React from "react";

const LogUser = ({ newUsername, newPassword, newUserAttribute, onChange, onSignUp }) => (
    <div class = "container-fluid">
        <div>
            <h2>Or sign up</h2>        
            <br/>
            <div>
                <label>Username: </label>
                &emsp;
                <input value={newUsername} onChange={ e => onChange("newUsername", e.target.value) } />
                <br />
    
                <label>Password: </label>
                &emsp;
                <input value={newPassword} onChange={ e => onChange("newPassword", e.target.value) } />
                <br />
                
                <label>Sign up as: </label>
                &emsp;
                <br/>
                <label>
                    <input type = "radio" value = "innovator" checked = {newUserAttribute === "innovator"} onChange = {e => onChange("newUserAttribute", e.target.value)}/>Innovator
                </label>
                &emsp; &emsp;
                <label>
                    <input type = "radio" value = "investor" checked = {newUserAttribute === "investor"} onChange =
                     {e => onChange("newUserAttribute", e.target.value)}/>Inventor
                </label>
                <br/>
               
                <button class="btn btn-primary" onClick={onSignUp}>Sign up!</button>
                <br />
                
            </div>
        </div>
    </div>
);

export default LogUser;