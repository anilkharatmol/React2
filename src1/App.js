import React, { useState } from 'react';

import ProductList from './components/Users/ProductList/ProductList';
import ProductInput from './components/Users/ProductInput/ProductInput';
import './App.css';

const App = () => {
  const [Products, setProducts] = useState([]);

  const addProdutHandler = (ProductId,SellingPrice,ProductName) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.unshift({ ID: ProductId, price:SellingPrice, name:ProductName, id: Math.random().toString() });
      localStorage.setItem(updatedProducts.name,JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  function deleteProductHandler(prodid){
        setProducts(prevProducts=>{
          const updatedProducts=prevProducts.filter((product)=> product.id !== prodid);
          localStorage.removeItem(updatedProducts.name);
          return updatedProducts;
        })
  }

  return (
    <div>
      <section id="User-form">
        <ProductInput onAddProduct={addProdutHandler} />
      </section>
      <section id="Users">
      <ProductList items={Products}  onDeleteItem={deleteProductHandler} />
      </section>
    </div>
  );
};

export default App;
