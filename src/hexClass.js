import { height, width } from './config.js';

class Hex {
  constructor(y, x) {
    this.hexL = null;
    this.hexR = null;
    this.next = null;
    this.y = y;
    this.x = x;
    this.active = 0;
  }
  getPrevious() {
    const previous = new Hex(this.y + 2, this.x);
    previous.next = this;
    return previous;
  }
  getNext() {
    const next = new Hex(this.y - 2, this.x);
    this.next = next;
    return next;
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
const hexes = [];
let Q = [];
for(let i = 0; i < width; i++) {
  hexes[0] = hexes[0] || [];
  hexes[1] = hexes[1] || [];

  Q.push(hexes[0][i * 2] = new Hex(0, i * 2));
  Q.push(hexes[1][i * 2 + 1] = new Hex(1, i * 2 + 1));
}

for(let j = 1; j < height; j++) {
  let newQ = [];
  while(Q.length) {
    const current = Q.pop();
    const previous = current.getPrevious();
    hexes[current.y + 2] = hexes[current.y + 2] || [];
    hexes[current.y + 2][current.x] = previous;
    newQ.push(previous);
  }
  Q = newQ;
}

export default hexes;
