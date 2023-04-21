import { useContext,useRef } from 'react';
import AuthContext from '../../Store/AuthContext';
import classes from '../SignUp/SignUp.module.css';
import { NavLink, useHistory } from 'react-router-dom';


export default function Login(){
    
    const history=useHistory();
    const authcxt=useContext(AuthContext);
    const emailRef=useRef('');
    const passwordRef=useRef('');

    function submitHandler(event){
        event.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value;

        localStorage.setItem('email',enteredEmail);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8',
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
              if(response.ok){
                 return response.json();
              }
              else{
                return response.json().then(()=>{
                    let errormessage='Authentication Failed!'
                  
                    throw new Error(errormessage);
                    })
               
              }
            }).then((data)=>{ authcxt.login(data.idToken); console.log(` User has successfully loggen in`)
           history.replace('/homepage') ;}).catch(err=>{alert(err.message)})
        }

        
    return(
        <div className={classes.form}>
        <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div className={classes.control}>
            <input type="email" placeholder="Email" required ref={emailRef}></input><br/>
            <input type="password" placeholder="Password" required ref={passwordRef}></input><br/>
           <NavLink to='/forgotpassword' >Forgot password?</NavLink>
            </div>
            <div className={classes.actions}>
            <button>Login</button>
            </div>
        </form>
        <h4>Don't have an account?<NavLink to='/'>Signup</NavLink></h4>
    </div>
    )
}