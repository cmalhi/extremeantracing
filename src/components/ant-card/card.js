import React from 'react';
import './card.css'

const Card = (props) => {
  return ( 
  	<div className="card-container">
      <div className="name">{props.name}</div>
      <br />
      <div>
	      <div className="title">length</div>
	      <div className="entry">{props.length}</div>
	      <div className="title">weight</div>
	      <div className="entry">{props.weight}</div>
	      <div className="title">color</div>
	      <div className="entry">{props.color}</div>
	      <div className="title">likelihood</div>
	      <div className="entry">0%</div>
	    </div>
     </div>
  );
}

export default Card;
