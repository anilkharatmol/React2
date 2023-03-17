import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {

  const[cartIsShown,setCartIsShown]=useState(false);

  function showCart(){
    setCartIsShown(true);
  }

  function hideCart(){
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown&&<Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
