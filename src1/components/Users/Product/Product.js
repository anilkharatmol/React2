import React from 'react';

import "./Product.css";

const Product = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <div>
    <li className="user-item" >
      {props.children}
      <button style={{color:'red',textAlign:'center',float:'right'}} onClick={deleteHandler}>Delete Product</button>
    </li>

    </div>
  );
};

export default Product;
