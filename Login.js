import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../context/Input";

function emailReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
}

function passwordReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState("");
  const [CollegeIsValid, setCollegeIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(()=>{
  //  const effect= setTimeout(() => {
  //   console.log('run');
  //     setFormIsValid(
  //       enteredCollege.trim().length > 0 &&
  //         enteredEmail.includes("@") &&
  //         enteredPassword.trim().length > 6
  //     )
  //   }, 1000);
  //     return(()=>{
  //       console.log('stop');
  //       clearTimeout(effect);
  //     });
  //   },[enteredCollege,enteredEmail,enteredPassword])

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      enteredCollege.trim().length > 0 &&
        event.target.value.includes("@") &&
        passwordState.isValid
    );
  };

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      enteredCollege.trim().length > 0 &&
        emailState.isValid &&
        event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "USER_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "USER_BLUR" });
  };

  function collegeNameHandler(event) {
    setEnteredCollege(event.target.value);
    setFormIsValid(
      passwordState.isValid &&
        emailState.isValid &&
        event.target.value.trim().length > 0
    );
  }

  function validateCollegeHandler() {
    setCollegeIsValid(enteredCollege.trim().length > 0);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          label="Email id"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          type="password"
          id="password"
          label="Password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <Input
          type="text"
          id="college"
          label="College Name"
          isValid={CollegeIsValid}
          value={enteredCollege}
          onChange={collegeNameHandler}
          onBlur={validateCollegeHandler}
        ></Input>
        {/* <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        {/* <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        {/* <div
          className={`${classes.control} ${
            CollegeIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="collegename">College Name</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeNameHandler}
            onBlur={validateCollegeHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
