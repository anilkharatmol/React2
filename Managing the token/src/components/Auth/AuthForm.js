import React, { useContext, useRef, useState } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../Store/AuthContext';

const AuthForm = () => {
  const emailRef=useRef('');
  const passwordRef=useRef('');

  const [isLogin, setIsLogin] = useState(true);

  
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const[isLoading,setIsLoading]=useState(false);

const authcxt=useContext(AuthContext);

function submitHandler(event){
  event.preventDefault();

  const enteredEmail=emailRef.current.value;
  const enteredPassword=passwordRef.current.value;

  setIsLoading(true);
  let url;

  if(isLogin){
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8'   
  }
  else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8';
  }

    fetch(url,
    {
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
        headers:{
          'Content-Type':'application/json'
      }
    }).then(response=>{
      setIsLoading(false);
      if(response.ok){
         return response.json();
      }
      else{
        return response.json().then(()=>{
        let errormessage='Authentication Failed!'
      
        throw new Error(errormessage);
        })
      }
    }).then((data)=>{ authcxt.login(data.idToken) }).catch(err=>{alert(err.message)})
  


  
}


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading &&<button>{isLogin ? 'Login' : 'Sign Up'}</button>}
          {isLoading && <h2>Sending request...</h2>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
         
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
