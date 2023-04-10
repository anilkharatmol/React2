import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import CartProvider from "./Store/CartProvider";
import CandieItem from "./Components/Candies/CandieItem";
import Card from "./Components/UI/Card";
import AddItemForm from "./Components/Candies/AddItemForm";
import classes from './Components/Candies/CandieList.module.css';


function App() {

  const[cartIsShown,setCartIsShown]=useState(false);

  function showCart(){
    setCartIsShown(true);
  }

  function hideCart(){
    setCartIsShown(false);
  }

  const DummyCandies = [
    {
      id: Math.random().toString(),
      name: "Cola Candy",
      description: "Cola flavour",
      price: "100",
    },
    {
      id: Math.random().toString(),
      name: "Mango Candy",
      description: "Mango Candy is an all-natural sweet-sour tasty treat",
      price: "250",
    },
    {
      id: Math.random().toString(),
      name: "Fruity Candie",
      description: "Skittles Original fruit chewy candy",
      price: "150",
    },
  ];

  const[candies,setCandies]=useState(DummyCandies);


  fetch('https://crudcrud.com/api/26c6a22935e349eebea672702aafbaac/Candies',{
    method:'POST',
    body:JSON.stringify({DummyCandies}),
    headers:{
      'Content-Type':'application/json'
    }
  }).then((res)=>{console.log(res)}).catch(err=>{console.log(err);})
  
  const candy = candies.map((candy) => (
   
    <CandieItem key={candy.id} id={candy.id} name={candy.name} description={candy.description} price={candy.price}></CandieItem>
    ));
  
  
    function addToList(candy){
      setCandies((prevCandies)=>{
        return [...prevCandies,candy];
      });

    
    }

  return (
    <CartProvider>
      {cartIsShown&&<Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}/>
      <section className={classes.candies}>
        <AddItemForm  onClick={addToList}/>
      <ul>
        <Card>{candy} </Card>
      </ul>
    </section>
    </CartProvider>
  );
}

export default App;
