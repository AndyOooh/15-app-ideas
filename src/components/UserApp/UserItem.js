import classes from './UserItem.module.css';

const UserItem = props => {
  return (
    <li className={classes['userlist-item']}>
      <p>{`${props.name}: ${props.age}`}</p>
    </li>
  );
};

export default UserItem;
