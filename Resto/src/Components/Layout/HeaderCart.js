import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";

export default function HeaderCart() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
}
