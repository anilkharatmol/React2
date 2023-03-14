import React from "react";
import Input from "../UI/Input";
import classes from './MealItemForm.module.css'
export default function MealItemForm(props){

    function submitHandler(event) {
        event.preventDefault();
        console.log('submitted');
    }
    
    return(
        <React.Fragment>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input label='Amount' attributes={{id:'amount_'+props.id,type:'number',defaultValue:'1',min:'1',max:'5',step:'1'}}></Input>
                <button type="submit">+ADD</button>
            </form>
        </React.Fragment>
    )
}