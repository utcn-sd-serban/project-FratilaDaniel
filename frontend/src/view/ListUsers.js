import React from "react";

const ListUsers = ({ users, onBanUser }) => (
    <div>
        <h2>{ "Projects" }</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>UserAttribute</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index} data-cy="student"> 
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.userAttribute}</td>
                            <td><button onClick={() => onBanUser(user.username)}>Ban this guy!</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default ListUsers;