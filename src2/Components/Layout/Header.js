import React from "react";

import restobackground from '../../Assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCart from "./HeaderCart";

export default function Header(){
    return(
        <React.Fragment>
            <header className={classes.header}>
            <h1 style={{color:"white",fontSize:"20px",backgroundImage:"revert"}}>ReactMeals</h1>
            <HeaderCart></HeaderCart>
            </header>
            <div className={classes['main-image']}>
            <img src={restobackground} alt="a"></img>
            </div>
        </React.Fragment>
    )
}