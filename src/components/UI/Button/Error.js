import React from 'react';

import Button from './Button';

const Error = (props) => {
  return (
    <div>
    <div onClick={props.onRemove} />
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer >
        <Button onClick={props.onRemove}>Okay</Button>
      </footer>
  </div>
  );
};

export default Error;