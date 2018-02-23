import React from 'react';
import './stats.css';

const Stats = (props) => {
  return ( 
    <div className="stats-container">
      <div>
        <div className="title">color</div>
        <div className="entry">{props.color}</div>
      </div>
      <div>
        <div className="title">weight</div>
        <div className="entry">{props.weight}mg</div>
      </div>
      <div>
        <div className="title">length</div>   
        <div className="entry">{props.length}mm</div>
      </div>
      <div>
        <div className="title">likelihood</div>   
        <div className="entry">{props.likelihood}</div>
      </div>
    </div>
  );
}

export default Stats;




