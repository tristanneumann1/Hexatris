import React, { Component } from 'react';
import hexes from '../hexClass.js';
import HexUnit from './Hex.jsx';

const hexesArray = [...Object.values(hexes)];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexesArray,
    }
  }
  render() {
    const {active} = this.state;
    return (
      <div className="Board-container">
        <div className={'Board-' + active}>
          {hexesArray.map(hex => {
            return <HexUnit key={`${hex.x}_${hex.y}`} hex={hex}/>
          })}
        </div>
      </div>
    );
  }
}

export default Board;

/*
    (3 1 2 3)   (3 3 3 2)
(2 0 1 3)   (2 2 2 2)   (2 4 3 1)
    (1 1 1 2)   (1 3 2 1)
(0 0 0 2)   (0 2 1 1)   (0 4 2 0)
*/
