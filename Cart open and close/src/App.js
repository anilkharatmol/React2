import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";


function App() {

  const[cartIsShown,setCartIsShown]=useState(false);

  function showCart(){
    setCartIsShown(true);
  }

  function hideCart(){
    setCartIsShown(false);
  }
  return (
    <React.Fragment>
      {cartIsShown&&<Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}/>
      <Meals/>
    </React.Fragment>
  );
}

export default App;
