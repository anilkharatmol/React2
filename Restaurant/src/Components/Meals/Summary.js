import React from "react";
import classes from "./Summary.module.css";

export default function Summary() {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food,Delivered to you</h1>
      <p >
        Choose Your favourite meal from our broad selection of availablemeals
        and enjoy a delicious lunch or dinnner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients,just-in-time and
        of course by experienced chefs.
      </p>
    </section>
  );
}
