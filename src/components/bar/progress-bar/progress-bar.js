import React from 'react';
import './progress-bar.css'

const ProgressBar = (props) => {
  return ( 
    <div>
      <div className="bar">
        <div className="inner-bar" style={{width: `${props.progress || 5}%`}}></div>
      </div>
      <div className="progress">{props.progressState || 'not started'}</div>
    </div>
  );
}

export default ProgressBar;
