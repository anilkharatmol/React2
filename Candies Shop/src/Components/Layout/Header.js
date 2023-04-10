import React from "react";

import CandieShop from '../../Assets/CandieShop.avif'
import classes from './Header.module.css';
import HeaderCart from "./HeaderCart";

export default function Header(props){

 
    return(
        <React.Fragment>
            <header className={classes.header}>
            <h1 >Candie Shop</h1>
            <HeaderCart onClick={props.onShowCart}></HeaderCart>
            </header>
            <div className={classes['main-image']}>
            <img src={CandieShop} alt="a"></img>
            </div>
        </React.Fragment>
    )
}