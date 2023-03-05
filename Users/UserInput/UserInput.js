import React, { useState, useRef } from "react";

import "./UserInput.css";
import Button from "../../UI/Button/Button";
import Error from "../../UI/Button/Error";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredAge, setEnteredAge] = useState("");

  function ageInputChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  const[collegeName,setCollegeName]=useState("");

  function collegeNameInputHandler(event){
    setCollegeName(event.target.value);
  }

  const [isValid, setisValid] = useState();

  const formSubmitHandler = (event) => {
    console.log(nameInputRef.current.value);
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setisValid({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setisValid({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    setEnteredName("");
    setEnteredAge("");
    setCollegeName("");
    props.onAddUser(enteredName, enteredAge,collegeName);
  };

  function rem() {
    setisValid(null);
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={enteredName}
            onChange={nameInputChangeHandler}
            ref={nameInputRef}
          />
          <label>Age(Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageInputChangeHandler}
            ref={ageInputRef}
          />
          <label>College Name</label>
          <input
            type="text"
            id="collegename"
            value={collegeName}
            onChange={collegeNameInputHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
      {isValid && (
        <Error
          title={isValid.title}
          message={isValid.message}
          onRemove={rem}
        ></Error>
      )}
    </div>
  );
};

export default UserInput;

  /* {(isValid && <button className='button' type="submit">Add User</button>)}
{(!isValid && 
  <div>
    <div>
    <button className='button' type="submit" onClick={remove}>Add User</button>
    <h1 style={{color:'red',fontSize:'20'}}>Invalid input</h1>
    <p>Please enter valid name and age</p>
    <button onClick={remove}>OK</button>
    </div>
  </div>
  )}
  {(!validAge && 
    <div>
    <h1 style={{color:'red',fontSize:'20'}}>Invalid age</h1>
    <p>Please enter valid age greater than 0</p>
    <button>OK</button>
    </div>
  )} */

