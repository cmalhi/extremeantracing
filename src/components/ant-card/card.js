import React from 'react';

const Card = (props) => {
  return ( 
  	<div>
  	  <div>name</div>
      <div>{props.name}</div>
      <div>name</div>
      <div>{props.length}</div>
      <div>name</div>
      <div>{props.weight}</div>
      <div>name</div>
      <div>{props.color}</div>
      <div>likelihood</div>
      <div>0%</div>
     </div>
  );
}

export default Card;
