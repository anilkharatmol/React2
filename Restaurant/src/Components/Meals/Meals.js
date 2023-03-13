import React from "react";
import MealsList from "./MealsList";
import Summary from "./Summary";

export default function Meals(){
    return(
        <React.Fragment>
            <Summary/>
            <MealsList/>
        </React.Fragment>
    )
}