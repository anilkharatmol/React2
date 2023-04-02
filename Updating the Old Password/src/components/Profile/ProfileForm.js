import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../Store/AuthContext';

const ProfileForm = () => {
const passwordRef=useRef();


const authcxt=useContext(AuthContext);
  function submitHandler(event){
    event.preventDefault();
    const enteredPassword=passwordRef.current.value;

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8',{
        method:'POST',
        body:JSON.stringify({
          password:enteredPassword,
          idToken:authcxt.token,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'applicaion/json'
        }
      }).then((res)=>{if(res.ok){ alert('Password changed successfully')}}).catch(err=>{alert(err)});
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
