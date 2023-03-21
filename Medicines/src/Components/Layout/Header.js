import React from "react";

import Medicines from '../../Assets/Medicines.jpg'
import classes from './Header.module.css';
import HeaderCart from "./HeaderCart";

export default function Header(props){

 
    return(
        <React.Fragment>
            <header className={classes.header}>
            <h1 >Medicines</h1>
            <HeaderCart onClick={props.onShowCart}></HeaderCart>
            </header>
            <div className={classes['main-image']}>
            <img src={Medicines} alt="a"></img>
            </div>
        </React.Fragment>
    )
}