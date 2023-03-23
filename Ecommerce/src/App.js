import "./App.css";
import React, { useState } from "react";
import { Badge, Button, Card, Container} from "react-bootstrap";
import Cart from "./Components/Cart/Cart";

const App=()=> {
  const productsArr = [
    {
      id:Math.random().toString(),
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:Math.random().toString(),
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:Math.random().toString(),
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:Math.random().toString(),
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const product = productsArr.map((product) => (
  <Card style={{ width: '20rem',marginLeft:'10cm'}}>
<Card.Body>
  <Card.Header><h3>{product.title}</h3></Card.Header>
<Card.Img variant="top" src={product.imageUrl} />
  <Card.Text><h3>Rs {product.price}</h3></Card.Text>
  <Button variant="primary">ADD TO CART</Button>
</Card.Body>
</Card>


  ));
  
  const[showCart,setShowCart]=useState(false);

  function onShow(){
      setShowCart(true);
  }

  function hideCart(){
    setShowCart(false);
  }


  return (
    <>
     <header>
      <ul className="header">
        <li ><a className="list" href="#">Home</a></li>
        <li ><a className="list" href="#">Store</a></li>
        <li ><a className="list" href="#">About</a></li>
        <Card>
        <Button variant="success"  onClick={onShow}>Cart
        <Badge>0</Badge></Button>
      </Card>
        </ul>
     </header>
     <Container>
     {showCart &&<Cart onHide={hideCart}>  </Cart>}
     </Container>
     <h1 style={{textAlign:"center",backgroundColor:"grey",color:"white",fontSize:'150px',padding:'40px'}}>The Generics</h1>
     <h3 style={{textAlign:"center"}}>Music</h3>
     <Container className="mb-2">{product}</Container>
     <Button variant="info" style={{marginLeft:'15cm',marginBottom:'1cm'}}> See the Cart</Button>
     <footer style={{color:'white',backgroundColor:'CaptionText',textAlign:'center'}}><h1>The Generics</h1></footer>
    </>
  );
}

export default App;
