import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

export default function Cart(){

    const cartItems=(
        <ul className={classes['cart-items']}>
            {[{id:'1',name:'Sushi',amount:'2',price:'100'}].map((item)=>(<li>{item.name}</li>))}</ul>);

    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
            <span>Amount</span>
            <span> 20</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}