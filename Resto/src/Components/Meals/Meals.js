import React from "react";
import MealsList from "./MealsList";
import Summary from "./Summary";

export default function Meals(props){
    return(
        <React.Fragment>
            <Summary/>
            <MealsList />
        </React.Fragment>
    )
}