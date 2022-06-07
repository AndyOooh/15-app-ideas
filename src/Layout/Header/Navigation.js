import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = props => {
  console.log('Navigation');
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/users-app'>Userslist App</NavLink>
        </li>
        <li>
          <NavLink to='/material-ui'>Material UI</NavLink>
        </li>
        <li>
          <NavLink to='/rps'>RPS Game</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
