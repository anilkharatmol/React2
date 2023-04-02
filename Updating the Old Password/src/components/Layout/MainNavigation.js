import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../Store/AuthContext';

const MainNavigation = () => {
  const authcntxt=useContext(AuthContext);

  const isLoggedIn=authcntxt.isLoggedIn;


  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn&&
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          }
          {isLoggedIn &&
          <li>
            <Link to='/profile'>Profile</Link>
          </li>}
           {isLoggedIn &&
          <li>
            <button onClick={authcntxt.logout}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
