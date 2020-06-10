import React from "react";

const Users = props => {
    return (
        <div>
            {props.user.map(user => (
                <div className="user" key={user.id}>
                    <h2>Name: {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;