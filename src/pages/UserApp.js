import { useState } from 'react';

import AddUser from '../components/UserApp/AddUser';
import UsersList from '../components/UserApp/UsersList';
import classes from './UserApp.module.css';

const UserApp = () => {
  const [users, setUsers] = useState([]);
  console.log('users', users);

  const addUserHandler = (userName, userAge) => {
    console.log('addUserHandler');
    setUsers(prev => {
      return [...prev, { name: userName, age: userAge, id: Math.random() }];
    });
  };

  return (
    <div className={classes['userapp-wrapper']}>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
};
export default UserApp;
