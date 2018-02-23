import React from 'react';
import './card.css';
import Stats from '../stats/stats';
import ProgressBar from '../../bar/progress-bar/progress-bar';

const Card = (props) => {
  return ( 
  	<div className="card-container">
      <div className="name">{props.name}</div>
      <br />
      <Stats name={props.name} weight={props.weight} length={props.length} color={props.color} likelihood={50}/>
	  <ProgressBar />
     </div>
  );
}

export default Card;
