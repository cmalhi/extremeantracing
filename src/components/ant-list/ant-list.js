import React from 'react';
import Card from '../ant-card/card/card';
import FlipMove from 'react-flip-move';

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
          progress={ant.progress}
          progressState={ant.progressState}
        />
      </div>
    )
  });
  return ( 
    <div >
      <FlipMove duration={750} easing="ease-out">
        {list}
      </FlipMove>
    </div>
  );
  
}

export default AntList;
