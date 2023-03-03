import React, { useState } from 'react';

import './CourseInput.css';
import Button from '../../UI/Button/Button.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const[isValid,setisValid]=useState(true);


  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisValid(false);
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
    <button className={`button ${!isValid ? ' invalid':''}`} type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
