import { height, width } from './config.js';

class Hex {
  constructor(x, y) {
    this.hexL = null;
    this.hexR = null;
    this.next = null;
    this.x = x;
    this.y = y;
    this.active = 0;
  }
  previous() {
    const previous = new Hex(this.x, this.y + 2);
    previous.next = this;
    return previous;
  }
  activateToggle() {
    this.active = (this.active === 1)? 0 : 1;
  }
  linkL(hex) {
    this.hexL = hex;
  }
  linkR(hex) {
    this.hexR = hex;
  }
}
const hexes = {};
for(let i = 0; i < width; i ++) {
  hexes[`${i * 2},0`] = new Hex(i * 2, 0);
  hexes[`${i * 2 + 1},1`] = new Hex(i * 2 + 1, 1);
}

let Q = [...Object.values(hexes)];

for(let j = 0; j < height - 1; j++) {
  let newQ = [];
  while(Q.length) {
    const current = Q.pop();
    const previous = current.previous();
    hexes[`${current.x},${current.y + 2}`] = previous;
    newQ.push(previous);
  }
  Q = newQ;
}

export default hexes;
