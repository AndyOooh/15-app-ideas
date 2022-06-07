import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import UserApp from '../../pages/UserApp';
import RPS from '../../pages/RPS';
import Blog from '../../pages/Blog';
import MaterialUI from '../../pages/MaterialUI'
import classes from './Main.module.css';

const Main = props => {
  console.log('Main');
  const mainClasses = `container ${classes.main}  `;
  return (
    <main className={mainClasses}>
      <Switch>
        <Route path='/users-app'>
          <UserApp />
        </Route>
        <Route path='/material-ui'>
          <MaterialUI />
        </Route>
        <Route path='/rps'>
          <RPS />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </main>
  );
};
export default Main;
