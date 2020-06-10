import React, { useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import Users from './components/Users'

function App() {

  const [users, setUser] = useState ([
    {
      id: 1,
      name: "Luis Rodriguez",
      email: "luigirodriguez21@yahoo.com",
      role: "Full Stack Web Developer"
    }
  ]);

  const addNewUser = user => {
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      role: user.role
    };

    setUser([...users, newUser])

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
        <UsersForm addNewUser={addNewUser} />
        <Users user={users} />
      </header>
    </div>
  );
};

export default App;
