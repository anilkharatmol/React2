import React from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";


function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header/>
      <Meals/>
    </React.Fragment>
  );
}

export default App;
