import React, { Component } from 'react';
import '../styles/Hex.css';

class HexUnit extends Component {
  constructor(props) {
    super(props);
    const { hex } = props;
    this.state = {
      active: hex.active,
      x: hex.x,
      y: hex.y,
    }
  }
  render() {
    const {active} = this.state;
    return (
      <div className="Hex-container">
        <div className={'Hex Hex-' + active}>
          <span>{this.state.y}</span>
        </div>
      </div>
    );
  }
}

export default HexUnit;
