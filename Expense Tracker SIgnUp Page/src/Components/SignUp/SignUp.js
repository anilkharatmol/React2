import { useContext, useRef } from 'react';
import classes from './SignUp.module.css';
import AuthContext from '../AuthContext';

export default function SignUp(){

    const authcxt=useContext(AuthContext);
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const confirmPasswordRef=useRef('');

    function submitHandler(event){
        event.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value;
        const enteredConfirmPassword=confirmPasswordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8',
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
              if(response.ok && enteredPassword===enteredConfirmPassword){
                 return response.json();
              }
              else{
                let errormessage='Authentication Failed!'
                throw new Error(errormessage);
               
              }
            }).then((data)=>{ authcxt.login(data.idToken); console.log('User has successfully signed up');}).catch(err=>{alert(err.message)})
    }

    return(
        <div className={classes.form}>
            <form onSubmit={submitHandler}>
                <h1>Sign up</h1>
                <div className={classes.control}>
                <input type="email" placeholder="Email" required ref={emailRef}></input><br/>
                <input type="password" placeholder="Password" minLength="8" required ref={passwordRef}></input><br/>
                <input type="password"  placeholder="Confirm Password" required ref={confirmPasswordRef}></input>
                </div>
                <div className={classes.actions}>
                <button>Sign up</button>
                </div>
            </form>
            <h4>Have an account?Login</h4>
        </div>
    
    )
}