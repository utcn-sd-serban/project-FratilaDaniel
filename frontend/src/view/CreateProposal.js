import React from "react";

const CreateProposal = ({ onCreate , onChange, innovatorUsername, description, investorUsername}) => (
    <div class = "container-fluid">
        <div>
            <h2>Make a proposal</h2>        
            <br/>
            <div>
                <label>Username: </label>
                &emsp;
                <input value={innovatorUsername} onChange={ e => onChange("innovatorUsername", e.target.value) } />
                <br />
    
                <label>Describe your intentions: </label>
                &emsp;
                <input value={description} onChange={ e => onChange("description", e.target.value) } />
                <br />
                
                <button onClick={e=>onCreate(investorUsername)}>Send proposal!</button>
                <br />
                
            </div>
        </div>
    </div>
);

export default CreateProposal;