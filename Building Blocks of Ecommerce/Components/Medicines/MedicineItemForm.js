import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Input from "../UI/Input";
import classes from './MedicineItemForm.module.css'


export default function MedicineItemForm(props){

   const CrtCtx=useContext(CartContext);

   function addItemToCart(event){
       event.preventDefault();
    const quantity=document.getElementById('amount_'+props.id).value;
    CrtCtx.addItem({...props.item,quantity:quantity,key:props.id});
    console.log(CrtCtx);
   }
    
    return(
            <form className={classes.form} >
                <Input label='Amount' attributes={{id:'amount_'+props.id,type:'number',defaultValue:'1',min:'1',max:'5',step:'1'}}></Input>
                <button onClick={addItemToCart}>+ADD</button>
            </form>
    )
}