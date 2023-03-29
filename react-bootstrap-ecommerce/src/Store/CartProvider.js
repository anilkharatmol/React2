import { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider(props){


    const [items,updateItems]=useState([]);

    function addItemToCartHandler(item){

            const existingItemIdx = items.findIndex(i => i.id === item.id);
          
            if (existingItemIdx === -1) {
              updateItems([...items, item]);
            } else {
              const temp = [...items];
              temp[existingItemIdx].quantity =temp[existingItemIdx].quantity + 1;
              updateItems(temp);
            }
          
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