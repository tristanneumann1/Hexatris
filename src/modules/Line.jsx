import React from 'react';
import HexUnit from './Hex.jsx';
import '../styles/Line.css';

const Line = (props) => {
  const { hexLine } = props;
  console.log('hexLine', hexLine);
  return(
    <div className={'Line'}>
      {hexLine.map((hex) => {
        return(
          <HexUnit key={`${hex.x}_${hex.y}`} hex={hex}/>
        )
      })}
    </div>
  )
}

export default Line;
