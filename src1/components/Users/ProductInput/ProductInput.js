import React, { useState} from "react";

import "./ProductInput.css";
import Button from "../../UI/Button/Button";

const ProductInput = (props) => {
 

  const [enteredId, setEnteredId] = useState("");

  const idInputChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const [enteredPrice, setEnteredPrice] = useState("");

  function priceInputChangeHandler(event) {
    setEnteredPrice(event.target.value);
  }

  const[ProductName,setProductName]=useState("");

  function productNameInputHandler(event){
    setProductName(event.target.value);
  }
  

  const formSubmitHandler = (event) => {

   

    event.preventDefault();
 
    setEnteredId("");
    setEnteredPrice("");
    setProductName("");
    props.onAddProduct(enteredId, enteredPrice,ProductName);
  };

 

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Product ID</label>
          <input
            type="number"
            id="productid"
            value={enteredId}
            onChange={idInputChangeHandler}
          />
          <label>Selling Price</label>
          <input
            type="number"
            id="price"
            value={enteredPrice}
            onChange={priceInputChangeHandler}
          />
          <label>Product Name</label>
          <input
            type="text"
            id="productname"
            value={ProductName}
            onChange={productNameInputHandler}
          />
        </div>
        <Button type="submit">Add Product</Button>
      </form>
          </div>
  );
};

export default ProductInput;

  /* {(isValid && <button className='button' type="submit">Add User</button>)}
{(!isValid && 
  <div>
    <div>
    <button className='button' type="submit" onClick={remove}>Add User</button>
    <h1 style={{color:'red',fontSize:'20'}}>Invalid input</h1>
    <p>Please enter valid name and age</p>
    <button onClick={remove}>OK</button>
    </div>
  </div>
  )}
  {(!validAge && 
    <div>
    <h1 style={{color:'red',fontSize:'20'}}>Invalid age</h1>
    <p>Please enter valid age greater than 0</p>
    <button>OK</button>
    </div>
  )} */

