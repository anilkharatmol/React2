import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import CartProvider from "./Store/CartProvider";
import MedicineItem from "./Components/Medicines/MedicineItem";
import Card from "./Components/UI/Card";
import AddItemForm from "./Components/Medicines/AddItemForm";
import classes from './Components/Medicines/MedicineList.module.css';


function App() {

  const[cartIsShown,setCartIsShown]=useState(false);

  function showCart(){
    setCartIsShown(true);
  }

  function hideCart(){
    setCartIsShown(false);
  }

  const DummyMedicines = [
    {
      id: Math.random().toString(),
      name: "Paracetamol",
      description: "Used to cure fever",
      price: "20",
    },
    {
      id: Math.random().toString(),
      name: "Dolo 650",
      description: "Used to cure cold,aches,fever etc.",
      price: "30",
    },
    {
      id: Math.random().toString(),
      name: "Nasal Spray",
      description: "Nasal decongestent",
      price: "200",
    },
    {
      id: Math.random().toString(),
      name: "Dettol",
      description: "Anticeptic",
      price: "300",
    },
  ];

  const[medicines,setMedicines]=useState(DummyMedicines);

  
  const med = medicines.map((med) => (
    <MedicineItem key={med.id} id={med.id} name={med.name} description={med.description} price={med.price}></MedicineItem>
    ));
  
  
    function addToList(medicine){
      setMedicines((prevMedicines)=>{
        return [...prevMedicines,medicine];
      });
    }

  return (
    <CartProvider>
      {cartIsShown&&<Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}/>
      <section className={classes.meals}>
        <AddItemForm  onClick={addToList}/>
      <ul>
        <Card>{med} </Card>
      </ul>
    </section>
    </CartProvider>
  );
}

export default App;
