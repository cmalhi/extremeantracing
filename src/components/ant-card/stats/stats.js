import React from 'react';
import './stats.css';
import CountUp from 'react-countup';

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
        <div className="entry">
          <CountUp 
            start={0} 
            end={props.likelihood || 0} 
            duration={2}
            useEasing={true}
            suffix={'%'}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;




