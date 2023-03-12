import React from 'react';

import Product from '../Product/Product';
import './ProductList.css';

const ProductList = props => {

    let a=0;

    props.items.map(product => (
      a=a+(+product.price)
      ))

  return (
    <div>
    <h1>PRODUCTS</h1>
    <ul className="user-list">
      {props.items.map(product => (
        <Product 
        key={product.id}
        id={product.id}
        onDelete={props.onDeleteItem}
        >
           {product.price} {product.name}
        </Product>
      ))}
      </ul>
        <h4>Total value worth products:{a}</h4>
      </div>
  );
};

export default ProductList;
