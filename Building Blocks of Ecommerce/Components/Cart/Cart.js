import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

  // let cartItems;
  // for (let i = 0; i < crtctx.items.length; i++) {
  //     cartItems=<ul className={classes['cart-items']}>
  //     {<li>{crtctx.items[i].name} {crtctx.items[i].description} {crtctx.items[i].price} {crtctx.items[i].quantity} {crtctx.items[i].key} </li>}</ul>
  // }

  // let qty=1;
  // function reduceQuantity(){
  //     crtctx.items.forEach((item)=>{
  //         qty+=Number(item.quantity);
  //     })
  // }

export default function Cart(props) {
  const crtctx = useContext(CartContext);

  let price = 0;
  crtctx.items.forEach((item)=> {
    price += (Number(item.price)*Number(item.quantity))
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {crtctx.items.map((item) => (
        <li key={item.id} >
          <h2>{item.name} </h2><h3 style={{color:"#06628a"}}>Rs {item.price}</h3> 
          <h3 style={{color:"#06628a"}}>X {item.quantity}</h3>   
          <div className={classes.actions}>
          <button onClick={()=>{crtctx.removeItem(item)}} className={classes["button--alt"]}>
          -
        </button>
        <button onClick={()=>{crtctx.addItem(item)}} className={classes["button--alt"]}>
          +
        </button>
          </div>
          <hr></hr>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>Rs {price}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
