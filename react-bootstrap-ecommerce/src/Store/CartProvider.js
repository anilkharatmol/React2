import { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider(props){


    const [items,updateItems]=useState([]);

   async function addItemToCartHandler(item){

            const existingItemIdx = items.findIndex(i => i.id === item.id);
          
            if (existingItemIdx === -1) {
              updateItems([...items, item]);
            } else {
              const temp = [...items];
              temp[existingItemIdx].quantity =temp[existingItemIdx].quantity + 1;
              updateItems(temp);
            }
       
              await fetch('https://crudcrud.com/api/7f7e542e452d4d04835c52cc0717fba3/cartakharatmol8gmailcom',{
                 method:'POST',
                 body:JSON.stringify(item),
                 headers:{
                   'Content-type':'application/json'
                 }
               })
              //  const data=await response.json();
              //    console.log(data);
                
               
    }

    function removeItemFromCartHAndler(item){
        const existingItemIdx = items.findIndex(i => i.id === item.id);
          
        const temp = [...items];
        if((temp[existingItemIdx].quantity)>0){
        temp[existingItemIdx].quantity = (temp[existingItemIdx].quantity) - 1;
        updateItems(temp);
      }
      
    }
      
      const cartContext={
        items:items,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHAndler
      }
      return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}