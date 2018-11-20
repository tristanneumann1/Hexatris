import React, { Component } from 'react';
import hexes from '../hexClass.js';
import Line from './Line.jsx';
console.log('hexes: ', hexes);

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexes,
    }
  }
  render() {
    const {active} = this.state;
    return (
      <div className="Board-container">
        <div className={'Board'}>
          {hexes.map((hexLine, i) => {
            return <Line key={i} hexLine={hexLine}/>
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
