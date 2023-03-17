import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";
import CartContext from "../../Store/CartContext";

export default function HeaderCart(props) {

  const ctx= useContext(CartContext);

let quantity=0;
ctx.items.forEach((item)=>{
    quantity=quantity+Number(item.quantity);
})

  return (
    <button  onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
}
