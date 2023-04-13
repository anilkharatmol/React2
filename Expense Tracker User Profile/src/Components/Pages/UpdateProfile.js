import React, { useContext, useRef } from "react";
import classes from './UpdateProfile.module.css'
import AuthContext from "../AuthContext";
import { NavLink } from "react-router-dom";

export default function UpdateProfile(){

    const nameRef=useRef('');
    const urlRef=useRef('');
    
    const authcxt=useContext(AuthContext);
   async function submitHandler(event){
            event.preventDefault();
            const enteredName=nameRef.current.value;
            const enteredUrl=urlRef.current.value;

           const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8',
            {
              method:'POST',
              body:JSON.stringify({
                idToken:authcxt.token,
                displayName:enteredName,
                photoUrl:enteredUrl,
                returnSecureToken:true
              }),
                headers:{
                  'Content-Type':'application/json'
              }
            })
            
            const data=await response.json();

            console.log(data+  '  details updated successfully'); 
          
    }

    return(
        <React.Fragment>
            <h2 style={{textAlign:'left'}}>Winners never quit,Quitters never win.</h2>
            <hr></hr>
                    <h2 className={classes.h2}>Contact details <button style={{float:'right',border:'2px solid red',color:'red',fontSize:'20px'}}> <NavLink to='/homepage'>Cancel</NavLink></button></h2>       
            <div className={classes.form} >
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" ref={nameRef}></input>
                    <label htmlFor="photo">Profile Photo URL:</label>
                    <input type="text" id='photo' ref={urlRef}></input>
                    <br></br>
                    <button type="submit">Update</button>
                </form>
                <hr/>
            </div>
        </React.Fragment>
    )
}