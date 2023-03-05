import React, { useState } from 'react';

import UserList from './components/Users/UserList/UserList';
import UserInput from './components/Users/UserInput/UserInput';
import './App.css';

const App = () => {
  const [Users, setUsers] = useState([]);

  const addUserHandler = (enteredText,enteredage,collegeName) => {
    setUsers(() => {
      const updatedUsers = [];
      updatedUsers.unshift({ username: enteredText, age:enteredage, college:collegeName, id: Math.random().toString() });
      return updatedUsers;
    });
  };


  let content='';  

  if (Users.length > 0) {
   content = (
      <UserList items={Users}  />
    );
  }

  return (
    <div>
      <section id="User-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="Users">
        {content}
      </section>
    </div>
  );
};

export default App;
