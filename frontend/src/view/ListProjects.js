import React from "react";

const ListProjects = ({ projects, filterTag, onFilterByCategory, onChangeFilter, onInvest}) => (
    <div>
        <h2>{ "Projects" }</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Needed Sum</th>
                    <th>Invested Sum</th>
                </tr>
            </thead>
            <tbody>
                {
                    projects.map((project, index) => (
                        <tr key={index}> 
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>{project.category}</td>
                            <td>{project.neededSum}</td>
                            <td>{project.investedSum}</td>
                            <td><button onClick={()=>onInvest(project.title)}>Invest 50!</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br/>
        <label>Filter by Category</label>
        &emsp;
            <input value={filterTag} 
                onChange={ e => onChangeFilter(e.target.value) } />
            <br />
        <button onClick={onFilterByCategory}>Filter!</button>
    </div>
);

export default ListProjects;