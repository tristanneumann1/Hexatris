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
        <div className={'Hex-' + active}>
          {this.state.y}
        </div>
      </div>
    );
  }
}

export default HexUnit;
