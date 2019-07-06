import React from "react";

const CreateProject = ({ title, description, category, onCreate, onChange }) => (
    <div>
        <h2>Create new project</h2>
        <div>
            <label>Title: </label>
            <input value={title} 
                onChange={ e => onChange("title", e.target.value) } />
            <br />
            <label>Short description: </label>
            <input value={description} 
                onChange={ e => onChange("description", e.target.value) } />
            <br />
            <label>Category: </label>
            <input value={category} 
                onChange={ e => onChange("category", e.target.value) } />
            <br />

            <button onClick={onCreate} data-cy="create">Create!</button>
        </div>
    </div>
);

export default CreateProject;