import CartContext from "../../Store/CartContext";
import React,{useContext} from "react";
import { Button,Badge } from "react-bootstrap";

export default function CartButton(props){
    const ctx= useContext(CartContext);
let quantity=0;
ctx.items.forEach((item)=>{
    quantity=quantity+item.quantity;
})
 
 return(
<Button variant="success"  onClick={props.onClick}>Cart
<Badge >{quantity}</Badge></Button>
 )

}