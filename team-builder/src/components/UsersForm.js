import React, { useState } from "react";

const UsersForm = props => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addNewUser(user);
        setUser({ name:'', email:'', role:'' });
    };

    return(
        <form onSubmit={event => handleSubmit(event)}>
            <label>
                Name: <input type="text" name="name" value={user.name} onChange={event => handleChange(event)} />
            </label>
            <br/>
            <label>
                Email: <input type="text" name="email" value={user.email} onChange={event => handleChange(event)} />
            </label>
            <br/>
            <label>
                Role: <input type="text" name="role" value={user.role} onChange={event => handleChange(event)} />
            </label>
            <br/>
          <button>Submit</button>
        </form>
    )

};

export default UsersForm;