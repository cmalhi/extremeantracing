import React from 'react';
import Card from '../ant-card/card/card';

const AntList = (props) => {

  const list = props.ants.map((ant, i) => {
    return (
      <div key={ant.name + i.toString()}>
        <Card 
          name={ant.name} 
          length={ant.length} 
          color={ant.color} 
          weight={ant.weight}
          likelihood={ant.likelihood}
        />
      </div>
    )
  });
  return ( 
    <div >
        {list}
    </div>
  );
  
}

export default AntList;
