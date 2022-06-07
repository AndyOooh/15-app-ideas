import UserItem from './UserItem';
import Card from '../../UI/Card';

import classes from './UserList.module.css';

const UserList = props => {
  console.log('UserList');

  const userList = props.users.map(user => {
    return (
      <UserItem
        className={classes['userlist-item']}
        name={user.name}
        age={user.age}
        key={user.id}
      />
    );
  });

  return (
    <Card extraClasses={[classes.card]} >
      <ul className={classes['users-list']}>{userList}</ul>
    </Card>
  );
};
export default UserList;
