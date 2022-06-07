import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';
import HeaderButtons from './HeaderButtons';
import Logo from '../../assets/logo_transparent.png';
import classes from './Header.module.css';

const Header = props => {
  console.log('Header');

  return (
    <div className={classes['header-wrapper']}>
      <header className={`container ${classes.header}`}>
        <NavLink to='/' className={classes.logo}>
          <img src={Logo} alt='logo'></img>
        </NavLink>
        <Navigation />
        <div className={classes.actions}>
          <HeaderButtons />
        </div>
      </header>
    </div>
  );
};
export default Header;
