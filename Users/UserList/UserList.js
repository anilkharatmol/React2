import React from 'react';

import './UserList.css';

const UserList = props => {
  return (
    <ul className="user-list">
      {props.items.map(user => (
        <li className='user-item'
          key={user.id}
          id={user.id}
        >
          {user.username} ({user.age} Years old) {user.college}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
