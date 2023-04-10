import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import classes from './CandieItemForm.module.css'


export default function CandieItemForm(props){

   const CrtCtx=useContext(CartContext);

   function add1(event){
   event.preventDefault();
   CrtCtx.addItem({...props.item,quantity:1,key:props.id});
   console.log(CrtCtx);
   }
    
   function add2(event){
    event.preventDefault();
    CrtCtx.addItem({...props.item,quantity:2,key:props.id});
    console.log(CrtCtx);
    }

    function add3(event){
        event.preventDefault();
        CrtCtx.addItem({...props.item,quantity:3,key:props.id});
        console.log(CrtCtx);
        }
    return(
            <form className={classes.form} >
                <button onClick={add1}>BUY 1</button>
                <button onClick={add2}>BUY 2</button>
                <button onClick={add3}>BUY 3</button>
            </form>
    )
}