import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthContext from './Store/AuthContext';
import SignUp from './Components/SignUp/SignUp';
import { useContext } from 'react';
import Login from './Components/Login/Login';
import HomePage from './Components/Pages/HomePage';
import UpdateProfile from './Components/Pages/UpdateProfile';
import ForgotPassword from './Components/Pages/ForgotPassword';

function App() {
  const authcxt=useContext(AuthContext);

  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
        <  SignUp/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/homepage'>
       {authcxt.isLoggedIn &&<HomePage/>}
       {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
      </Route>
      <Route path='/updateprofile'>
        <UpdateProfile/>
      </Route>
      <Route path='/forgotpassword'>
        <ForgotPassword/>
      </Route>
      </Switch>
    </div>
    );
}

export default App;
