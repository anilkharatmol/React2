import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Item from "./Components/Item";
import CartButton from "./Components/Cart/CartButton";

export default function Root() {
  const productsArr = [
    {
      id: Math.random().toString(),
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: Math.random().toString(),
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: Math.random().toString(),
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: Math.random().toString(),
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const item = productsArr.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      quantity={1}
    ></Item>
  ));

  const [showCart, setShowCart] = useState(false);

  function onShow() {
    setShowCart(true);
  }

  function hideCart() {
    setShowCart(false);
  }

  return (
    <CartProvider>
      <header>
        <ul className="header">
          <li>
            <NavLink className={() => "list"} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={() => "list"} to="/">
              Store
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className={() => "list"} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <CartButton onClick={onShow}></CartButton>
          </li>
        </ul>
      </header>
      {showCart && <Cart onHide={hideCart}> </Cart>}
      <h1
        style={{
          textAlign: "center",
          fontFamily: "-moz-initial",
          fontWeight: "bold",
          backgroundColor: "grey",
          color: "white",
          fontSize: "150px",
          padding: "40px",
        }}
      >
        The Generics
      </h1>
      <h3 style={{ textAlign: "center" }}>Music</h3>
      <Container className="mb-2">{item}</Container>
      <Button
        variant="info"
        style={{ marginLeft: "15cm", marginBottom: "1cm" }}
      >
        {" "}
        See the Cart
      </Button>
      <footer
        style={{
          color: "white",
          backgroundColor: "CaptionText",
          textAlign: "center",
        }}
      >
        <h1>The Generics</h1>
      </footer>
      <Outlet />
    </CartProvider>
  );
}
