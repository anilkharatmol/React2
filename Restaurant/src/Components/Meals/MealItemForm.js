import React from "react";

export default function MealItemForm(){

    function submitHandler()
    {
        console.log('submitted');
    }
    
    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <h4>Amount</h4>
                <input type="number" step="1" ></input>
                <button type="submit">+ADD</button>
            </form>
        </React.Fragment>
    )
}