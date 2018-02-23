import React from 'react';
import './button-bar.css';

const ButtonBar = (props) => {
  return ( 
    <div className="button" onClick={props.click}>
      <div className="button-progress" style={{width: `${props.totalProgress}%`}}></div>
      <div className="button-title">{props.progressState}</div>
    </div>
  );
}

export default ButtonBar;
