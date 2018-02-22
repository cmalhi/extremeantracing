import React from 'react';
import './button-bar.css';

const ButtonBar = (props) => {
  return ( 
    <div className="button">
      <div className="button-progress"></div>
      <div className="button-title">complete</div>
    </div>
  );
}

export default ButtonBar;
